function NavBar(){
    const Nav = document.createElement('div')
    Nav.className = 'nav-box'
    Nav.innerHTML = `
        <nav class="top-nav">
            <a href="#" id="logo">IMovies</a>
            <div class="nav-list">
                <a href="#" class="navlist-a">Home</a>
                <a href="#" class="navlist-a">Movies</a>
                <a href="#" class="navlist-a">Web Serise</a>
                <a href="#" class="navlist-a">Genre</a>
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