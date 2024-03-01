function fetchStarWars3() {
    return fetch('https://api.themoviedb.org/3/movie/1895?api_key=46bb84e7ca0f1835811a6e1b25c4eada&language=fr-FR')
        .then((response) => response.json())
}

async function displayStarWars3() {
    const data = await fetchStarWars3()
    console.log(data.poster_path)
    document.getElementById("star-wars-3").innerHTML = `<h1>${data.title}</h1><img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"/>`
}

displayStarWars3()