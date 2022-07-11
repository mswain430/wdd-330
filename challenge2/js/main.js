
fetch('flowerquotes.json')
  .then(data => data.json())
  .then(flowerquotes => {
    const randomNum = Math.floor(Math.random() * flowerquotes.length);
    const inspiration = flowerquotes[randomNum];

    document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
    document.querySelector('#author').innerText = '~' + inspiration.author ;
  });