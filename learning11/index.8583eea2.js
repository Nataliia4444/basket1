!function(){var t=null,n={btnStart:document.querySelector('button[data-action="start"]'),btnStop:document.querySelector('button[data-action="stop"]')};n.btnStart.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.btnStop.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=index.8583eea2.js.map
