'use strict';

const form = document.getElementById('searchForm');
const resultsContainer = document.getElementById('results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const valueFromInput = document.getElementById('query').value.trim();

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(valueFromInput)}`);
    if (!response.ok) {
      throw new Error(`Virhe: ${response.status}`);
    }

    const data = await response.json();

    resultsContainer.innerHTML = '';

    if (data.length === 0) {
      resultsContainer.innerHTML = '<p>Ei tuloksia haulle.</p>';
    } else {
      data.forEach((item) => {
        const tvShow = item.show;

        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.textContent = tvShow.name;

        const link = document.createElement('a');
        link.href = tvShow.url;
        link.target = '_blank';
        link.textContent = 'Lisätiedot';

        const image = document.createElement('img');
        image.src = tvShow.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
        image.alt = tvShow.name;

        const summary = document.createElement('div');
        summary.innerHTML = tvShow.summary || '<p>Ei yhteenvetoa saatavilla.</p>';

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(summary);

        resultsContainer.appendChild(article);
      });
    }
  } catch (error) {
    console.error(`Virhe haussa: ${error.message}`);
    resultsContainer.innerHTML = '<p>Tapahtui virhe tietoja haettaessa.</p>';
  }
});
