import NavBar from "../components/NavBar.js";

const Header = document.getElementById("header");
Header.appendChild(NavBar());

const param = new URLSearchParams(window.location.search);
const movieId = param.get("id");
console.log("MOvieId: ", movieId);

fetchMovieById(movieId);

async function fetchMovieById(movieId) {
  try {
    const API_KEY = "d5a6e25117f2c5cc1195399e3ea13eed";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    console.log(data);
    displayMovieData(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

function displayMovieData(data) {
  const backDropContainer = document.getElementById("backdrop");
  let backdropImg = document.createElement("img");
  backdropImg.className = "back-drop-img";
  backdropImg.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
  backDropContainer.appendChild(backdropImg);

  const movieDetail = document.getElementById("movieDetail");
  const movieInfo = document.createElement("div");
  movieInfo.classList.add('movie-info-overlay')
  movieInfo.innerHTML = `
      <div id="movie-div">
                <div class="img-container">
                    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
                </div>
                <div class="movieInfo">
                    <h2 class="title">${data.title}</h2>
                    <p class="description"></p>
                </div>
            </div>
    `;
    movieDetail.appendChild(movieInfo)
}
