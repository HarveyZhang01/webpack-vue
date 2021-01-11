export function enterSendAndCtrlEnterNewLine(tagId,callback) {
  var woohecc = {
      placeCaretAtEnd : function(el) {
          el.focus();
          if (typeof window.getSelection != "undefined"
              && typeof document.createRange != "undefined") {
              var range = document.createRange();
              range.selectNodeContents(el);
              range.collapse(false);
              var sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
          }
          else if (typeof document.body.createTextRange != "undefined") {
              var textRange = document.body.createTextRange();
              textRange.moveToElementText(el);
              textRange.collapse(false);
              textRange.select();
          }
      },
  };
  $("#"+tagId).keydown(function($event){
      var keycode = window.event ? $event.keyCode : $event.which;
      var evt = $event || window.event;
      var inputTxt = $(this);
      if (keycode == 13 && !(evt.ctrlKey)) {
          console.log('Press enter in the input field with id:',tagId);
          $event.preventDefault();
          callback();
          return false;
      }
      if (evt.ctrlKey && evt.keyCode == 13) {
          console.log('Press enter&ctrl in the input field with id:',tagId);
          inputTxt.html(inputTxt.html() + '<br>');
          woohecc.placeCaretAtEnd(inputTxt.get(0));
          return false;
      }
  });

}
