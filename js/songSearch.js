class Song {
    constructor(artist, songName, preview) {
        this.artist = artist;
        this.songName = songName;
        this.preview = preview;
    }
}

searchByAlbum.addEventListener('click', (e) => {
    e.preventDefault()
    let playlistName = playlistNameInput.value;
    artist = artistSearchBox.value;
    album = albumSearchBox.value;
    url = corsAnywhere + `https://api.deezer.com/search?q=artist:'${artist}'album:'${album}'`

    songFetch();

    header.innerText = `Add songs to ${playlistName}`;
    searchByAlbum.innerHTML = "Search"

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    
    seePlaylists.remove();
    main.appendChild(home)
});

let songFetch = function() {
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(results => {
        // console.log(results);
        let searchResults = []
        let res = results.data
        // console.log(res);
           
        for(let i = 0; i < res.length; i++) {
            searchResults.push(new Song(res[i].artist.name, res[i].title_short, res[i].preview))
        }
        return searchResults   
    })
    .then(searchResults => {
        let list = document.createElement("ol");
        list.setAttribute("id", "songList");
        main.appendChild(list);

        for(let i = 0; i < searchResults.length; i++) {
            albumView(searchResults[i].artist, searchResults[i].songName, searchResults[i].preview, i)
        }
        // console.log(url)
        console.log(searchResults)
    })
};