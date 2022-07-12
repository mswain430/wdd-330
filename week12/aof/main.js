fetch("quotes.json")
  .then(data => data.json())
  .then(quotes => {
        const randomNum = Math.floor(Math.random() * quotes.length);
        const inspiration = quotes[randomNum];

        document.querySelector('#quote').innerText = '"' + inspiration.quote + '"';
        document.querySelector('#author').innerText = `~ ${inspiration.author}`;
})

fetch("articlesOfFaith.json")
  .then(data => data.json())
  .then(articlesOfFaith => {
        const randomNum = Math.floor(Math.random() * articlesOfFaith.length);
        const inspiration = articlesOfFaith[randomNum];

        document.querySelector('#reference').innerText =  inspiration.article ;
        document.querySelector('#article').innerText = inspiration.verse;
        document.querySelector('#verse').innerText = '~' + inspiration.reference;
})