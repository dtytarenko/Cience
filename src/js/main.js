document.querySelector('iframe').onload = function(){

    console.log('iframe loaded');
    let iframe = document.getElementsByTagName('iframe');
    const iframeArray = Array.from(iframe)
    var calendar = iframeArray[1];
    console.log(calendar)
    calendar.setAttribute('sandbox', 'allow-scripts');
    calendar.setAttribute('seamless', '');
    


//     var cssLink = document.createElement("link");
//     cssLink.href = "style.css"; 
//     cssLink.rel = "stylesheet"; 
//     cssLink.type = "text/css"; 



//     var addCssToIframe = function() {
//         if ($('#iframeID').contents().find("head") != undefined) {
//             $('#iframeID')
//                     .contents()
//                     .find("head")
//                     .append(
//                             '<link rel="stylesheet" href="xui/css/iframe.css" type="text/css" />');
//             $interval.cancel(addCssInterval);
//         }
//     };
//     var addCssInterval = $interval(addCssToIframe, 500, 0, false);

//     setTimeout(getHead, 5000)
    
};
