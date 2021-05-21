let songsView = function(artist, title, preview, index, bool) {
    let song = document.createElement("span");
    let li = document.createElement("li");
    li.innerText = `${artist} - ${title}`;
    let songPreview = document.createElement("audio");
    songPreview.setAttribute("src", preview);
    songPreview.setAttribute("controls", "controls");
    song.appendChild(li);
    list.appendChild(song);
    
    if (bool === true) {
        let addToPlaylist = document.createElement("button");
        addToPlaylist.setAttribute("id", index)
        addToPlaylist.classList.add("add");
        // addToPlaylist.innerHTML = "add";
        li.prepend(addToPlaylist);

        addToPlaylist.addEventListener('click', (e) => {
            let songsToAdd = document.getElementById("playlistAdd");
            let artistSong = document.createElement("li");
            
            artistSong.innerText = `${artist} - ${title}`;
            sidebar.classList.remove("hidden");
            songsToAdd.appendChild(artistSong);
            // allPlaylistSongs.push(new Song(artist, title, preview))
            let x = document.getElementById("playlistId");
            api.addSongsToPlaylist(artist, title, preview, x.value)
        })
    }
    li.prepend(songPreview);
};

let songFetch = function() {
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(results => {
        // console.log(results);
        // let searchResults = []
        let res = results.data
        // console.log(res);
        if (playlistName !== "") {
            for(let i = 0; i < res.length; i++) {
                songsView(res[i].artist.name, res[i].title, res[i].preview, i, true)
            }
        } else {
            header.innerText = "Just browsing, go back by clicking on the logo at the top and enter a playlist name with your search to create a new list"
            for(let i = 0; i < res.length; i++) {
                songsView(res[i].artist.name, res[i].title, res[i].preview, i)
            }        
        }
    })
};

let albumSearch = function() {
    searchAndCreate.addEventListener('click', (e) => {
        e.preventDefault()
        playlistName = playlistNameInput.value;
        while (searchAndCreate.classList == "active") {
            if (playlistName !== "") {
                searchAndCreate.classList.remove("active")
                // header.innerText = `Add songs to ${playlistName}`;
                api.createPlaylist(playlistName);
            } else {
                removeSearchElements()
                break
            }
        }
    });
    searchByAlbum.addEventListener('click', (e) => {  
        e.preventDefault()
        artist = artistSearchBox.value;
        album = albumSearchBox.value;
        url = corsAnywhere + `https://api.deezer.com/search?q=artist:'${artist}'album:'${album}'`
        let pl = Playlists.allPlaylists;
        if (pl.some(playlist => playlist.name === playlistName)) {
            removeSearchElements();
            header.innerText = "Someones already created this playlist, choose a new name."
        } else {
            
            songFetch();
            header.innerText = `Add songs to ${playlistName}`;
            searchByAlbum.innerHTML = "Search"     
            removeElements(list);
            removeSearchElements(true);
            if (seePlaylists) {
                seePlaylists.remove();
            };
            main.appendChild(home)
        }
    });
    backHome();
};
albumSearch();