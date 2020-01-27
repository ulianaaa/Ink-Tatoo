// map

let lat = 33.770050;
let lng = -118.193741;
let zoom = 20;


let mymap = L.map('map').setView([lat, lng], 13);

// map = L.map('mapid', {
//   // layers: MQ.mapLayer(),
//   center: [ lat, lng ],
//   zoom: zoom
// });

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWxpYW5hYmIyMiIsImEiOiJjazNvcG94eDQxZ3V3M2JubTAzOW5ycTBkIn0.oUhJkzYNQlfz23Kka4ppVQ', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidWxpYW5hYmIyMiIsImEiOiJjazNvcG94eDQxZ3V3M2JubTAzOW5ycTBkIn0.oUhJkzYNQlfz23Kka4ppVQ'
}).addTo(mymap);


let marker = L.marker([lat, lng]).addTo(mymap);

// $(document).ready(function(){
//     $('.slider-content').slick({
//         setting-name: setting-value
// });
// });

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear'
});


// function scrolling(e) {
//     for (var _i = 0; _i < elementArray.length; _i++) {
//         if (elementCounter == selectorsArray.length) {
//             document.removeEventListener("DOMContentLoaded", scrolling);
//             break;
//         }
//
//         if (elementArray[_i][1] && isPartiallyVisible(elementArray[_i][0])) {
//             if (elementArray[_i][0].classList.contains("hide-item")) {
//                 elementArray[_i][0].classList.remove("hide-item");
//
//                 elementArray[_i][0].classList.add("show-item");
//
//                 elementArray[_i][1] = false;
//             }
//
//             elementCounter += 1;
//         }
//     }
// }
//
//
// function scrolling(e) {
//     for(let i = 0; i < elementArray.length; i++) {
//         if (elementCounter == selectorsArray.length) {
//             document.removeEventListener("DOMContentLoaded", scrolling);
//             break;
//         }
//         if (elementArray[i][1] && isPartiallyVisible( elementArray[i][0] )) {
//             if (elementArray[i][0].classList.contains("hide-item")) {
//                 elementArray[i][0].classList.remove("hide-item");
//                 elementArray[i][0].classList.add("show-item");
//                 elementArray[i][1] = false;
//             }
//             elementCounter += 1;
//         }
//     }
// }


$('#submitBtn').click(function() {
    $('#lname').text($('#lastname').val());
    $('#fname').text($('#firstname').val());
});

$('#submit').click(function(){
    alert('SUBMIT');
    $('#formfield').submit();
});


$(".scroll-icon").click(function () {
    $('html,body').animate({
            scrollTop: $(".about").offset().top
        },
        'slow');
});
