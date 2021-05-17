let createSong = function(artistName, songTitle, songPreview, playlistId) {
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
};

makePlaylist.addEventListener('click', (e) => {
    if (playlistName !== "") {
        createPlaylist(playlistName);

        for (let i = 0; i < allPlaylistSongs.length; i++) {
            createSong(allPlaylistSongs[i].artist, allPlaylistSongs[i].songName, allPlaylistSongs[i].preview, 
                fetch("http://localhost:3000/playlists") 
                .then(res => res.json())
                .then(data => {
                    return data[data.length - 1].id
                }))
            }
            showPlaylists()
    }
});