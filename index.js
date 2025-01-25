const API_KEY = "b2261e941bbded4955fe202239cd56a4";
let page = 1;

const API_URL = () => `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`;
const API_KEY_IMAGE = "https://image.tmdb.org/t/p/w1280";

const API_SEARCH_KEY = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`
const movieelement = document.getElementById("movieelement");
const next = document.getElementById("next");
const back = document.getElementById("back");
const currentpage = document.querySelector(".currentpage");

async function getmovie(url) {
    const res = await fetch(url);
    const data = await res.json();
    showmovie(data.results);
}

function showmovie(movies) {
    movieelement.innerHTML = '';
    movies.forEach(movie => {
        const { title, poster_path, overview } = movie;
        const moviecard = document.createElement("div");
        moviecard.classList.add("movie");

        moviecard.innerHTML = `
        <img src="${API_KEY_IMAGE + poster_path}" alt="${title}" />
        <div class="detail">
            <h2>${title}</h2>
            <p>${overview ? overview.substring(0, 100) + '...' : 'No overview available'}</p>
        </div>`;

        movieelement.appendChild(moviecard);
    });
}

function nextpage() {
    page += 1;
    getmovie(API_URL());
    currentpage.textContent = page; // Update nomor halaman
}

function backpage() {
    if (page > 1) {
        page -= 1;
        getmovie(API_URL());
        currentpage.textContent = page; // Update nomor halaman
    }
}

next.addEventListener("click", nextpage);
back.addEventListener("click", backpage);

// Load the first page of movies and set initial page number

searchform.addEventListener("submit",(event)=>{
    event.preventDefault()
    const searchquery = search.value

    if(searchquery !=''){
        getmovie(API_SEARCH_KEY + searchquery)
        search.value=''
    }

})

getmovie(API_URL());
currentpage.textContent = page;

title.addEventListener('click', ()=>{
    location.reload()
})
