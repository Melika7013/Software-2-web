'use strict';

// get form and results div
const form = document.querySelector('#tv-form');
const results = document.querySelector('#results');

// on form submit
form.addEventListener('submit', async function(e) {
    e.preventDefault(); // stop page refresh
    results.innerHTML = ''; // clear old results

    // get search term
    const keyword = document.querySelector('input[name=q]').value;

    // get data from API
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(keyword)}`);
    const data = await response.json();

    console.log(data); // show full data in console

    // show each TV show
    for (const show of data) {
        const h2 = document.createElement('h2');
        h2.innerText = show.show.name;

        const a = document.createElement('a');
        a.href = show.show.url;
        a.target = '_blank';
        a.innerText = 'Link';

        const img = document.createElement('img');
        img.src = show.show.image?.medium || 'https://placeholdit.com/210x295';
        img.alt = show.show.name;

        const summary = document.createElement('div');
        summary.innerHTML = show.show.summary;

        const article = document.createElement('article');
        article.append(h2, a, img, summary);

        results.append(article);
    }
});
