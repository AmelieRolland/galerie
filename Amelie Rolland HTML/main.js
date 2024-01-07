function agrandirImage(img) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.onclick = function() {
      document.body.removeChild(overlay);
    };
  
    var image = document.createElement("img");
    image.src = img.src.replace("/watch_me/", "/riding_queen/");
    image.alt = img.alt;
  
    overlay.appendChild(image);
    document.body.appendChild(overlay);
  }
  