const thumbs = document.querySelectorAll(".thumb");
const mainImg = document.querySelector(".main");
const lgImg = document.querySelector(".gallery");
const details = document.querySelector(".details");

thumbs.forEach((thumb, index) => {
  const requestObj = `img/pic${index + 1}.jpg`;

  fetch(requestObj)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => displayImage(thumb, blob))
    .catch((error) => {
      thumb.title = `Image load failed: ${error.message}`;
    });
});

function displayImage(currentThumb, blob) {
  const objectURL = URL.createObjectURL(blob);
  currentThumb.setAttribute("src", objectURL);

  currentThumb.onclick = () => {
    lgImg.setAttribute("src", objectURL);
    lgImg.className = "blowup";
    for (const thumb of thumbs) {
      thumb.className = "thumb darken";
    }
  };
}

lgImg.onclick = () => {
 // mainImg.className = "main";
  lgImg.className = "gallery";
  for (const thumb of thumbs) {
    thumb.className = "thumb";
  }
};

let flowers = [];
function showDetails(){

 if (showDetails) {
        const detailspage = document.getElementById("details")
        h1.innerText = flowers.type;
        const desc = document.createElement('div');
        desc.innerHTML = `<h2>Description</h2>
                            ${flowers.desc}`;

        const loc = document.createElement('div');
        loc.innerHTML = `<h2>Location</h2>
                            ${flowers.loc}`;


        div.appendChild(img);
        div.appendChild(desc);
        div.appendChild(loc);
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = flowers.type;

        div.appendChild(h2);
        div.appendChild(img);
    }

    return div;
  }