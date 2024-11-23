'use strict';

const form = document.getElementById('searchForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`Virhe: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    if (data.length === 0) {
      console.log('Ohjelmaa ei löydy.');
    } else {
      data.forEach((item, index) => {
        console.log(`${index + 1}. Ohjelma: ${item.show.name}`);
        console.log(`   Genret: ${item.show.genres.join(', ')}`);
        console.log(`   Kuvaus: ${item.show.summary?.replace(/<[^>]*>/g, '') || 'Kuvausta ei saatavilla'}`);
        console.log('---');
      });
    }
  } catch (error) {
    console.error(`Tapahtui virhe: ${error.message}`);
  }
});
