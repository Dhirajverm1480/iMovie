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
    const backDropContainer = document.getElementById("backdrop")
    let backdropImg = document.createElement('img')
    backdropImg.className = 'back-drop-img'
    backdropImg.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    backDropContainer.appendChild(backdropImg)
}