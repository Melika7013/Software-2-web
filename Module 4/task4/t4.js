'use strict';

const form = document.querySelector('#tv-form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    resultsDiv.innerHTML = ''; // clear old results

    const keyword = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(keyword)}`);
        const data = await response.json();

        console.log(data); // still print JSON in console

        for (const show of data) {
            const h2 = document.createElement('h2');
            h2.innerText = show.show.name;

            const a = document.createElement('a');
            a.href = show.show.url;
            a.target = '_blank';
            a.innerText = 'Link to details';

            const img = document.createElement('img');
            // use ternary operator instead of optional chaining
            img.src = show.show.image ? show.show.image.medium : 'https://placehold.co/210x295?text=Not%20Found';
            img.alt = show.show.name;

            const summary = document.createElement('div');
            summary.innerHTML = show.show.summary;

            const article = document.createElement('article');
            article.append(h2, a, img, summary);

            resultsDiv.append(article);
        }

    } catch (err) {
        console.error('Error fetching data:', err);
    }
});
