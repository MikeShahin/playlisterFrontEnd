class Song {
    constructor(artist, songName, preview) {
        this.artist = artist;
        this.songName = songName;
        this.preview = preview;
    }
};
let allPlaylistSongs = [];
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
        let artistSong = document.createElement("li");
        
        artistSong.innerText = `${artist} - ${title}`;
        sidebar.classList.remove("hidden");
        songsToAdd.appendChild(artistSong);
        allPlaylistSongs.push(new Song(artist, title, preview))
        console.log(allPlaylistSongs)

    })
};

let songFetch = function() {
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(results => {
        // console.log(results);
        let searchResults = []
        let res = results.data
        console.log(res);

        let list = document.createElement("ol");
        list.setAttribute("id", "songList");
        main.appendChild(list);

        for(let i = 0; i < res.length; i++) {
            albumView(res[i].artist.name, res[i].title, res[i].preview, i)
        }
           
        // for(let i = 0; i < res.length; i++) {
        //     searchResults.push(new Song(res[i].artist.name, res[i].title_short, res[i].preview))
        // }
        // return searchResults   
    })
    // .then(searchResults => {
    //     let list = document.createElement("ol");
    //     list.setAttribute("id", "songList");
    //     main.appendChild(list);

    //     for(let i = 0; i < searchResults.length; i++) {
    //         albumView(searchResults[i].artist, searchResults[i].songName, searchResults[i].preview, i)
    //     }
    //     // console.log(url)
    //     console.log(searchResults)
    // })
};