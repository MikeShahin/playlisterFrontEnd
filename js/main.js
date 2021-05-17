let main = document.getElementById("main");
let sidebar = document.querySelector(".sidebar")
sidebar.classList.add("hidden");

let searchByAlbum = document.getElementById("searchByAlbum");
let list = document.createElement("ol");
list.setAttribute("id", "songList");

let results = document.getElementById("results")
results.appendChild(list);

let header = document.querySelector("h3");

let home = document.createElement("button");
home.innerHTML = "home";

const searchForm = document.getElementById("songSearch")
const artistSearchBox = document.getElementById("artist");
const albumSearchBox = document.getElementById("album");
const playlistNameInput = document.getElementById("playlistName");
let playlistName = playlistNameInput.value;

// let seePlaylists = document.createElement("button");
// seePlaylists.innerHTML = "See all playlists";
// main.appendChild(seePlaylists);

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
let artist;
let album;
let url;

// let albumView = function(artist, title, preview, index) {
//     let song = document.createElement("span");
//     let li = document.createElement("li");
//     li.innerText = `${artist} - ${title}`;
//     let songPreview = document.createElement("audio");
//     songPreview.setAttribute("src", preview);
//     songPreview.setAttribute("controls", "controls");
//     let addToPlaylist = document.createElement("button");
//     addToPlaylist.setAttribute("id", index)
//     addToPlaylist.classList.add("add");
//     addToPlaylist.innerHTML = "add";

//     li.appendChild(addToPlaylist);
//     song.appendChild(li);
//     song.appendChild(songPreview);
//     list.appendChild(song);

//     addToPlaylist.addEventListener('click', (e) => {
//         let songsToAdd = document.getElementById("playlistAdd");
//         let songs = document.createElement("li");
//         songs.innerText = `${artist} - ${title}`;
//         sidebar.classList.remove("hidden");
//         songsToAdd.appendChild(songs);  
//     })
// };

let backHome = function() {
    home.addEventListener('click', (e) => {
        location.reload()
    });
}

let albumSearch = function() {
    searchByAlbum.addEventListener('click', (e) => {
        
        e.preventDefault()
        artist = artistSearchBox.value;
        album = albumSearchBox.value;
        playlistName = playlistNameInput.value;
        url = corsAnywhere + `https://api.deezer.com/search?q=artist:'${artist}'album:'${album}'`
        songFetch();
        
        header.innerText = `Add songs to ${playlistName}`;
        searchByAlbum.innerHTML = "Search"
        
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }
        
        if (seePlaylists) {
            seePlaylists.remove();
        };
        main.appendChild(home)
    });
    backHome();
};
albumSearch();
