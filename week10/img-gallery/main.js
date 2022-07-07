const thumbs = document.querySelectorAll(".thumb");
const mainImg = document.querySelector(".main");

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
    mainImg.setAttribute("src", objectURL);
    mainImg.className = "blowup";
    for (const thumb of thumbs) {
      thumb.className = "thumb darken";
    }
  };
}

mainImg.onclick = () => {
  mainImg.className = "main";
  for (const thumb of thumbs) {
    thumb.className = "thumb";
  }
};

let flowers = [];
function showDetails(){

 if (showDetails) {
        h1.innerText = flower.type;
        const desc = document.createElement('div');
        desc.innerHTML = `<h2>Description</h2>
                            ${flower.desc}`;

        const loc = document.createElement('div');
        loc.innerHTML = `<h2>Location</h2>
                            ${flower.location}`;


        div.appendChild(img);
        div.appendChild(desc);
        div.appendChild(loc);
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = flower.type;

        div.appendChild(h2);
        div.appendChild(img);
    }

    return div;
  }