function checkPassword() {
    var select1 = document.getElementById("select1");
    var select2 = document.getElementById("select2");
    var select3 = document.getElementById("select3");
    
    var password = select1.value + select2.value + select3.value;
    var resultParagraph = document.getElementById("result");
    
    if (password === "911") {
      resultParagraph.textContent = "Password 1 es correcto";
    } else if (password === "714") {
      resultParagraph.textContent = "Password 2 es correcto";
    } else {
      resultParagraph.textContent = "Password incorrecto";
    }
  }