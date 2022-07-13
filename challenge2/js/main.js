
fetch('quotes.json')
  .then(data => data.json())
  .then(quotes => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const inspiration = quotes[randomNum];

    document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
    document.querySelector('#author').innerText = '~' + inspiration.author ;
  });