function detect(){
 let userAgent = navigator.userAgent || navigator.vendor || window.opera;
 let userAgentInfo = document.getElementById('info');
 let infoText = document.createTextNode(userAgent);
 userAgentInfo.appendChild(infoText);
 if (/windows phone/i.test(userAgent)) {
    writeRes('not IOS nor Android');
}else if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
     writeRes('IOS')
 }else if(/Android/.test(userAgent)){
     writeRes('Android')
 }else{
     writeRes('not IOS nor Android')
 }
}

function writeRes(res){
    let resDiv = document.getElementById('result');
    let resNode = document.createTextNode(res);
    resDiv.appendChild(resNode);
    
}

window.onload = detect()