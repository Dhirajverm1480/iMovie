function NavBar(){
    const Nav = document.createElement('div')
    Nav.className = 'nav-box'
    Nav.innerHTML = `
        <nav class="top-nav">
            <a href="#" id="logo">IMovies</a>
            <div class="nav-list">
                <a href="#">Home</a>
                <a href="#">Movies</a>
                <a href="#">Web Serise</a>
                <a href="#">Genre</a>
            </div>
            <div class="search-component-div">
                <input type="text" id="search-input">
                <button id="search-btn">Search</button>
            </div>
        </nav>
    `
    return Nav;
}

export default NavBar;