'use strict';

const form = document.getElementById('searchForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const valueFromInput = document.getElementById('query').value.trim();

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(valueFromInput)}`);
    if (!response.ok) {
      throw new Error(`Virhe: ${response.status}`);
    }

    const data = await response.json();

    console.log('Hakutulokset:', data);

    if (data.length === 0) {
      console.log('Ei tuloksia haulle.');
    } else {
      console.log(`Löytyi ${data.length} ohjelmaa.`);
      data.forEach((item, index) => {
        console.log(`${index + 1}. Ohjelma: ${item.show.name}`);
        console.log(`   Genret: ${item.show.genres.join(', ')}`);
        console.log(`   Kuvaus: ${item.show.summary?.replace(/<[^>]*>/g, '') || 'Ei kuvausta saatavilla'}`);
        console.log('---');
      });
    }
  } catch (error) {
    console.error(`Virhe haussa: ${error.message}`);
  }
});
