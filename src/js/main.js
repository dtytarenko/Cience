document.querySelector('iframe').onload = function(){

    console.log('iframe loaded');
    let iframe = document.getElementsByTagName('iframe');
    const iframeArray = Array.from(iframe)
    console.log(iframeArray)
    console.log(iframeArray[1]);
    let cssLink = document.createElement('link');
    cssLink.href = 'style.css'; 
    cssLink.rel = 'stylesheet'; 
    cssLink.type = 'text/css;';

    var calendar = iframeArray[1];

    var iframeDoc = calendar.contentWindow.document;

    if (iframeDoc.readyState == 'complete') {
        iframeDoc.body.style.backgroundColor = 'green';
    }
    calendar.onload = function() {
        var iframeDoc2 = calendar.contentWindow.document;
        iframeDoc2.body.style.backgroundColor = 'orange';
    }
    var bsdf = window.frames[0].frameElement.contentWindow.targetFunction(); 
    console.log(bsdf)
};