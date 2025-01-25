// const API_KEY = "b2261e941bbded4955fe202239cd56a4"

// let page = 1;

// const API_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`

// const API_KEY_IMAGE= "https://image.tmdb.org/t/p/w1280"

// async function getmovie(url){
//     const res = await fetch(url)
//     const data = await res.json()
//     showmovie(data.results)
// }

// function nextpage(){
//     page += 1

// }

// function backpage(){
//     page-= 1
// }
// next.addEventListener('click', ()=>{
//     alert('text')
// })
// back.addEventListener('click', ()=>{
//     alert('text')
// })



// function showmovie(movies){
//     movieelement.innerHTML = ''
//     movies.forEach(movie => {
//         const {title,poster_path,overview} = movie
//         const moviecard= document.createElement('div');
//         moviecard.classList.add("movie")

//         moviecard.innerHTML= `
//         <img src="${API_KEY_IMAGE + poster_path}"/>
//         <div class="detail">
//         <h2>${title}<h2>
//         <p>${overview.substring(0,100)}....</p>
//         </div>`

//         movieelement.appendChild(moviecard)
        
//     });
    
// }
// getmovie(API_URL)