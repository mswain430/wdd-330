/* FETCH */
// Step 1: Declare a global empty array variable to store a list of flowers
let flowersList = [];

const output = (flowers) => {
    flowers.forEach(
        flower => {
          let article = document.createElement('article');

          let img = document.createElement('img');
          img.setAttribute('src', flower.img);
          img.setAttribute('alt', flower.flowerType);
          img.setAttribute('class', 'img img-responsive');
          img.setAttribute('loading', 'lazy');

          let flowerName = document.createElement('h4');
          flowerName.textContent = flower.flowerName;

          let type = document.createElement('p');
          type.textContent = flower.type;

          let desc = document.createElement('p');
          desc.textContent = flower.desc;

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
          facts.setAttribute('href', `https://en.wikipedia.org/wiki/${flowers.flowerName}`);
          facts.setAttribute('target', '_blank');

          let para = document.createElement('p')

          article.appendChild(img);
          article.appendChild(flowerName);
          article.appendChild(type);
          article.appendChild(desc);
          article.appendChild(location);
          //article.appendChild(zone);
          article.appendChild(exposure);
          article.appendChild(bloomTime);
          article.appendChild(facts);
          facts.appendChild(document.createTextNode( "facts"));
          //article.appendChild(map);
          //map.appendChild(document.createTextNode( "map"));
          article.appendChild(para);

          document.querySelector('#flowers').appendChild(article);
        }
    );
 }
 //let url = "https://mswain430.github.io/wdd-330/week12/flowers/flowersList.json"


const url = "https://mswain430.github.io/wdd-330/week12/flowers/flowersList.json"
fetch (url)
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
        default:
            output(flowersList.sort(
              (flower1, flower2) =>
              flower1.flowerName.toLowerCase() > flower2.flowerName.toLowerCase() ? 1 :
              flower2.flowerName.toLowerCase() > flower1.flowerName.toLowerCase() ? -1 : 0));
            break;
    }
}


// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);



