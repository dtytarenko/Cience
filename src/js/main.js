//** */ 
//**  Start Parralax function */ 
//** */ 

// another way to parallax with js, work fine, but background-attachment have > 96% global usage
// check this here https://caniuse.com/#search=background-attachment
// and this code need callback for better cross-browser compatibility

// window.onscroll = () => {
//     let scroll = -1 * window.pageYOffset;
//     let parallaxBG = document.getElementById('intro');
//     parallaxBG.style.top = scroll + 'px';
// }

//** */ 
//** End Parrallax function */ 
//** */ 



//** */ 
//**  Start btn to section func */ 
//** */ 
document.addEventListener("DOMContentLoaded", function(event) {  
    let introBtn = document.getElementById('intro__btn');   
    let servicesBlock = document.getElementById('service');
    let bookingBtn = document.getElementById('booking__btn');
    let calendar = document.getElementById('calendar__widget');
    
    function scrollToServices() {  
      servicesBlock.scrollIntoView({block: "start", behavior: "smooth"});  
    };

    function scrollToCalendar() {  
        calendar.scrollIntoView({block: "start", behavior: "smooth"});  
    };

    introBtn.addEventListener('click', scrollToServices);
    bookingBtn.addEventListener('click', scrollToCalendar);  
});
//** */ 
//**  End button to section func */ 
//** */ 



//** */ 
//**  Start showing service items of list*/ 
//** */
const serviceList = document.getElementById('service__list');
let serviceListItems = document.querySelectorAll("#service__list li");

    function scrolling(e) {
    let distanceBound = serviceList.getBoundingClientRect().height;
 
    for (let i = 0; i < serviceListItems.length; i++) {
        let listItem = serviceListItems[i];
        
        // desktop
        if (window.matchMedia("(min-width: 1300px)").matches && window.scrollY >= distanceBound) {
            listItem.classList.add("active");
        } else if (window.matchMedia("(min-width: 1300px)").matches && window.scrollY <= distanceBound){
            listItem.classList.remove("active");
        } 

        // mobile
        else if (window.matchMedia("(min-width: 320px)").matches || window.scrollY <= distanceBound){
            listItem.classList.add("active");
        }
        else if (window.matchMedia("(min-width: 320px)").matches || window.scrollY >= distanceBound){
            listItem.classList.remove("active");
        }
        
    }

}

document.addEventListener('scroll', scrolling, false);
//** */ 
//**  End showing service items of list*/ 
//** */ 



//** */ 
//**  Starting attempts to getting document from iframe, 
//    but i don`t know how to escape from same origin policy*/ 
//** */

// document.querySelector('iframe').onload = function(){

    // console.log('iframe loaded');
    // let iframe = document.getElementsByTagName('iframe');
    // let iframeArray = Array.from(iframe);
    // let calendar = iframeArray[1];
    // calendar.setAttribute('sandbox', 'allow-same-origin');
    // calendar.setAttribute('srcdoc', '<p> AAAAA </p>')
    // console.log(calendar);

    // const calendarDoc = calendar.contentDocument;
    // console.log(calendarDoc);
    
    // function findDoc (){
    //     const calendarDoc = calendar.contentDocument;
    //     console.log(calendarDoc);
    // }
    // setTimeout(findDoc, 5000)

// };


//** */ 
//**  just wasted time
//** */ 
