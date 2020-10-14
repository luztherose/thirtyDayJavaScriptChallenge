 // This the data that we are going to use
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// store data
const cities = [];
const inputSearch = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
// fetch the data
// fetch is a new api in the browser 
// fetch returns a promise
// we need to convert the blob(raw data) into JSON
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))//populate the cities array

// create a function to filter the data according to user critiria
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //figure out if the city or state matches what was searched
        // create a Regex to look for the word to match
        const regex = new RegExp(wordToMatch, 'gi')// second arguments are flags to create the search pattern g means global and i insentive(match upper and lower case)
        return place.city.match(regex) || place.state.match(regex);
    });
}
//separate numbers with comma
function numbersWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
// Display data
function displayMatches() {
    const matchArray = findMatches(this.value, cities)
    const html = matchArray.map(place => { //map will return an array
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class="name">${cityName}, ${stateName} </span>
            <span class="population">${numbersWithCommas(place.population)}</span>
        </li>
        `
    }).join("") // to converte it into a string
    suggestions.innerHTML = html;
}
inputSearch.addEventListener("change", displayMatches);
inputSearch.addEventListener("keyup", displayMatches)