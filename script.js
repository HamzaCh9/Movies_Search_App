const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21cb3426506e39fc9aa84ca37cc4768a&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
// const SEARCHAPI="https://api.themoviedb.org/3/movie?api_key=21cb3426506e39fc9aa84ca37cc4768a&query=";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=21cb3426506e39fc9aa84ca37cc4768a&query=";
const API_KEY="21cb3426506e39fc9aa84ca37cc4768a";
// const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchItem}`;



const main=document.getElementById("section");
const form=document.getElementById("form");
const search=document.getElementById("query");
// returnMovies(APILINK);

function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element=>{
            const div_card=document.createElement('div');
            div_card.setAttribute("class","card");

            const div_row=document.createElement('div');
            div_row.setAttribute("class","row");


            const div_column=document.createElement('div');
            div_column.setAttribute("class","column");

            const image=document.createElement('img');//thumbnail
            image.setAttribute("class","thumbnail");
            image.setAttribute("id","image");
            image.src=IMG_PATH + element.poster_path;

            const title=document.createElement('h3');
            title.setAttribute("id","title");
            // title.innerHTML='$element.title';
            title.innerHTML = element.title;

            const center=document.createElement('center');
            
            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);

            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
            // event listener



        } );
    });

}
// Function to clear the main section
function clearMainSection() {
    main.innerHTML = '';
  }
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    clearMainSection();
    const searchItem=search.value;
    if(searchItem){
        
        const searchUrll = SEARCHAPI + searchItem;
        returnMovies(searchUrll);
        search.value="";

    }
})




// Generate a random page number between 1 and 10
function generateRandomPage() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
// Initial page load
window.addEventListener('load', () => {
    clearMainSection();

    const randomPage = generateRandomPage();
    const popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${randomPage}`;
    returnMovies(popularMoviesUrl);


    // returnMovies(APILINK);
  });
// Initial page load


//  window.addEventListener('load', () => {
//      clearMainSection();

//      const randomPage = generateRandomPage();
//      const popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=3`;
//      returnMovies(popularMoviesUrl);


//      // returnMovies(APILINK);
//    });