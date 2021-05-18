class BackendApi {
    constructor() {
        this.baseUrl = "http://localhost:3000";
        this.playlistsUrl = this.baseUrl + "/playlists";
        // this.playlistsShowUrl = this.baseUrl + `/playlists/${link.id}`;
        this.songsUrl = this.baseUrl + "http://localhost:3000/songs"
    }

    getAllPlaylists() {
        return fetch(this.baseUrl + "/playlists")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            for(let i = 0; i < data.length; i ++) {
                new Playlists(data[i].id, data[i].name)
            }
        })
    }

    createPlaylist(playlistsName) {
        fetch(this.baseUrl + "/playlists", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                playlist: {
                name: playlistsName
            }}),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            // console.log(data.playlist.id)
            let id = document.createElement("input");
            id.setAttribute("type", "hidden");
            id.setAttribute("id", "playlistId")
            id.setAttribute("value", data.playlist.id);
            main.appendChild(id)
        })
    };

    addSongsToPlaylist(artistName, songTitle, songPreview, playlistId) {
        fetch("http://localhost:3000/songs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({song: {
                artist: artistName,
                songName: songTitle,
                preview: songPreview,
                playlist_id: playlistId
            }}),
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log("success added")
        })
        .catch(error => {
            console.log(error)
        })
    }
}