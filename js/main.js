let main = document.getElementById("main");
let sidebar = document.querySelector(".sidebar")
sidebar.classList.add("hidden");

let list = document.createElement("ol");
list.setAttribute("id", "songList");

let results = document.getElementById("results")
results.appendChild(list);

let header = document.querySelector("h3");

const searchForm = document.getElementById("songSearch")
const artistSearchBox = document.getElementById("artist");
const albumSearchBox = document.getElementById("album");
const playlistNameInput = document.getElementById("playlistName");

let searchByAlbum = document.createElement("button");
searchByAlbum.innerHTML = "Search and create a new playlist";
searchForm.appendChild(searchByAlbum);

let seePlaylists = document.createElement("button");
seePlaylists.innerHTML = "See all playlists";
main.appendChild(seePlaylists);

let home = document.createElement("button");
home.innerHTML = "home";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
let artist;
let album;
let url;

let albumView = function(artist, title, preview, index) {
    let song = document.createElement("span");
    let li = document.createElement("li");
    li.innerText = `${artist} - ${title}`;
    let songPreview = document.createElement("audio");
    songPreview.setAttribute("src", preview);
    songPreview.setAttribute("controls", "controls");
    let addToPlaylist = document.createElement("button");
    addToPlaylist.setAttribute("id", index)
    addToPlaylist.classList.add("add");
    addToPlaylist.innerHTML = "add";

    li.appendChild(addToPlaylist);
    song.appendChild(li);
    song.appendChild(songPreview);
    list.appendChild(song);

    addToPlaylist.addEventListener('click', (e) => {
        let songsToAdd = document.getElementById("playlistAdd");
        let songs = document.createElement("li");
        songs.innerText = `${artist} - ${title}`;
        sidebar.classList.remove("hidden");
        songsToAdd.appendChild(songs);  
    })
}

home.addEventListener('click', (e) => {
    location.reload()
});

