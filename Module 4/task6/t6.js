'use strict';

// Get form and results container
const form = document.querySelector('#joke-form');
const resultsDiv = document.querySelector('#results');

// Listen for form submit
form.addEventListener('submit', async function(e) {
    e.preventDefault();           // Prevent page refresh
    resultsDiv.innerHTML = '';    // Clear previous results

    const searchTerm = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();

        if (data.result.length === 0) {
            resultsDiv.innerHTML = '<p>No jokes found.</p>';
            return;
        }

        // Loop through jokes and display each in an <article>
        for (const joke of data.result) {
            const article = document.createElement('article');
            const p = document.createElement('p');
            p.innerText = joke.value;
            article.appendChild(p);
            resultsDiv.appendChild(article);
        }
    } catch (error) {
        console.error('Error fetching jokes:', error);
        resultsDiv.innerHTML = '<p>Error fetching jokes.</p>';
    }
});
