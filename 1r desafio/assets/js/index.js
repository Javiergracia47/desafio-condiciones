function toggleBorder() {
    var image = document.querySelector("#myImage");
    if (image.style.border === "2px solid red") {
      image.style.border = "";
    } else {
      image.style.border = "2px solid red";
    }
  }