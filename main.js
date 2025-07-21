import NavBar from "./components/NavBar.js";

const Header = document.getElementById('header')
Header.appendChild(NavBar())

// Your API Key from TMDb
const API_KEY = "d5a6e25117f2c5cc1195399e3ea13eed";

// Base URL for TMDb API
const BASE_URL = "https://api.themoviedb.org/3";

// Popular movies endpoint
const endpoint = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// Function to fetch data
const fetchMovies = async () => {
  try {
    const response = await fetch(BASE_URL + endpoint);
    const data = await response.json();

    console.log("Data", data);

    // Check if the response is successful
    if (response.ok) {
      displayMovieData(data);
    } else {
      console.log("Error fetching data:", data.status_message);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
fetchMovies();

function displayMovieData(data) {
  let movieSection = document.getElementById("movie-section");
  data.results.map((item) => {
    let movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
              <a href="./pages/movieDetail.html&=${item.id}" class="a-movie">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" class="movie-img">
                <div class="movie-card-info">
                    <p class="title">${item.title}</p>
                </div>
              </a>
    `;
    movieSection.appendChild(movieCard)
  });
}