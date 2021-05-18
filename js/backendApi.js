class BackendApi {
    constructor() {
        this.baseUrl = "http://localhost:3000";
        this.playlistsUrl = this.baseUrl + "/playlists";
        this.songsUrl = this.baseUrl + "/songs"
    }

    getAllPlaylists() {
        return fetch(this.playlistsUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            for(let i = 0; i < data.length; i ++) {
                new Playlists(data[i].id, data[i].name)
            }
        })
    }

    showPlayist(link) {
        fetch(this.playlistsUrl + `/${link.id}`) 
            .then(res => res.json())
            .then(songs => {
                for(let i = 0; i < songs.length; i++) {
                    albumView(songs[i].artist, songs[i].songName, songs[i].preview, i);
                }
            })
    }

    createPlaylist(playlistsName) {
        fetch(this.playlistsUrl, {
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
        fetch(this.songsUrl, {
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