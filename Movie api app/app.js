const form = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const search = document.querySelector(".search");

const getMovieInfo = (movie) => {
    const myAPIKEY = "57c5ca3e";
    const url = `http://www.omdbapi.com/?apikey=${myAPIKEY}&t=${movie}`;

    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            console.log(data);
            showMovieData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
    fetchData();
}

const showMovieData = (data) => {
    const movieGenreElement = document.createElement('div');
    movieContainer.innerHTML ="";
    const { Title, imdbRating, Actors, Genre, Ratings, Released, Runtime, Plot } = data;

    let movieElement = document.createElement('div');
    movieElement.classList.add('movie-ele');
    movieGenreElement.classList.add('movie-info');

    const{Poster} = data;
    const moviePosterElement = document.createElement("div");
    moviePosterElement.classList.add("movie-Poster");
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`;

    movieElement.innerHTML = `
        <h2>${Title}</h2>
        <p><strong>Rating: &#11088;</strong> ${imdbRating}</p>
        <p><strong>Actors: </strong> ${Actors}</p>
        <p><strong>Genre: </strong> ${Genre}</p>
        <p><strong>Released: </strong> ${Released}</p>
        <p><strong>Runtime: </strong> ${Runtime}</p>
        <p><strong>Plot: </strong> ${Plot}</p>
        `;

    movieGenreElement.classList.add('movie-Genre');
    Genre.split(",").forEach(element => {
        const p = document.createElement("p"); 
        p.innerText = element.trim();
        movieGenreElement.appendChild(p);
    });


    movieElement.appendChild(moviePosterElement);
    movieElement.appendChild(movieGenreElement);
    movieContainer.appendChild(movieElement);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const moviename = search.value.trim();
    if (moviename !== "") {
        getMovieInfo(moviename);
    } else {
        movieContainer.innerText = "Please enter a valid movie name...";
    }
});





// const form = document.querySelector("form");
// const movieContainer = document.querySelector(".movie-container");
// const search = document.querySelector(".search");

// const getMovieInfo = (movie) => {
//     const myAPIKEY = "57c5ca3e";
//     const url = `http://www.omdbapi.com/?apikey=${myAPIKEY}&t=${movie}`;

//     async function fetchData() {
//         // try {
//             const response = await fetch(url);
//             // if (!response.ok) {
//             //     throw new Error('Network response was not ok ' + response.statusText);
//             // }
//             const data = await response.json();
//             console.log(data);
//         // } catch (error) {
//         //     console.error('There has been a problem with your fetch operation:', error);
//         // }
//     }
//     fetchData();
// }
// const showMovieData = ()=>{
//     const{Title, imdbRating, Actors, Genre, Ratings, Released, Runtime, Plot, Poster} = data;
//     let movieElement = document.createElement('div');
//     movieElement.innerHTML = `<h2>${Title}</h2>
//                               <p><strong>Rating : &#11088;</strong>${imdbRating}</p>`;

//     movieContainer.appendChild(movieElement);

//     const movieGenreElemrnt = document.createElement('div');
//     movieGenreElemrnt.classList.add('movie-Genre');
//     Genre.split(",").forEach(element => {
//         const p = document.createElement("p"); 
//         p.innerText = element.trim();
//         movieGenreElemrnt.appendChild(p);
//     });
//     movieElement.appendChild(movieGenreElemrnt);

//     movieContainer.appendChild(movieElement); 
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const moviename = search.value.trim();
//     if(moviename !== " "){
//         getMovieInfo(moviename);
//     }else{
//         movieContainer.innerText = "Please enter a valid movie name....";
//     }
// })