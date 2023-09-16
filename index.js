const movie = document.getElementById("movieName");
const search_btn = document.getElementById("search");
const movieCardsContainer = document.getElementById("searched");
async function getMovie() {
    movieCardsContainer.innerText = "";
    let movieName = movie.value;
    try {
        let response = await fetch(
            `https://www.omdbapi.com/?&apikey=bce5f182&s=${movieName}`
        );
        let data = await response.json();
        console.log(data);
        const movieList = data.Search;
        console.log(movieList);

        movieList.forEach((movie) => {
            console.log(movie);
            getMovies(movie);
        });

        function getMovies(movie) {
            const newDiv = document.createElement("div");
            newDiv.id = "rootDiv";
            newDiv.innerHTML = `
            <div id ="imgDiv"><img src = ${movie.Poster}</div>
            <h3 id ="titleDiv">${movie.Title} </h3></br>
            <p id ="YearDiv">${movie.Year}</p>
            `;
            movieCardsContainer.appendChild(newDiv);
        }
        movie.value = "";
    } catch (error) {
        console.log(error, "error");
    }
}

search_btn.addEventListener("click", getMovie);