import axios from 'axios'

var backendUrl = localStorage.getItem('serverUrl');

var amsurl = localStorage.getItem('amsUrl');


export const setUrl = () =>{
    backendUrl = localStorage.getItem('serverUrl');
    amsurl = localStorage.getItem('amsUrl');
}

/*test api*/
export const test = (para) =>{
    return axios.post(backendUrl+'/api/rooms/token',para,{headers:{
            'Content-Type':'application/json',
            'x-access-token':localStorage.getItem('agentToken')
        }})
}

/*agent login*/
export const login = (name,pwd,org) =>{
  return axios.post(loginUrl+'/api/v1/auth/logon',{
     userName:name,
     pwd:pwd,
     role:"agent",
     org:org
  },{
    "Content-Type":"application/json"
  })
}


export const getsessiondetail = (sessionId) =>{
  return axios.get(backendUrl+'/api/v1/session/'+sessionId+'/record',{headers:{
      'Content-Type':'application/json',
    }
  });
}

export const getFormTemplate = (skill) =>{
    return axios.get(backendUrl+'/api/skills/'+skill+'/formTemplate',{headers:{
            'Content-Type':'application/json',
        }
    });
}

/*识别ocr图片*/
export const ocrPicture = (picUrl,side) => {
    return axios.post(backendUrl+`/api/ocr/idcard`,{
        idcardUrl:picUrl,
        side:side
    },{headers:{
            'Content-Type':'application/json',
            'x-access-token':localStorage.getItem('agentToken')
        }})
}

/*更新技能组*/
export const updateskill = (org,name,skill) =>{
    return axios.patch(amsurl+'/v1/orgs/'+ org+'/names/'+name, [
      { "op": "replace", "path": "/skills", "value": [skill] }
    ],{
      "Content-Type":"application/json"
    })
}




export const createroom = (roomname) => {
  return axios.post(backendUrl+`/rooms`,{
    "name":roomname,
    "options":{}
  },{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}

export const getroomtoken = (roomid,userai) => {
  return axios.post(backendUrl+`/tokens`,{
    "room":roomid,
    "user":userai,
    "role":"presenter"

  },{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}


/*转接*/
export const transfer = (data) => {
  return axios.post(amsurl+`/v1/invitations`,data,{headers:{
      'Content-Type':'application/json',
    }})
}


/*获取访客提交的用户信息*/
export const getuserforminfo = (formid) =>{
  return axios.get(backendUrl+'/api/formInfo/'+formid,{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }
  });
}

/*获取客户在线提交表单*/
export const getsessionformdata = (sessionId) =>{
  return axios.get(backendUrl+'/api/sessions/'+sessionId+'/applications',{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }
  });
}

/*保存图片：（post）localhost:3001/api/uploadImg
{customerId, image}
*/
export const saveimg = (para) => {
  return axios.post(backendUrl+`/api/uploadImg`,para,{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}


export const startrecord = (url,data) =>{
  return axios.post(backendUrl+url,data,{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}

/*停止录制stream*/
export const stoprecording = (roomId,recordid) =>{
  return axios.delete(backendUrl+'/rooms/'+roomId+'/recordings/'+recordid,{headers:{
      'x-access-token':localStorage.getItem('agentToken')
    }
  })
}

export const streamoutmystream = (roomid,para) => {
  return axios.post(`${backendUrl}`+'/rooms/'+roomid+'/streaming-outs',para,{headers:{
      'Content-Type':'application/json'
    }})
}

export const streaminrtmp = (roomid,para) => {
  return axios.post(`${backendUrl}`+'/rooms/'+roomid+'/streaming-ins',para,{headers:{
      'Content-Type':'application/json'
    }})
}

export const addmix = (roomid,streamId)=> {
  return axios.patch(backendUrl+'/rooms/'+roomid+'/streams/'+streamId,[{"op":"add","path":"/info/inViews","value":"common"}],{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}


/*保存session: (POST)localhost:3001/api/imcc/session
{customerId, sessionId}*/
export const savesession = (para) => {
  return axios.post(backendUrl+`/api/imcc/session`,para,{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}

export const savesessionform = (para) => {
  return axios.post(backendUrl+`/api/v1/session/form`,para,{headers:{
      'Content-Type':'application/json',
      'x-access-token':localStorage.getItem('agentToken')
    }})
}

export const getVideoLinkResource = ()=>{
    return axios.get(backendUrl+'/api/public/resource-link',{
        headers:{
            'Content-Type':'application/json'
        }});
}


export const storageLoginData = (result,resp) =>{
    localStorage.setItem('agentName',result.data.userName);
    localStorage.setItem('agentToken',resp.data.data.accessToken);
    localStorage.setItem('userId',result.data.id);
    localStorage.setItem('agentOrg',result.data.org);
    var urls = resp.data.data.urls;
    localStorage.setItem('serverUrl',urls.backendurl);
    localStorage.setItem('amsUrl',urls.amsurl);
    localStorage.setItem('uploadUrl',urls.uploadUrl+'/v1/upload');
    localStorage.setItem('turnserverUrl',urls.turnserverUrl);
    localStorage.setItem('turnserverCredential',urls.turnserverCredential);
    localStorage.setItem('turnserverUsername',urls.turnserverUsername);
    localStorage.setItem('rtmpServer',urls.rtmpServer);
}

export const cacheLoginData = (resp,groupNames) =>{
    sessionStorage.setItem('groupsNames',groupNames);
    localStorage.setItem('agentToken',resp.token);
    localStorage.setItem('serverUrl',resp.backendUrl);
    backendUrl = resp.backendUrl;
}


export const uploadFileWithFormData = (url,data) =>{
    return axios.post(url,data,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
}


export const getGroupWithUserId = (userId,page,pagesize) =>{
    return axios.get(backendUrl+'/api/user-group-relations'+'?page='+page+'&pageSize='+pagesize+'&userId='+userId,{
        headers:{
            'x-access-token':localStorage.getItem('agentToken')
        }
    })
}


export const getAllGroups = () =>{
    return axios.get(backendUrl+'/api/groups/options',{
        headers:{
            'x-access-token':localStorage.getItem('agentToken')
        }
    })
}


export const getGroupsDetailWithName = (name) =>{
    return axios.get(backendUrl+'/api/groups/names/'+name,{
        headers:{
            'x-access-token':localStorage.getItem('agentToken')
        }
    })
}

/**
 * 保存业务流程的完成情况
 * @param para
 * @returns {Promise<AxiosResponse<T>>}
 */
export const saveWorkFlowStep = (para) => {
    return axios.post(backendUrl+`/api/saveCheckListInfo`,para,{
        headers:{
            'Content-Type':'application/json',
            'x-access-token':localStorage.getItem('agentToken')
        }})
}

export const  responseError = (response,responseErrorMessage) =>{
    if (response&&response.data){
        var code = response.data.code;
        if (code === '1302'){
            responseErrorMessage('ivcs.pwdSame');
        }
        else if (code === '1001'){
            responseErrorMessage('ivcs.userNotExist');
        }
        else if (code === '1002'){
            responseErrorMessage('ivcs.userExist');
        }
        else if (code === '1103'){
            responseErrorMessage('ivcs.pwdError');
        }
        else if (code === '1104'){
            responseErrorMessage('ivcs.accountError');
        }
        else if (code === '1401'){
            responseErrorMessage('ivcs.dbError');
        }
        else if(code === '1301'){
            responseErrorMessage('ivcs.sendDataError');
        }
        else if(code === '1101'){
            responseErrorMessage('ivcs.accountAuthError');
        }
        else if(code === '1102'){
            responseErrorMessage('ivcs.requestReject');
        }
        else if(response.status === 401){
            responseErrorMessage('ivcs.accountInvalid');
        }
    }else{
        responseErrorMessage('undefined');
    }
}


export const getImageByUrl = (url) =>{
    return axios.get(url,{
        headers:{},
        responseType: 'blob'
    })
}
