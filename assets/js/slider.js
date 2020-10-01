
//    window.onload = function() {
//   var slider = new ESlider("#slider-1", [
//     "https://4.bp.blogspot.com/-jS9AKEwPeHQ/UxeSbPDXWjI/AAAAAAAApWM/-emBFoRWuwU/s0/Aston+Martin+Supercars_Ultra+HD.jpg",
//     "https://4.bp.blogspot.com/-jS9AKEwPeHQ/UxeSbPDXWjI/AAAAAAAApWM/-emBFoRWuwU/s0/Aston+Martin+Supercars_Ultra+HD.jpg",
//     "https://4.bp.blogspot.com/-jS9AKEwPeHQ/UxeSbPDXWjI/AAAAAAAApWM/-emBFoRWuwU/s0/Aston+Martin+Supercars_Ultra+HD.jpg"
//   ]);
// }

// /* 
//     Name: ESlider v1.0
//     Author: Evyatar Daud
// */

// var ESlider = function(slider, images) {
//   /* Function: Get Element by Selector */
//   var _ = function(selector) {
//     return document.querySelector(selector);
//   }

//   /* Function: Get All Elements by Selector */
//   var __ = function(selector) {
//     return document.querySelectorAll(selector);
//   }

//   /* Declare class variables */
//   this.slider = _(slider);
//   this.images = images;
//   this.slides = "";
//   this.currentSlide;

//   /* Add ESlider class to the slider */
//   this.slider.classList.add("ESlider");

//   /* Create slides */
//   this.slides = "";
//   this.bulks = "<div class='ESlider-bulks-container'>";
//   this.images.forEach(function(image, index) {
//     this.slides += "<img class='ESlider-slide ESlider-slide-" + (index + 1) + "' src='" + image + "' />";
//     this.bulks += "<span class='ESlider-bulk' data-slide-id='"+ (index+1) + "'><img src='" + image + "' class='ESlider-thumbnail' /></span>";
//   }.bind(this));

//   /* Set slides */
//   this.bulks += "</div>";
//   this.contronls = "<span class='ESlider-previous'></span><span class='ESlider-next'></span>";
//   this.slider.innerHTML += this.slides + this.bulks + this.contronls;

//   /* Function: Set Slider Auto Sliding */
//   this.interval = function() {
//     this.autoSlide = setInterval(function() {
//       this.next();
//     }.bind(this), 5000);
//   }.bind(this);

//   /* Function: Change Slide */
//   this.setSlide = function(id) {
//     clearInterval(this.autoSlide);
//     /* hide current slide */
//     if (_(slider + " .ESlider-active-slide") != null)
//       _(slider + " .ESlider-active-slide").classList.remove("ESlider-active-slide");

//     /* reset active bulk */
//     if (_(slider + " .ESlider-active-bulk") != null)
//       _(slider + " .ESlider-active-bulk").classList.remove("ESlider-active-bulk");

//     /* show new slide */
//     _(slider + " .ESlider-slide-" + id).classList.add("ESlider-active-slide");
//     _(slider + " .ESlider-bulk[data-slide-id='" + id + "']").classList.add("ESlider-active-bulk");
//     _(slider).style.height = _(slider + " .ESlider-slide-" + id).clientHeight + "px";

//     this.currentSlide = id;

//     this.interval();
//   }

//   /* Function: Next Slide */
//   this.next = function() {
//     if (this.currentSlide == this.images.length)
//       this.currentSlide = 1;

//     else
//       this.currentSlide++;

//     this.setSlide(this.currentSlide);
//   }

//   /* Function: Previous Slide */
//   this.previous = function() {
//     if (this.currentSlide == 1)
//       this.currentSlide = this.images.length;

//     else
//       this.currentSlide--;

//     this.setSlide(this.currentSlide);
//   }

//   /* Set Bulks event listeners */
//   var bulks = __(slider + " .ESlider-bulk");
//   for (var i = 0; i < bulks.length; i++) {
//     bulks[i].addEventListener("click", function(e) {
//       var slideID = e.target.dataset.slideId;
//       this.setSlide(slideID);
//     }.bind(this));
//   }

//   _(slider + " .ESlider-previous").addEventListener("click", function(e) {
//     this.previous();
//   }.bind(this));

//   _(slider + " .ESlider-next").addEventListener("click", function(e) {
//     this.next();
//   }.bind(this));

//   /* Set First Slide */
//   this.setSlide(1);
// }


// //Particle

// /* ---- particles.js config ---- */

// particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 100,
//       "density": {
//         "enable": true,
//         "value_area": 200
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": false,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });


// /* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);


jQuery('#myCarousel').bind('mousewheel', function(e) {
  if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('next');
  } else {
      $(this).carousel('prev');
  }
});