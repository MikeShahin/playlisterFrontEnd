let main = document.getElementById("main");
let sidebar = document.querySelector(".sidebar")
sidebar.classList.add("hidden");

let searchAndCreate = document.querySelector(".active");

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

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
let artist;
let album;
let url;

let backHome = function() {
    home.addEventListener('click', (e) => {
        location.reload()
    });
};


let albumSearch = function() {
    searchAndCreate.addEventListener('click', (e) => {
        e.preventDefault()
        playlistName = playlistNameInput.value;
        while (searchAndCreate.classList == "active") {
    
            if (playlistName !== "") {
                searchAndCreate.classList.remove("active")
                playlistNameInput.remove();
                header.innerText = `Add songs to ${playlistName}`;
                api.createPlaylist(playlistName);
                playlistName = ""
            }
        }
    });
    
    searchByAlbum.addEventListener('click', (e) => {
        
        e.preventDefault()

        artist = artistSearchBox.value;
        album = albumSearchBox.value;
        // playlistName = playlistNameInput.value;
        // api.createPlaylist(playlistName);
        url = corsAnywhere + `https://api.deezer.com/search?q=artist:'${artist}'album:'${album}'`
        songFetch();
        
        // header.innerText = `Add songs to ${playlistName}`;
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
