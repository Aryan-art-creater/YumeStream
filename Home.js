"use strict";

const searchContainer = document.querySelector(".search");
const input = document.querySelector(".search-input");

searchContainer.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    input.focus();
});

const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slide");

let index = 0;

document.querySelector(".arrow.right").addEventListener("click", () => {
    index++;
    if (index >= slides.length) index = 0;

    slider.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector(".arrow.left").addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.length - 1;

    slider.style.transform = `translateX(-${index * 100}%)`;
});

let autoSlide = setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;

    slider.style.transform = `translateX(-${index * 100}%)`;
}, 3000);



const container = document.querySelector(".top-6");

function scrollRight() {
    container.scrollLeft += 300;
}

function scrollLeft() {
    container.scrollLeft -= 300;
}


const userBtn = document.querySelector(".user");
const userPanel = document.querySelector(".user-panel");

userBtn.addEventListener("click", () => {
    userPanel.classList.toggle("active");
});

document.addEventListener("click", (e) => {

    if(
        !userPanel.contains(e.target) &&
        !userBtn.contains(e.target)
    ){
        userPanel.classList.remove("active");
    }

});

const dpUpload = document.getElementById("dp-upload");
const profileImage = document.getElementById("profile-image");

dpUpload.addEventListener("change", () => {

    const file = dpUpload.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){
            profileImage.src = e.target.result;

            localStorage.setItem(
                "userDP",
                e.target.result
            );
        };

        reader.readAsDataURL(file);
    }
});

const savedDP = localStorage.getItem("userDP");

if(savedDP){
    profileImage.src = savedDP;
}



const editBtn = document.getElementById("edit-name");
const username = document.getElementById("username");

editBtn.addEventListener("click", () => {

    const newName = prompt("Enter username:");

    if(newName){
        username.textContent = newName;
        localStorage.setItem("username", newName);
    }

});

const savedName = localStorage.getItem("username");

if(savedName){
    username.textContent = savedName;
}



const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("userDP");
    localStorage.removeItem("username");
    
    profileImage.src = "https://i.pravatar.cc/150?img=12";

    username.textContent = "Guest";

    alert("Logged Out Successfully!");

});