'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function(e) {
    e.preventDefault(); // stop page refresh

    const keyword = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(keyword)}`);
        const data = await response.json();

        console.log(data); // print JSON in console only
    } catch (err) {
        console.error('Error fetching data:', err);
    }
});
