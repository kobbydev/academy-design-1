function myFunction() {
    var x = document.getElementById("right-nav");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }