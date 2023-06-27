function checkStickers() {
    var sticker1Input = parseInt(document.getElementById("sticker1Input").value);
    var sticker2Input = parseInt(document.getElementById("sticker2Input").value);
    var sticker3Input = parseInt(document.getElementById("sticker3Input").value);
    var totalStickers = sticker1Input + sticker2Input + sticker3Input;
    var resultParagraph = document.getElementById("result");
    
    if (totalStickers <= 10) {
      resultParagraph.textContent = "Llevas " + totalStickers + " stickers";
    } else {
      resultParagraph.textContent = "Llevas demasiados stickers";
    }
  }
 