var navbar = document.getElementById("navbar-everywhere");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var btns = 
$("#navigation .navbar-nav .nav-link .btn-home");

for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click",
                      function () {
    var current = document
        .getElementsByClassName("active");

    current[0].className = current[0]
        .className.replace(" active", "").not('.carousel-item.active');

    this.className += " active";
});
}

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/irqbmMNs2Bo' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test1").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/W6NZfCO5SIk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test2").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/2l0ktU7rQi4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test3").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/2UX8bxVhkqw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test4").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/q_JsgpiuY98' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test5").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/NVpQqHQuKaY' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test6").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/fSB6_KE95bU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test7").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/fSB6_KE95bU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test8").html(obj.video.value);

var obj = {"video": {
  "value": "<iframe width='560' height='315' src='https://www.youtube.com/embed/J_YLjCTOFWE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
}}

$("#test9").html(obj.video.value);