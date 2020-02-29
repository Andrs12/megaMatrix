function expandir(id,referencia){
  var iframe = document.getElementById(referencia);
  var intro = iframe.contentWindow.document.getElementById(id);
  intro.className = 'informacion';
  intro.style.cssText = 'display: inline; ';
  var referencia = document.getElementById(referencia);
  referencia.style.height= referencia.contentWindow.document.documentElement.scrollHeight + 'px';
}

function resizeIframe(obj){
  obj.style.height= obj.contentWindow.document.documentElement.scrollHeight + 'px';
} 

