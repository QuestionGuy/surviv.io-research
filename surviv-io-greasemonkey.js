// ==UserScript==
// @name     Surviv.io cheat
// @version  1
// @grant    none
// @include http://surviv.io/*
// @run-at document-start
// ==/UserScript==

console.warn('started');
window.addEventListener('beforescriptexecute',
  function(event)
  {
    var originalScript = event.target;

    // debug output of full qualified script url
    console.log('script detected:', originalScript.src);

    // script ends with 'originalscript.js' ?
    // you can test as well: '<full qualified url>' === originalScript.src
    if(originalScript.src.indexOf('/js/app') != -1)
    { 
      console.warn('replacing script ' + originalScript.src);
      var replacementScript = document.createElement('script');
      replacementScript.src = 'http://localhost:4200';

      originalScript.parentNode.replaceChild(replacementScript, originalScript);

      
      event.preventDefault();
    }
  }
);
