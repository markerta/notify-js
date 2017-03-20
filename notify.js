var page = require('webpage').create();
var prevNum = 0;
var curNum = 0;
var myRegex = new Regex('[0-9]?[0-9]?[0-9]');
var counter = 0;
var notify = new function (){
  while(counter < 250){
    page.open("https://www.rev.com/workspace/findwork/transcription", function(){
        if (status !== 'success') {
          console.log('Unable to access network');
        } else {
            curNum = webpage.evaluate(function(){
              myRegex.exec(document.getElementByClass('num-active-rows').textContent);
              if(curNum > prevNum)
              //output sound
              prevNum = curNum;
              counter += 1;
              phantom.exit();
            });
        }
    });
  }
}
