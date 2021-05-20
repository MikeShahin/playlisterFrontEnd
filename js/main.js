//global variables
const main = document.getElementById("main");
const logo = document.querySelector(".logo");
const seeAllPlaylists = document.getElementById("seePlaylists");
const api = new BackendApi;
const sidebar = document.querySelector(".sidebar");
const searchAndCreate = document.querySelector(".active");
const searchByAlbum = document.getElementById("searchByAlbum");
const list = document.createElement("ol");
const results = document.getElementById("results");
const header = document.querySelector("h3");
const searchForm = document.getElementById("songSearch");
const artistSearchBox = document.getElementById("artist");
const albumSearchBox = document.getElementById("album");
const playlistNameInput = document.getElementById("playlistName");
const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
let playlistName = playlistNameInput.value;
let artist;
let album;
let url;

sidebar.classList.add("hidden");
list.setAttribute("id", "songList");
results.appendChild(list);

//'helper' functions
let backHome = function() {
    logo.addEventListener('click', (e) => {
        location.reload();
    });
};

let removeElements = function(el) {
    while(el.firstChild){
        el.removeChild(el.firstChild);
    }
};

let removeSearchElements = function(bool) {
    if (bool === true) {
        playlistNameInput.remove();
    } else {
        searchForm.remove();
    }
};

