"use strict";
const numberOfFilms = +prompt("Сколько фильсмов вы уже смотрели?", "");

const personalMovie08 = {
    count: numberOfFilms, movies: {}, actors: {}, genres: {}, privat: false
};
const whichFilms = alert("Какие фильмы ?");

const arrayFilms = [];

for (let i = 0; i < numberOfFilms; i++) {
    const filmsName = prompt(i + 1, "");
    arrayFilms[i] = filmsName;
}
const filmsRatingsArray = [];
for (let i = 0; i < numberOfFilms; i++) {
    const ratingFilms = prompt(`Рейтинг фильма: ${arrayFilms[i]}`, "");
    filmsRatingsArray[i] = ratingFilms;
}
for (let i = 0; i < numberOfFilms; i++) {
    personalMovie08.movies[arrayFilms[i]] = filmsRatingsArray[i];
}
console.log(personalMovie08);





