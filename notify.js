var page = require('webpage').create();
var prevNum = 0;
var curNum = 0;
var myRegex = RegExp('[0-9]?[0-9]?[0-9]');
var counter = 0;

console.log("Setuo complete");
var notify = new function (){
  while(counter < 2){
    console.log('open site');
    page.open("https://www.rev.com/workspace/findwork/transcription", function(){
        if (status !== 'success') {
          console.log('Unable to access network');
        } else {
            curNum = webpage.evaluate(function(){
              myRegex.exec(document.getElementByClass('num-active-rows').textContent);
              if(curNum > prevNum)
              //output sound
              prevNum = curNum;
              
              
            });
        }
    });

    counter += 1;
  }

  console.log("DONE!");
  phantom.exit();
}

notify();
