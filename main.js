import NavBar from "./components/NavBar.js";

const Header = document.getElementById("header");
Header.appendChild(NavBar());

// Your API Key from TMDb.
const API_KEY = "d5a6e25117f2c5cc1195399e3ea13eed";
const BASE_URL = "https://api.themoviedb.org/3";
let currentPage = 1;
let totalPages = 1;
const endpoint = `/movie/popular?api_key=${API_KEY}&language=en-US`;

function getPageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("page")) || 1;
}

function setPageInURL(page) {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  history.pushState(
    { page },
    " ",
    `${window.location.pathname}?${params.toString()}`
  );
  fetchMovies(page);
}

// Function to fetch data
const fetchMovies = async (page = 1) => {
  try {
    const response = await fetch(BASE_URL + endpoint + `&page=${page}`);
    const data = await response.json();

    console.log("Data", data);
    console.log("pages: ", data.total_pages);
    currentPage = data.page;
    totalPages = data.total_pages;

    if (response.ok) {
      displayMovieData(data);
      renderPagination();
    } else {
      console.log("Error fetching data:", data.status_message);
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

// fetchMovies();

function displayMovieData(data) {
  let movieSection = document.getElementById("movie-section");
  data.results.map((item) => {
    let movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
              <a href="./pages/movieDetail.html?id=${item.id}" class="a-movie">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" class="movie-img">
                <div class="movie-card-info">
                    <p class="title">${item.title}</p>
                </div>
              </a>
    `;
    movieSection.appendChild(movieCard);
  });
}

const paginationDiv = document.getElementById("paggination-box");
function renderPagination() {
  paginationDiv.innerHTML = "";

  const createButton = (label, page, isActive = false, disabled = false) => {
    const btn = document.createElement("button");
    btn.classList.add("page-btn");
    btn.textContent = label;
    if (isActive) btn.classList.add("active");
    if (disabled) btn.disabled = true;
    btn.addEventListener("click", () => {
      if (!disabled && page !== currentPage) {
        setPageInURL(page);
      }
    });
    return btn;
  };

  // Previous
  paginationDiv.appendChild(
    createButton("Prev", currentPage - 1, false, currentPage === 1)
  );

  // Numbered Pages (max 5)
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);
  if (currentPage <= 2) end = Math.min(5, totalPages);
  if (currentPage >= totalPages - 1) start = Math.max(1, totalPages - 4);

  for (let i = start; i <= end; i++) {
    paginationDiv.appendChild(createButton(i, i, i === currentPage));
  }

  // Next
  paginationDiv.appendChild(
    createButton("Next", currentPage + 1, false, currentPage === totalPages)
  );
}

// Handle back/forward buttons
window.addEventListener("popstate", (event) => {
  const page = getPageFromURL();
  fetchMovies(page);
});

// Load page from URL on first load
fetchMovies(getPageFromURL());
