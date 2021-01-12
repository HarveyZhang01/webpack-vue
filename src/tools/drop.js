
export function dropBtn(targetEle, souceEle) {
    let traget = targetEle.
}

var oBox=document.getElementById("moveBox");
var oUl=oBox.getElementsByTagName("ul")[0];
var oLi=oUl.getElementsByTagName("li");
var aPos = [];
var zx=0;

//布局转换
for (var i = 0; i < oLi.length; i++)
{
    oLi[i].index = i;
    oLi[i].style.top = oLi[i].offsetTop + "px";
    oLi[i].style.left = oLi[i].offsetLeft + "px";
    aPos.push({"left":oLi[i].offsetLeft, "top":oLi[i].offsetTop})
}  
 
for(var i=0;i<oLi.length;i+=1){
   oLi[i].style.position="absolute";
    drap(oLi[i]);
}
 
 
//拖拽函数
function  drap(obj){
    
    obj.onmousedown=function(e){
                    var oNear=null;
                  var ev=e||window.event;
                  var disX=ev.clientX-this.offsetLeft-oUl.offsetLeft;
                  var disY=ev.clientY-this.offsetTop-oUl.offsetTop;
                  this.className="cur";
                  this.style.zIndex=zx++;
                    if(obj.setCapture){
                                 obj.setCapture();                      
                    }else{
                          window.captureEvents(Event.MOUSEMOVE);
                    }
                    ev.cancelBubble = true;//阻止事件冒泡，防止冲突
         
                   
                document.onmousemove=function(e){
                    var ev=e||window.event;
                    var w=ev.clientX-disX-oUl.offsetLeft;
                    var h=ev.clientY-disY-oUl.offsetTop;       
                    (w<0)&&(w=0);
                    (w>=(oUl.offsetWidth-obj.offsetWidth))&&(w=(oUl.offsetWidth-obj.offsetWidth));
                    (h<0)&&(h=0);
                    (h>=(oUl.offsetHeight-obj.offsetHeight))&&(w=(oUl.offsetHeight-obj.offsetHeight));
                     
                    obj.style.top=h+"px";
                    obj.style.left=w+"px";
                    for(var i=0;i<oLi.length;i++){
                        oLi[i].className="";
                    }
                    oNear=findObj(obj);
                    oNear && (oNear.className="hig");
                     
                     
                }
                    document.onmouseup=function(){
                         if(obj.releaseCapture){
                             obj.releaseCapture();
                         }else{
                             window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
                         }
                        document.onmouseup=null;
                        document.onmousemove=null; 
                        for(var i=0;i<oLi.length;i++){
                          oLi[i].className="";
                        }
                            if(oNear){
                                 
                                 oNear.style.zIndex=zx++;
                                startMove(obj,aPos[oNear.index]);
                                startMove(oNear,aPos[obj.index]);
                                var temp=oNear.index;
                                oNear.index=obj.index;
                                obj.index=temp;
                                 
                                 
                            }else{
                                 
                                 
                                startMove(obj,aPos[obj.index]);
                                 
                            } 
                             
                        return false;  
         
                    }
 
    }  
     
     
}
//找出相遇点中最近的元素
function  findObj(obj){
  var arr1=[];
  var arr2=[];
  var res=null;
   var minnum=9999999;
   var minLi=null;
   
      for(var i=0;i<oLi.length;i++){
             res=isButt(obj,oLi[i]);    
             if(oLi[i]!=obj&&res){
                 
                 arr1.push(dian(obj,oLi[i]));
                 arr2.push(oLi[i]);
             } 
           
      }
  
   for(var i=0;i<arr1.length;i++){
       
        if(arr1[i]<minnum){
            minnum=arr1[i];
            minLi=arr2[i]; 
        }
 
   }     
     return minLi;
}
 
//求两点之间的距离
function  dian(obj1,obj2){
    var a=(obj1.offsetLeft + obj1.offsetWidth / 2) - (obj2.offsetLeft + obj2.offsetWidth / 2);
    var b=(obj1.offsetTop + obj1.offsetHeight / 2) - (obj2.offsetTop + obj2.offsetHeight / 2);
    return Math.sqrt(a*a+b*b);
     
}
 
 
//碰撞检测
function  isButt(aObj,bObj){
    var a1=aObj.offsetLeft;
    var b1=aObj.offsetTop;
    var c1=aObj.offsetLeft+aObj.offsetWidth;
    var d1=aObj.offsetTop+aObj.offsetHeight;
     
    var a2=bObj.offsetLeft;
    var b2=bObj.offsetTop;
    var c2=bObj.offsetLeft+bObj.offsetWidth;
    var d2=bObj.offsetTop+bObj.offsetHeight;   
    if(a2>c1||b2>d1||a1>c2||b1>d2){
      return false;
         
    }else{
         
      return true; 
    }
 
}
//获取最终样式
function getStyle(obj, attr)
{
    return parseFloat(obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr])
}
 
//运动框架
function startMove(obj, pos, onEnd)
{
    clearInterval(obj.timer);
    obj.timer = setInterval(function ()
    {
        doMove(obj, pos, onEnd)
    }, 30) 
}
function doMove(obj, pos, onEnd)
{
    var iCurL = getStyle(obj, "left");
    var iCurT = getStyle(obj, "top");
    var iSpeedL = (pos.left - iCurL) / 5;
    var iSpeedT = (pos.top - iCurT) / 5;
    iSpeedL = iSpeedL > 0 ? Math.ceil(iSpeedL) : Math.floor(iSpeedL);
    iSpeedT = iSpeedT > 0 ? Math.ceil(iSpeedT) : Math.floor(iSpeedT);
    if (pos.left == iCurL && pos.top == iCurT)
    {
        clearInterval(obj.timer);
        onEnd && onEnd()
    }
    else
    {
        obj.style.left = iCurL + iSpeedL + "px";
        obj.style.top = iCurT + iSpeedT + "px";
    }
}