/**
 * 表情文字转表情图片
 */
function textFace2imgFace(content){
	var patt1 = /(\[[\u4E00-\u9FA5\uF900-\uFA2D]{1,4})\]|(\[OK\])|(\[NO\])|(\/:[\~\!\)\(@#\$%\^&*\:\|\'\,\-\+=\<\>\?;0-9a-zA-Z]{1,12})/g;
	var str = content.match(patt1)
	if (str) {
		for (var i = 0; i < str.length ; i++) {
		    var sub = str[i];
			for (var j = 0;j < sub.length - 1 ;j++) {
				var tmp = sub.substring(0, sub.length - j);
				if (emotions.containsKey(tmp)) {
					var img = '<img style=\"width:24px;height:24px;\" src=\"../../static/image/editor/emotion/qq/' + emotions.get(tmp) + '\"/>';
					content = content.replace(tmp,img);
					break;
				}
			}
		}
	}
	return content;
}
/**
 * 表情图片转表情文字
 */
function imgFace2textFace(content){
	var patt1 = /<img src=\"..\/..\/static\/images\/editor\/emotion\/qq\/[0-9]{1,3}.gif\">/g;
	var str = content.match(patt1)
	if (str) {
		for (var i = 0; i < str.length ; i++) {
		    var sub = str[i];
			for (var j = 0;j < sub.length - 1 ;j++) {
				var tmp = sub.substring(0, sub.length - j);
				emotions_pic_key=tmp.replace('<img src="..\/..\/static\/images\/editor\/emotion\/qq\/','').replace('">','');
				console.log(emotions_pic_key)
				if (emotions_pic.containsKey(emotions_pic_key)) {
					content = content.replace(tmp,emotions_pic.get(emotions_pic_key));
					break;
				}
			}
		}
	}
	return content;
}



// QQ表情插件
function myMap(){
this.container = new Object();
}


myMap.prototype.put = function(key, value){
this.container[key] = value;
}


myMap.prototype.get = function(key){
return this.container[key];
}


myMap.prototype.keys = function() {
var keyset = new Array();
var count = 0;
for (var key in this.container) {
// 跳过object的extend函数
if (key == 'extend') {
continue;
}
keyset[count] = key;
count++;
}
return keyset;
}


myMap.prototype.size = function() {
var count = 0;
for (var key in this.container) {
// 跳过object的extend函数
if (key == 'extend'){
continue;
}
count++;
}
return count;
}


myMap.prototype.remove = function(key) {
delete this.container[key];
}

myMap.prototype.containsKey = function(key) {
	return this.container[key];
	}

var emotions = new myMap();
emotions.put("/::)","0.gif");
emotions.put("/::~","1.gif");
emotions.put("/::B","2.gif");
emotions.put("/::|","3.gif");
emotions.put("/:8-)","4.gif");
emotions.put("/::&lt;","5.gif");
emotions.put("/::$","6.gif");
emotions.put("/::X","7.gif");
emotions.put("/::Z","8.gif");
emotions.put("/::&#39;(","9.gif");
emotions.put("/::-|","10.gif");
emotions.put("/::@","11.gif");
emotions.put("/::P","12.gif");
emotions.put("/::D","13.gif");
emotions.put("/::O","14.gif");
emotions.put("/::(","15.gif");
emotions.put("[囧]","17.gif");
emotions.put("/::Q","18.gif");
emotions.put("/::T","19.gif");
emotions.put("/:,@P","20.gif");
emotions.put("/:,@-D","21.gif");
emotions.put("/::d","22.gif");
emotions.put("/:,@o","23.gif");
emotions.put("/::g","24.gif");
emotions.put("/:|-)","25.gif");
emotions.put("/::!","26.gif");
emotions.put("/::L","27.gif");
emotions.put("/::&gt;","28.gif");
emotions.put("/::,@","29.gif");
emotions.put("/:,@f","30.gif");
emotions.put("/::-S","31.gif");
emotions.put("/:?","32.gif");
emotions.put("/:,@x","33.gif");
emotions.put("/:,@@","34.gif");
emotions.put("/::8","35.gif");
emotions.put("/:,@!","36.gif");
emotions.put("/:!!!","37.gif");
emotions.put("/:xx","38.gif");
emotions.put("/:bye","39.gif");
emotions.put("/:wipe","40.gif");
emotions.put("/:dig","41.gif");
emotions.put("/:handclap","42.gif");
emotions.put("/:&-(","43.gif");
emotions.put("/:B-)","44.gif");
emotions.put("/:&lt;@","45.gif");
emotions.put("/:@&gt;","46.gif");
emotions.put("/::-O","47.gif");
emotions.put("/:&gt;-|","48.gif");
emotions.put("/:P-(","49.gif");
emotions.put("/::&#39;|","50.gif");
emotions.put("/:X-)","51.gif");
emotions.put("/::*","52.gif");
emotions.put("/:@x","53.gif");
emotions.put("/:8*","54.gif");
emotions.put("/:pd","55.gif");
emotions.put("/:&lt;W&gt;","56.gif");
emotions.put("/:beer","57.gif");
emotions.put("/:basketb","58.gif");
emotions.put("/:oo","59.gif");
emotions.put("/:coffee","60.gif");
emotions.put("/:eat","61.gif");
emotions.put("/:pig","62.gif");
emotions.put("/:rose","63.gif");
emotions.put("/:fade","64.gif");
emotions.put("/:showlove","65.gif");
emotions.put("/:heart","66.gif");
emotions.put("/:break","67.gif");
emotions.put("/:cake","68.gif");
emotions.put("/:li","69.gif");
emotions.put("/:bome","70.gif");
emotions.put("/:kn","71.gif");
emotions.put("/:footb","72.gif");
emotions.put("/:ladybug","73.gif");
emotions.put("/:shit","74.gif");
emotions.put("/:moon","75.gif");
emotions.put("/:sun","76.gif");
emotions.put("/:gift","77.gif");
emotions.put("/:hug","78.gif");
emotions.put("/:strong","79.gif");
emotions.put("/:weak","80.gif");
emotions.put("/:share","81.gif");
emotions.put("/:v","82.gif");
emotions.put("/:@)","83.gif");
emotions.put("/:jj","84.gif");
emotions.put("/:@@","85.gif");
emotions.put("/:bad","86.gif");
emotions.put("/:lvu","87.gif");
emotions.put("/:no","88.gif");
emotions.put("/:ok","89.gif");
emotions.put("/:love","90.gif");
emotions.put("/:&lt;L&gt;","91.gif");
emotions.put("/:jump","92.gif");
emotions.put("/:shake","93.gif");
emotions.put("/:&lt;O&gt;","94.gif");
emotions.put("/:circle","95.gif");
emotions.put("/:kotow","96.gif");
emotions.put("/:turn","97.gif");
emotions.put("/:skip","98.gif");
emotions.put("/:oY","99.gif");
emotions.put("/:#-0","100.gif");
emotions.put("/:hiphot","101.gif");
emotions.put("/:kiss","102.gif");
emotions.put("/:&lt;&","103.gif");
emotions.put("/:&&gt;","104.gif");
emotions.put("/::+","16.gif");


var emotions_pic = new myMap();
emotions_pic.put("0.gif","/::)");
emotions_pic.put("1.gif","/::~");
emotions_pic.put("2.gif","/::B");
emotions_pic.put("3.gif","/::|");
emotions_pic.put("4.gif","/:8-)");
emotions_pic.put("5.gif","/::&lt;");
emotions_pic.put("6.gif","/::$");
emotions_pic.put("7.gif","/::X");
emotions_pic.put("8.gif","/::Z");
emotions_pic.put("9.gif","/::&#39;(");
emotions_pic.put("10.gif","/::-|");
emotions_pic.put("11.gif","/::@");
emotions_pic.put("12.gif","/::P");
emotions_pic.put("13.gif","/::D");
emotions_pic.put("14.gif","/::O");
emotions_pic.put("15.gif","/::(");
emotions_pic.put("17.gif","[囧]");
emotions_pic.put("18.gif","/::Q");
emotions_pic.put("19.gif","/::T");
emotions_pic.put("20.gif","/:,@P");
emotions_pic.put("21.gif","/:,@-D");
emotions_pic.put("22.gif","/::d");
emotions_pic.put("23.gif","/:,@o");
emotions_pic.put("24.gif","/::g");
emotions_pic.put("25.gif","/:|-)");
emotions_pic.put("26.gif","/::!");
emotions_pic.put("27.gif","/::L");
emotions_pic.put("28.gif","/::&gt;");
emotions_pic.put("29.gif","/::,@");
emotions_pic.put("30.gif","/:,@f");
emotions_pic.put("31.gif","/::-S");
emotions_pic.put("32.gif","/:?");
emotions_pic.put("33.gif","/:,@x");
emotions_pic.put("34.gif","/:,@@");
emotions_pic.put("35.gif","/::8");
emotions_pic.put("36.gif","/:,@!");
emotions_pic.put("37.gif","/:!!!");
emotions_pic.put("38.gif","/:xx");
emotions_pic.put("39.gif","/:bye");
emotions_pic.put("40.gif","/:wipe");
emotions_pic.put("41.gif","/:dig");
emotions_pic.put("42.gif","/:handclap");
emotions_pic.put("43.gif","/:&-(");
emotions_pic.put("44.gif","/:B-)");
emotions_pic.put("45.gif","/:&lt;@");
emotions_pic.put("46.gif","/:@&gt;");
emotions_pic.put("47.gif","/::-O");
emotions_pic.put("48.gif","/:&gt;-|");
emotions_pic.put("49.gif","/:P-(");
emotions_pic.put("50.gif","/::&#39;|");
emotions_pic.put("51.gif","/:X-)");
emotions_pic.put("52.gif","/::*");
emotions_pic.put("53.gif","/:@x");
emotions_pic.put("54.gif","/:8*");
emotions_pic.put("55.gif","/:pd");
emotions_pic.put("56.gif","/:&lt;W&gt;");
emotions_pic.put("57.gif","/:beer");
emotions_pic.put("58.gif","/:basketb");
emotions_pic.put("59.gif","/:oo");
emotions_pic.put("60.gif","/:coffee");
emotions_pic.put("61.gif","/:eat");
emotions_pic.put("62.gif","/:pig");
emotions_pic.put("63.gif","/:rose");
emotions_pic.put("64.gif","/:fade");
emotions_pic.put("65.gif","/:showlove");
emotions_pic.put("66.gif","/:heart");
emotions_pic.put("67.gif","/:break");
emotions_pic.put("68.gif","/:cake");
emotions_pic.put("69.gif","/:li");
emotions_pic.put("70.gif","/:bome");
emotions_pic.put("71.gif","/:kn");
emotions_pic.put("72.gif","/:footb");
emotions_pic.put("73.gif","/:ladybug");
emotions_pic.put("74.gif","/:shit");
emotions_pic.put("75.gif","/:moon");
emotions_pic.put("76.gif","/:sun");
emotions_pic.put("77.gif","/:gift");
emotions_pic.put("78.gif","/:hug");
emotions_pic.put("79.gif","/:strong");
emotions_pic.put("80.gif","/:weak");
emotions_pic.put("81.gif","/:share");
emotions_pic.put("82.gif","/:v");
emotions_pic.put("83.gif","/:@)");
emotions_pic.put("84.gif","/:jj");
emotions_pic.put("85.gif","/:@@");
emotions_pic.put("86.gif","/:bad");
emotions_pic.put("87.gif","/:lvu");
emotions_pic.put("88.gif","/:no");
emotions_pic.put("89.gif","/:ok");
emotions_pic.put("90.gif","/:love");
emotions_pic.put("91.gif","/:&lt;L&gt;");
emotions_pic.put("92.gif","/:jump");
emotions_pic.put("93.gif","/:shake");
emotions_pic.put("94.gif","/:&lt;O&gt;");
emotions_pic.put("95.gif","/:circle");
emotions_pic.put("96.gif","/:kotow");
emotions_pic.put("97.gif","/:turn");
emotions_pic.put("98.gif","/:skip");
emotions_pic.put("99.gif","/:oY");
emotions_pic.put("100.gif","/:#-0");
emotions_pic.put("101.gif","/:hiphot");
emotions_pic.put("102.gif","/:kiss");
emotions_pic.put("103.gif","/:&lt;&");
emotions_pic.put("104.gif","/:&&gt;");
emotions_pic.put("16.gif","/::+");
(function($){
	$.fn.qqFace = function(options){
		var defaults = {
			id : 'facebox',
			path : 'face/',
			assign : 'content',
			tip : 'em_'
		};
		var option = $.extend(defaults, options);
		var assign = $('#'+option.assign);
		var id = option.id;
		var path = option.path;
		var tip = option.tip;

		if(assign.length<=0){
			alert('缺少表情赋值对象。');
			return false;
		}

		$(this).click(function(e){
			var strFace, labFace, myMapValue;
			if($('#'+id).length<=0){
				strFace = '<div id="'+id+'" style="position:absolute;display:none;z-index:99999999;" class="qqFace">' +
							  '<table border="0" cellspacing="0" cellpadding="0"><tr>';
				var keys = emotions.keys();
				var num = 0;
				for(var i=0; i<keys.length; i++){
					labFace = keys[i];
					myMapValue = emotions.get(labFace);
					strFace += '<td><img src="'+path+myMapValue+'" data-face="' + labFace + '" onclick="$(\'div.layui-show #'+option.assign+'\').setCaret();$(\'div.layui-show #'+option.assign+'\').insertAtCaret($(this).data(\'face\'));" /></td>';
					num = i+1;
					if(num % 15 == 0 ){
						strFace += '</tr><tr>';
					}
				}
				strFace += '</tr></table></div>';
			}
			/*var selectFace = function(assign,labFace){
				$('#'+assign).setCaret();$('#'+assign).insertAtCaret(labFace);
			}*/
			//console.info(strFace);
			$("body").append(strFace);
			var offset = $(this).position();
			//console.info($(this));
			var top = offset.top + $(this).outerHeight();
			//console.info($("#layui-layim-chat > div > div.layim-chat.layim-chat-friend.layui-show > div.layim-chat-main").height()+80+parseInt($("#layui-layer3").css("top").replace("px")));
			$('#'+id).css('top',$(".layim-chat-main").height()+$(".layer-anim").position().top+$(document).scrollTop());
			$('#'+id).css('left',$(".layer-anim").position().left);//+parseInt($(".layer-anim").css("left").replace("px"))
			$('#'+id).show();
			e.stopPropagation();
		});

		$(document).click(function(){
			$('#'+id).hide();
			$('#'+id).remove();
		});
	};

})(jQuery);

jQuery.extend({
unselectContents: function(){
	if(window.getSelection)
		window.getSelection().removeAllRanges();
	else if(document.selection)
		document.selection.empty();
	}
});
jQuery.fn.extend({
	selectContents: function(){
		$(this).each(function(i){
			var node = this;
			var selection, range, doc, win;
			if ((doc = node.ownerDocument) && (win = doc.defaultView) && typeof win.getSelection != 'undefined' && typeof doc.createRange != 'undefined' && (selection = window.getSelection()) && typeof selection.removeAllRanges != 'undefined'){
				range = doc.createRange();
				range.selectNode(node);
				if(i == 0){
					selection.removeAllRanges();
				}
				selection.addRange(range);
			} else if (document.body && typeof document.body.createTextRange != 'undefined' && (range = document.body.createTextRange())){
				range.moveToElementText(node);
				range.select();
			}
		});
	},

	setCaret: function(){
		return;
		var initSetCaret = function(){
			var textObj = $(this).get(0);
			textObj.caretPos = document.selection.createRange().duplicate();
		};
		$(this).click(initSetCaret).select(initSetCaret).keyup(initSetCaret);
	},

	insertAtCaret: function(textFeildValue){
		var textObj = $(this).get(0);
		if(document.all && textObj.createTextRange && textObj.caretPos){
			var caretPos=textObj.caretPos;
			caretPos.text = caretPos.text.charAt(caretPos.text.length-1) == '' ?
			textFeildValue+'' : textFeildValue;
		} else if(textObj.setSelectionRange){
			var rangeStart=textObj.selectionStart;
			var rangeEnd=textObj.selectionEnd;
			var tempStr1=textObj.value.substring(0,rangeStart);
			var tempStr2=textObj.value.substring(rangeEnd);
			textObj.value=tempStr1+textFeildValue+tempStr2;
			textObj.focus();
			var len=textFeildValue.length;
			textObj.setSelectionRange(rangeStart+len,rangeStart+len);
			textObj.blur();
		}else{
			textObj.value+=textFeildValue;
		}
	}
});
