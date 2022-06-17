"use strict";
let  numberOfFilms = +prompt("Сколько фильсмов вы уже смотрели?", "");


const personalMovie08 = {
    count: numberOfFilms, movies: {}, actors: {}, genres: {}, privat: false
};

for (;;) {
    let lastWatchedFilms= prompt("Один из последних просмотренных фильмов ","" ),
        ratingFilms=+prompt("На сколько вы оцените его?","");
    if(lastWatchedFilms !=null && ratingFilms!=null && lastWatchedFilms!="" && ratingFilms!="" && lastWatchedFilms.length<50 && typeof (ratingFilms)==="number"){
        personalMovie08.movies[lastWatchedFilms]=ratingFilms;
        console.log("done");
        break;
    }
};
if(personalMovie08.movies["count"]<10){
    alert
}


