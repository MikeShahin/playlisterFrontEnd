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

// let seeSinglePlaylist = function(id) {
//     fetch(`http://localhost:3000/playlists/${id}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
// }

let showPlaylists = function() {
    fetch("http://localhost:3000/playlists") 
    .then(res => res.json())
    .then(data => {
        header.innerText = "All Playlists:"
        console.log(data[data.length - 1]);
        seeAllPlaylists.remove();
        let list = document.createElement("ol");
        main.appendChild(list);
        for(let i = 0; i < data.length; i++) {
            let li = document.createElement("li");
            let link = document.createElement("button");
            link.innerText = `${data[i].name}`;
            link.setAttribute("id", (i + 1));
            li.appendChild(link);
            list.appendChild(li);

            link.addEventListener('click', (e) => {
                header.innerText = link.innerText;
                fetch(`http://localhost:3000/playlists/${link.id}`) 
                .then(res => res.json())
                .then(songs => {
                    for(let i = 0; i < songs.length; i++) {
                        albumView(songs[i].artist, songs[i].songName, songs[i].preview, i);
                    }
                })
                while(list.firstChild){
                    list.removeChild(list.firstChild);
                }
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
};