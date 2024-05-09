const companyProfile = document.querySelector(".company-profile");
const headerDropDownIcon = document.querySelector(".fa-angle-down");
const hederDropDown = document.querySelector(".hederDropDown");
companyProfile.addEventListener("click", () => {
  hederDropDown.classList.toggle("hide");
  headerDropDownIcon.classList.toggle("rotate");
});

// maps location

var mapBox = document.getElementById("map");
var currentLocation = document.getElementById("currentLocation");

currentLocation.addEventListener("clickb", (e) => {
  console.log(e, `ff`);
});

var map;
var service;
var infowindow;

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

  map = new google.maps.Map(document.getElementById("map"), {
    center: pyrmont,
    zoom: 15,
  });
  var input = document.getElementById("searchTextField");
  let autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.bindTo("bounds", map);
  let marker = new google.maps.Marker({
    map: map,
  });

  // google.maps.event.addEventListener(autocomplete, "place_changed", () => {
  //   let place = autocomplete.getPlace();

  //   if (place.geometry.viewport) {
  //     map.fitBounds(place.geometry.viewport);
  //   } else {
  //     map.setCenter(place.geometry.location);
  //     map.setZoom(17);
  //   }
  //   marker.setPosition(place.geometry.location);
  //   marker.setVisible(true);

  //   var request = {
  //     location: place.geometry.location,
  //     radius: "500",
  //     type: ["restaurant"],
  //   };

  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, callback);
  // });
}

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }
google.maps.event.addDomListener(window, "load", initialize);

// sidebar overlay

const sideBarOverlay = document.querySelector(".sideBar-overlay");
const sideBar = document.querySelector(".sideBar");
const hamburgerBox = document.querySelector(".hamburger_container");

sideBarOverlay.addEventListener("click", () => {
  sideBarOverlay.classList.add("hide");
  sideBar.classList.add("hide");
});

hamburgerBox.addEventListener("click", () => {
  sideBar.classList.remove("hide");
  sideBarOverlay.classList.remove("hide");
});

// popular place

const popularPlace = document.querySelector(".sec5-article-header-box");

const articles = document.querySelector(".sec5-article-list");

const openCloseBtn = document.querySelector(".fa-chevron-down");

popularPlace.addEventListener("click", (event) => {
  articles.classList.toggle("show");
  openCloseBtn.classList.toggle("rotate");
});

// slider

document.addEventListener("DOMContentLoaded", function () {
  const scrollRight = document.getElementById("scrollRight");
  const scrollLeft = document.getElementById("scrollLeft");
  const userCards = document.querySelector(".userCards-wrapper");

  // scroll right

  scrollRight.addEventListener("click", function () {
    console.log("Clicked!");
    userCards.scrollBy({
      top: 0,
      left: -620,
      behavior: "smooth",
    });
  });

  // scroll left
  scrollLeft.addEventListener("click", () => {
    userCards.scrollBy({
      top: 0,
      left: 620,
      behavior: "smooth",
    });
  });
});

// sec-7FAQ

const sec7_q1 = document.getElementById("sec7-q1");
const sec7_arrow1 = document.getElementById("sec7-q1-arrow");
const sec7_ans1 = document.getElementById("sec7-ans1");

const sec7_q2 = document.getElementById("sec7-q2");
const sec7_arrow2 = document.getElementById("sec7-q2-arrow");

const sec7_ans2 = document.getElementById("sec7-ans2");

const sec7_q3 = document.getElementById("sec7-q3");
const sec7_arrow3 = document.getElementById("sec7-q3-arrow");

const sec7_ans3 = document.getElementById("sec7-ans3");

const sec7_q4 = document.getElementById("sec7-q4");
const sec7_arrow4 = document.getElementById("sec7-q4-arrow");

const sec7_ans4 = document.getElementById("sec7-ans4");

const sec7_q5 = document.getElementById("sec7-q5");
const sec7_arrow5 = document.getElementById("sec7-q5-arrow");

const sec7_ans5 = document.getElementById("sec7-ans5");

// faq

sec7_q1.addEventListener("click", () => {
  sec7_arrow1.classList.toggle("rotate");
  sec7_ans1.classList.toggle("show");
});

sec7_q2.addEventListener("click", () => {
  sec7_arrow2.classList.toggle("rotate");
  sec7_ans2.classList.toggle("show");
});

sec7_q3.addEventListener("click", () => {
  sec7_arrow3.classList.toggle("rotate");
  sec7_ans3.classList.toggle("show");
});

sec7_q4.addEventListener("click", () => {
  sec7_arrow4.classList.toggle("rotate");
  sec7_ans4.classList.toggle("show");
});

sec7_q5.addEventListener("click", () => {
  sec7_arrow5.classList.toggle("rotate");
  sec7_ans5.classList.toggle("show");
});
