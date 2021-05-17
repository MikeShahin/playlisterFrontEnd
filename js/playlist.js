//get all playlists:
const seeAllPlaylists = document.getElementById("seePlaylists");
const makePlaylist = document.getElementById("createPlaylist")

let getSongs = function() {
    fetch("http://localhost:3000/songs") 
    .then(res => res.json())
    .then(songs => {
        // console.log(songs[`link.id`])
        // console.log(songs[0].artist)
    })
}

let showPlaylists = function() {
    fetch("http://localhost:3000/playlists") 
    .then(res => res.json())
    .then(data => {
        header.innerText = "All Playlists:"
        console.log(data);
        seeAllPlaylists.remove();
        let list = document.createElement("ol");
        main.appendChild(list);
        for(let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            let link = document.createElement("button");
            link.innerText = `${data[i].name}`;
            link.setAttribute("id", i);
            li.appendChild(link);
            list.appendChild(li);

            link.addEventListener('click', (e) => {
                fetch("http://localhost:3000/songs") 
                .then(res => res.json())
                .then(songs => {
                    console.log(songs.filter((song) => song.playlist_id === link.id))
                    // console.log(songs[0].artist)
                })
                // console.log(link.id)
            })
        }
    })
};

seeAllPlaylists.addEventListener('click', (e) => {
    
    console.log("working")
    showPlaylists()
    searchForm.remove();
    main.appendChild(home)
    backHome();
})



//create playlists



let createPlaylist = function(playlistsName) {
    fetch("http://localhost:3000/playlists", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            playlist: {
            name: playlistsName
        }}),
    })
}

makePlaylist.addEventListener('click', (e) => {
    if (playlistName !== "") {
        createPlaylist(playlistName);
    }
})