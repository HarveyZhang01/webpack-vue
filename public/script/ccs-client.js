(function(global){
    'use strict';
    let g;
    if (typeof window !== "undefined") {
        g = window;
    } else if (typeof global !== "undefined") {
        g = global;
    } else if (typeof self !== "undefined") {
        g = self;
    } else {
        g = this;
    }

    const CCSClient = function(){
        let that = {};
        let firstlistenMessage = true;
        let msgEventlisteners = {};

        const defaultOptions = {
            reconnect: false,
            secure: false,
            'force new connection': true
        };

        const send = (eventName, data, ack ) => {
            //if(that.socket && that.socket.connected){
            if(that.socket){
                if(data){
                    that.socket.emit(eventName, data, ack);
                } else {
                    that.socket.emit(eventName, ack);
                }
            } else {
                console.log('There is no socket connection or  connection disconnected!');
            }
        }

        const receive = (eventName, ack) => {
            if(that.socket ){
                that.socket.on(eventName, ack);
            } else {
                console.log('There are no cocket connections !');
            }
        }

        let flag = true;

        that.connect = (url, token) => {

            let connectUrl = url
            let index = url.indexOf("?")
            let query = {};
            if( index!= -1){
                connectUrl = url.substr(0, index);
                let str = url.substr(index+1);
                let strs =str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    let item = strs[i];
                    let sIn = item.indexOf("=")
                    if(sIn != -1){
                        let key = item.substr(0, sIn);
                        let value = item.substr(sIn+1);
                        query[key] = value;
                    }
                }
            }

            query.token = token;
            defaultOptions.query = query;

            const socket = ivcsio.connect(connectUrl, defaultOptions);
            that.socket = socket;

            that.socket.on('connect', function(){
                if(firstlistenMessage){
                    onMessage();
                    firstlistenMessage = false;
                }
            });
        };

        that.requestSession = (data, ack) => {
            send('request-session', data, function(status, resp){
                try {
                    if(status === 'ok'){
                        let re = {
                            clientId: resp.clientId,
                            sessionId: resp.sessionId,
                            roomToken: resp.roomToken,
                            roomId: resp.roomId,
                            ticket: resp.ticket,
                            refershTicketTime:resp.refersh_ticket_time
                        };
                        that.clientId = resp.clientId;
                        ack(status, re);
                    } else {
                        ack(status, resp);
                    }
                } catch (error) {
                    console.log('requestSession Error-', error);
                }
            });
        };

        that.joinSession = (data, ack) => {
            send('join-session', data, function(status, resp){
                try {
                    if(status === 'ok'){
                        let re = {
                            clientId: resp.clientId,
                            sessionId: resp.sessionId,
                            roomToken: resp.roomToken,
                            roomId: resp.roomId,
                            ticket: resp.ticket,
                            members: resp.members,
                            refershTicketTime:resp.refersh_ticket_time
                        };
                        that.clientId = resp.clientId;
                        ack(status, re);
                    } else {
                        ack(status, resp);
                    }
                } catch (error) {
                    console.log('joinSession Error-', error);
                }
            });
        };

        that.quitSession = (ack) => {
            send('quit-session', null, function(status, resp){
                ack(status, resp);
            });
        }

        that.disconnect = () => {
            if(that.socket){
                that.socket.disconnect();
            } else {
                console.log('There is no socket connection!');
            }
        };

        that.close = () => {
            if(that.socket){
                that.socket.close();
            } else {
                console.log('There is no socket connection!');
            }
        }

        /**
         * agent/customr send message
         */
        that.sendMessage = (data, ack) => {
            send('session-message', data, function(status, resp){
                ack(status, resp);
            });
        }

        that.onMessage = (ack) => {
            receive('session-message', function(from, msg){
                try {
                    let msgData = {
                        msgType: msg.msgType,
                        content: msg.content
                    };
                    ack(from, msgData);
                } catch (error) {
                    console.log('onMessage Error-', error);
                }
            })
        }

        that.onDisconnect = (ack) => {
            receive('disconnect', function(reason){
                ack(reason);
            })
        }

        that.resumeConnection = (ticket, ack) => {
            send('resume-connection', ticket, function(status, resp){
                try {
                    if(status === 'ok'){
                        let agent = {
                            agentId: resp.agentId,
                            ticket: resp.ticket
                        }
                        ack(status, agent);
                    } else {
                        ack(status, resp || 'resumeConnection error.');
                    }
                } catch (error) {
                    console.log('resumeConnection error', error);
                }
            });
        }

        that.refreshTicket = (ack) => {
            send('refresh-ticket', null, function(status, resp){
                try {
                    if(status === 'ok'){
                        let agent = {
                            agentId: resp.agentId,
                            ticket: resp.ticket
                        }
                        ack(status, agent);
                    } else {
                        ack(status, resp || 'refreshTicket error.');
                    }
                } catch (error) {
                    console.log('refreshTicket error', error);
                }
            });
        }

        that.onConnect = (ack) => {
            receive('connect', function(){
                ack();
            });
        }

        that.onError = (ack) => {
            receive('error', function(data){
                try {
                    let err = {
                        type: data.type,
                        code: data.code,
                        message: data.message
                    };
                    ack(err);
                } catch (error) {
                    console.log('onError error', error);
                }
            });
        }

        /************************ sission-message event begin***************************/

        let sendMessage = (type, data, to, ack) => {
            let msg = {};
            msg.type = type;
            msg.id = Math.round(Math.random() * 1000000000000000000) + '';
            msg.from = that.clientId;
            msg.to = to;
            msg.data = data;
            send('session-message', msg, function(status, resp){
                ack(status, resp, msg.id);
            });
        }
        let confirmReceiveMessage = (mesgId, toWhom)=>{
            let data = {
                id: mesgId
            };
            sendMessage('ack', data, toWhom, function(status, resp){
                if(status === 'ok'){
                    console.log(`send ack -- ${mesgId} ok`);
                } else {
                    console.log(`send ack -- ${mesgId} error`, resp);
                }
            });
        }
        let onMessage = () => { // socket connect 时设置onMessage，监听接收消息
            receive('session-message', function(msg){
                try {
                    let msgData = {
                        type: msg.type,
                        id: msg.id,
                        from: msg.from,
                        data: msg.data
                    };
                    if(msgData.type === 'peer-cmd'){
                        if( msgEventlisteners['peer-cmd'] &&  msgEventlisteners['peer-cmd'][msgData.data['cmd']]) {
                            msgEventlisteners['peer-cmd'][msgData.data['cmd']](msgData);
                        }

                    }else if(msgData.type === 'peer-status'){ //
                        if( msgEventlisteners['peer-status'] && msgEventlisteners['peer-status'][msgData.data['status']]){
                            msgEventlisteners['peer-status'][msgData.data['status']](msgData);
                        }
                    }else {
                        if(msgEventlisteners[msgData.type]){
                            msgEventlisteners[msgData.type](msgData);
                        }
                    }

                    if(msgData.type !== 'ack' && msgData.from !== 'system'){
                        confirmReceiveMessage(msg.id, msg.from);
                    }
                } catch (error) {
                    console.log('onMessage Error-', error);
                }
            })
        }

        /**
         *  'peer-status', Notification about participant actions, from 'system'
         *   data:object(PeerStatus):: {
         *         status: enum(['joined', 'quit', 'hold-on', 'start-typing', 'stop-typing','ready-to-talk']),
         *         at: string(ISOStringOfTime)
         *   }
         */
        that.holdOn = (toWhom, ack) => {
            try {
                let data = {
                    status: 'hold-on',
                    at: new Date().toISOString()
                }
                sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Send transferredOut msg error', error)
            }

        }
        that.onHoldOn = (ack) => {
            msgEventlisteners['peer-status'] =  msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['hold-on'] = ack;
        }
        that.startTyping = (toWhom, ack) => {
            try {
                let data = {
                    status: 'start-typing',
                    at: new Date().toISOString()
                }
                sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Send startTyping msg error', error);
            }
        }
        that.onStartTyping = (ack) => {
            msgEventlisteners['peer-status'] = msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['start-typing'] = ack;
        }

        that.stopTyping = (toWhom, ack) => {
            try {
                let data = {
                    status: 'stop-typing',
                    at: new Date().toISOString()
                }
                sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Send stopTyping msg error', error);
            }
        }
        that.onStopTyping = (ack) => {
            msgEventlisteners['peer-status'] = msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['stop-typing'] = ack;
        }

        that.readyToTalk = (toWhom, ack) => {
            try {
                let data = {
                    status: 'ready-to-talk',
                    at: new Date().toISOString()
                }
                sendMessage('peer-status', data, toWhom,function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Send readyToTalk msg error', error);
            }
        }
        that.onReadyToTalk = (ack) => {
            msgEventlisteners['peer-status'] =  msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['ready-to-talk'] = ack;
        }

        that.onQuitSession = (ack) => {
            msgEventlisteners['peer-status'] =  msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['quit'] = ack;
        }

        that.onJoinedSession = (ack) => {
            msgEventlisteners['peer-status'] = msgEventlisteners['peer-status'] || {};
            msgEventlisteners['peer-status']['joined'] = ack;
        }

        /**
         * Commond initiated by another participant.
         * type: 'peer-cmd'
         * data.cmd: ['take-photo', 'screen-snapshot']
         */
        that.takePhoto = (askForPermission, toWhom, ack) => {
            try {
                let data = {
                    cmd: 'take-photo',
                    askForPermission: askForPermission || false
                }
                sendMessage('peer-cmd', data, toWhom,  function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Seng takePhoto error', error);
            }
        }
        that.onTakePhoto = (ack) => {
            msgEventlisteners['peer-cmd'] = msgEventlisteners['peer-cmd'] || {};
            msgEventlisteners['peer-cmd']['take-photo'] = ack;
        }

        that.photoGuideBox = (askForPermission, toWhom, ack) => {
            try {
                let data = {
                    cmd: 'photo_guidebox',
                    askForPermission: askForPermission || false
                }
                sendMessage('peer-cmd', data, toWhom,  function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Seng takePhoto error', error);
            }
        }
        that.onPhotoGuideBox = (ack) => {
            msgEventlisteners['peer-cmd'] = msgEventlisteners['peer-cmd'] || {};
            msgEventlisteners['peer-cmd']['photo_guidebox'] = ack;
        }




        that.screenSnapshot = (askForPermission, toWhom, ack) => {
            try {
                let data = {
                    cmd: 'screen-snapshot',
                    askForPermission: askForPermission || false
                }
                sendMessage('peer-cmd', data, toWhom,  function(status, resp, msgId){
                    ack(status, resp, msgId);
                });
            } catch (error) {
                console.log('Seng screenSnapshot error', error);
            }
        }
        that.onScreenSnapshot = (ack) => {
            msgEventlisteners['peer-cmd'] = msgEventlisteners['peer-cmd'] || {};
            msgEventlisteners['peer-cmd']['screen-snapshot'] = ack;
        }


        /**
         * Plain text message.
         * type: 'text'
         * data: string
         */
        that.sendTextMessage  = (text, toWhom, ack) => {
            if(text && typeof(text) === 'string'){
                sendMessage('text', text, toWhom, function(status, resp, msgId){
                    ack(status, resp, msgId);
                })
            } else {
                console.log('Send text error, Only non-null string can be sent.');
            }
        }
        that.onTextMessage = (ack) => {
            msgEventlisteners['text'] = ack;
        }

        /**
         * Emoji path/coding
         * type: 'emoji'
         * data: string
         */
        that.sendEmojiMessage = (emoji, toWhom, ack) => {
            if(emoji && typeof(emoji) === 'string'){
                sendMessage('text', emoji, toWhom, function(status, resp, msgId){
                    ack(status, resp, msgId);
                })
            } else {
                console.log('Send emoji error, only non-null string can be sent.');
            }
        }
        that.onEmojiMessage = (ack) => {
            msgEventlisteners['emoji'] = ack;
        }

        /**
         * Send From data.
         * type: 'form'
         * data: JSONOfFormData
         */
        that.sendFormData = (formData, toWhom, ack) => {
            try {
                if(formData && JSON.stringify(formData)){
                    sendMessage('form', formData, toWhom, function(status, resp, msgId){
                        ack(status, resp, msgId);
                    })
                } else {
                    console.log('Send formData error, Data format error.');
                }
            } catch (error) {
                console.log('Send formData error,', error);
            }
        }
        that.onFormData = (ack) => {
            msgEventlisteners['form'] = ack;
        }

        /**
         * Link sharing.
         * type: 'link'
         * data: object(LinkSharing):: {
         *       url: string(ResourceUrl),
         *       type: enum(['doc', 'pic', 'video', 'audio', 'page', 'paper'])
         *     }
         */
        that.shareResource = (url, type,name, toWhom, ack) => {
            try {
                const types = ['doc', 'pic', 'video', 'audio', 'page', 'paper'];
                if(url && typeof(url) === 'string' && types.indexOf(type) > -1){
                    let data = {
                        url: url,
                        type: type,
                        name:name
                    }
                    sendMessage('link', data, toWhom,function(status, resp, msgId){
                        ack(status, resp, msgId);
                    });
                } else {
                    console.log('Send show resource error,', 'the url must be non-null string and action be included in ["jump-to", "embedded-view", "nothig"].');
                }
            } catch (error) {
                console.log('Send show resource error', error);
            }
        }
        that.onSharedResource = (ack) => {
            msgEventlisteners['link'] = ack;
        }

        /**
         * Realtime handwriting
         * type: 'handwriting'
         * data: object(Handwriting){
         *    line: array([object(Point)::{}])
         * }
         */
        that.sendHandwritingMessage = (data, toWhom, ack) => {
            sendMessage('handwriting', data, toWhom, function(status, resp, msgId){
                ack(status, resp, msgId);
            });
        }
        that.onHandwritingMessage = (ack) => {
            msgEventlisteners['handwriting'] = ack;
        }

        /**
         * Withdraw a message previously sent
         * type: 'withdraw'
         * data: msgId
         */
        that.withdrawMessage = (msgId, toWhom, ack) => {
            sendMessage('withdraw', msgId, toWhom, function(status, resp, msgId){
                ack(status, resp, msgId);
            })
        }
        that.onWithdrawnMessage = (ack) => {
            msgEventlisteners['withdraw'] = ack;
        }

        /**
         * Reserved for extension
         * custom
         */
        that.sendCustomMessage = (data, toWhom, ack) => {
            sendMessage('custom', data, toWhom, function(status, resp, msgId){
                ack(status, resp, msgId);
            })
        }
        that.onCustomMessage = (ack) => {
            msgEventlisteners['custom'] = ack;
        }

        /**
         * ack
         */
        that.onAck = (ack) => {
            msgEventlisteners['ack'] = ack;
        }

        /**
         * data:: {agentId: '', skill: ''}
         */
        that.invite = (data, ack) => {
          send('invite', data, function(status, resp){
            ack(status, resp);
          });
        }

        that.onDrop = (ack) => {
          receive('drop', function(){
            ack();
          })
        }

        /**
         * 'invitation-progress',  Notification about invitation progress, from 'system'
         * type: 'invitation-progress'
         * data:: {
         *  id: string(InvitationId),
         *  progress: {
         *       status: enum(['waiting', 'connecting', 'accepted', 'rejected']),
         *       agent: string(AgentId)
         *  },
         *  at: string(ISOStringOfTime)
         * }
         */
        that.onInvitationProgress = (ack) => {
            msgEventlisteners['invitation-progress'] = ack;
        }

        /************************ sission-message event end***************************/

        return that;

    }
    // const sioClient = new Client();
    g.ccsClient = CCSClient;
})(window)
