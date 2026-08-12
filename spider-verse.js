"use strict";

const movie = document.querySelector(".movie");
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
    e.preventDefault();
    movie.classList.toggle("active");
});