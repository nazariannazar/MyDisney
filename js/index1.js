window.onscroll = function () {
  myFunctionOrd();
};

function myFunctionOrd() {
  if (
    document.body.scrollTop > 675 ||
    document.documentElement.scrollTop > 675
  ) {
    document.getElementById("inscriver").style.top = "10px";
    document.getElementsByClassName("logo-header").style.top = "20px";
  } else {
    document.getElementById("inscriver").style.top = "-40px";
    document.getElementsByClassName("logo-header").style.top = "-60px";
  }
}
