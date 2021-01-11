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

    const AMSClient = function(){
        let that = {};

        const defaultOptions = {
            reconnect: false,
            secure: false,
            'force new connection': true
        };
        const send = (eventName, data, ack ) => {
            if(that.socket && that.socket.connected){
                if(data){
                    that.socket.emit(eventName, data, ack);
                } else {
                    that.socket.emit(eventName, ack);
                }
            } else {
                ack('error', 'There is no socket connection or  connection disconnected!');
                console.log('There is no socket connection or  connection disconnected!');
            }
        }

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
        };
        const receive = (eventName, ack) => {
            if(that.socket ){
                that.socket.on(eventName, ack);
            } else {
                console.log('There are no cocket connections !');
            }
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
        that.login = (data, ack) => {
            try {
                send('agent-login', data, function(status, resp) {
                    if(status === 'ok'){
                        let agent = {
                            agentId: resp.agentId,
                            ticket: resp.ticket,
                            refershTicketTime:resp.refersh_ticket_time
                        };
                        ack(status, agent);
                    } else {
                        ack(status, resp);
                    }
                 });
            } catch (error) {
                console.log('Login Error-', error);
            }

        };
        that.logout = (ack) => {
            send('agent-logout', null, function(status, resp){
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'logout error.');
                    }
                } catch (error) {
                    console.log('Logout Error-', error);
                }

            });
        };
        that.ready = (ack) => {
            send('agent-ready', null, function(status, resp) {
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'ready error.');
                    }
                } catch (error) {
                    console.log('Ready Error-', error);
                }
            });
        };
        that.notReady = (ack) => {
            send('agent-unready', null, function(status, resp) {
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'notReady error.');
                    }
                } catch (error) {
                    console.log('notReady Error-', error);
                }
            });
        };
        that.otherWork = (data, ack) => {
            send('agent-otherWork', data, function(status, resp) {
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'otherWork error.');
                    }
                } catch (error) {
                    console.log('otherWork Error-', error);
                }
            });
        };
        that.answerCall = (ack) => {
            send('agent-answer',null, function(status, resp){
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'answer error.');
                    }
                } catch (error) {
                    console.log('AnswerCall Error-', error);
                }
            });
        }
        that.rejectCall = (ack) => {
            send('agent-reject',null, function(status, resp){
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'reject error.');
                    }
                } catch (error) {
                    console.log('rejectCall Error-', error);
                }
            });
        }
        that.hangup = (ack) => {
            send('agent-hangup',null, function(status, resp){
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'hangup error.');
                    }
                } catch (error) {
                    console.log('hangup Error-', error);
                }
            });
        }
        that.appoint = (data, ack) => {
            send('agent-appoint', data, function(status, resp){
                try {
                    if(status === 'ok'){
                        ack(status);
                    } else {
                        ack(status, resp || 'appoint error.');
                    }
                } catch (error) {
                    console.log('appoint Error-', error);
                }
            });
        };

        that.onRing = (ack)=> {
            receive('ring', function(data,onResponse){
                try {
                    onResponse('ok');
                    let session = {};
                    console.log('ring data',data);
                    session.sessionId = data.id;
                    session.url = data.url;
                    session.skill = data.skill;
                    session.userData = data.onConnect;
                    ack(session);
                } catch (error) {
                    console.log('onRing error', error);
                }
            });
        }
        that.onStopRinging = (ack)=>{
            receive('stop-ringing', function(){
                ack();
            });
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

        that.onDisconnect = (ack) => {
            receive('disconnect', function(reason){
                ack(reason);
            })
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

        that.onRelease = (ack)=> {
          receive('stop-ringing', ack);
        };

        that.onDrop = (ack) => {
            receive('drop', function(){
                ack();
            })
        }

        that.onReplaced = (ack) => {
            receive('replaced', function(){
                ack();
            })
        }

        return that;

    }
    // const sioClient = new Client();
    g.amsClient = AMSClient;
})(window)
