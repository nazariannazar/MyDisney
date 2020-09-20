// window.onscroll = function () {
//   myFunction();
// };

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//    document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes

function myFunction() {
  if (window.matchMedia("(max-width : 779)").matches) {
    window.addEventListener("scroll", function () {
      if (window.scrollY < 400) {
        document.querySelector(".inscriver").style.bottom = "20px";
        document.querySelector(".logo-header").style.top = "20px";
      } 
      else if (window.scrollY > 400 && window.scrollY < 700) {
        document.querySelector(".inscriver").style.bottom = "10px";
        document.querySelector(".logo-header").style.top = "20px";
      } 
      else if (window.scrollY > 700) {
        document.querySelector(".inscriver").style.bottom = "-30px";
        document.querySelector(".logo-header").style.top = "-40px";
      }
    });
  }
}
