
const flowerquote =  document.querySelector("#flowerquote");
fetch("flowerquotes.json")
  .then(data => data.json())
  .then(flowerquotes => {
        const randomNum = Math.floor(Math.random() * flowerquotes.length);
        const inspiration = flowerquotes[randomNum];
   //     document.querySelector('#flowerquote').innerHTML = `
   //     <p><span class="quote">"${inspiration.quote}"</span <br><span class="author">~ ${inspiration.author}</span> </p>
   //     `
    document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
    document.querySelector('#author').innerText = ` ~ ${inspiration.author}`;
});
//const flowerImg = document.querySelector(img);
//flowerImg.addEventListener('touchend', () => {
// img.classList.toggle('.blowup')},
 // false);
// menu system responsive
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('responsive')},
  false);

// mid resizing issue
window.onresize = () => { if(window.innerWidth > 760)
  { mainnav.classList.remove('responsive')
}};

// end menu system responsive

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of flowers
let flowersList = [];

const output = (flowers) => {
    flowers.forEach(
        flower => {
          let article = document.createElement('article');
          article.setAttribute('class', 'fade-in-img');

          let img = document.createElement('img');
          img.setAttribute('src', flower.img);
          img.setAttribute('alt', flower.flowerName);
          img.setAttribute('class', 'img-responsive');
          img.setAttribute('loading', 'lazy');

          let flowerName = document.createElement('h4');
          flowerName.textContent = flower.flowerName;

          let family = document.createElement('p');
          family.textContent = 'Family: ' + flower.family;

          let desc = document.createElement('p');
          desc.textContent = 'Description: ' + flower.desc;

          let location = document.createElement('p');
          location.textContent = 'Location: ' + flower.location;

          //let zone = document.createElement('p');
          //zone.textContent = 'Zone: ' + flower.zone;

          let droughtTolerant = document.createElement('p');
          droughtTolerant.textContent = 'Drought Tolerant: ' + flower.droughtTolerant;

          let exposure = document.createElement('p');
          exposure.textContent = 'Exposure: ' + flower.exposure;

          let bloomTime = document.createElement('p');
          bloomTime.textContent = 'Bloom Time: ' + flower.bloomTime;

          let facts = document.createElement('a');
          facts.setAttribute('href', `https://en.wikipedia.org/wiki/${flower.flowerName}`);
          facts.setAttribute('class', 'btnFacts');
          facts.setAttribute('target', '_blank');

          let para = document.createElement('p')

          article.appendChild(img);
          article.appendChild(flowerName);
          article.appendChild(family);
          article.appendChild(desc);
          article.appendChild(location);
          //article.appendChild(zone);
          article.appendChild(exposure);
          article.appendChild(bloomTime);
          article.appendChild(facts);
          facts.appendChild(document.createTextNode( "More facts >>"));
          //article.appendChild(map);
          //map.appendChild(document.createTextNode( "map"));
          article.appendChild(para);

          document.querySelector('#flowers').appendChild(article);
        }
    );
 }



//const url = "https://mswain430.github.io/wdd-330/week12/flowers/flowersList.json"
fetch ("https://mswain430.github.io/wdd-330/week12/flowers/flowersList.json")
.then(response => response.json())
.then(flowers => {
    flowersList = flowers;
    output(flowersList);
})


const reset = () => {
    document.querySelector('#flowers').innerHTML = '';
}

const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;
   // let filter2 = document.querySelector('#sortByName').value;


    switch(filter) {
        case 'flowerNameAscending':
            output(flowersList.sort(
                (flower1, flower2) => {
                    let flowerName1 = flower1.flowerName.toLowerCase();
                    let flowerName2 = flower2.flowerName.toLowerCase();
                    if (flowerName1 < flowerName2) return -1;
                    else if (flowerName1 > flowerName2) return 1;
                    else return 0;
                }));
            break;
        case 'flowerNameDescending':
            output(flowersList.sort(
                (flower1, flower2) => {
                    let flowerName1 = flower1.flowerName.toLowerCase();
                    let flowerName2 = flower2.flowerName.toLowerCase();
                    if (flowerName1 > flowerName2) return -1;
                    else if (flowerName1 < flowerName2) return 1;
                    else return 0;
                }));
            break;
        case 'Drought Tolerant':
            output(function(i,n){
              return n.droughtTolerant==='yes';
            })
        default:
            output(flowersList.sort(
              (flower1, flower2) =>
              flower1.flowerName.toLowerCase() > flower2.flowerName.toLowerCase() ? 1 :
              flower2.flowerName.toLowerCase() > flower1.flowerName.toLowerCase() ? -1 : 0));
            break;
    }
}

/* img.onclick = () => {
    img.setAttribute("src", flower.img);
    img.className = "blowup";
    for (const flower of flowers) {
      img.className = "darken";
    }
  }; */

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);





