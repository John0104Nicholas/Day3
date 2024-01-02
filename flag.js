// const christmasIsland = {
//     // ... (your Christmas Island JSON data)
// };

const restCountriesAPI = 'https://restcountries.com/v3/all';

// Fetch data from Rest Countries API
fetch(restCountriesAPI)
    .then(response => response.json())
    .then(data => {
        // Extract and print details for all countries
        data.forEach(country => {
            const name = country.name.common;
            const region = country.region;
            const subregion = country.subregion;
            const population = country.population;

            console.log(`Name: ${name}, Region: ${region}, Subregion: ${subregion}, Population: ${population}`);
        });
    })
    .catch(error => console.error('Error fetching data from Rest Countries API:', error));
