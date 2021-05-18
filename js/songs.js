const makePlaylist = document.getElementById("createPlaylist");
makePlaylist.addEventListener('click', (e) => {
    console.log('hit')
    // createPlaylist(playlistName);
    let x = document.getElementById("playlistId");

    for (let i = 0; i < allPlaylistSongs.length; i++) {
        api.addSongsToPlaylist(allPlaylistSongs[i].artist, allPlaylistSongs[i].songName, allPlaylistSongs[i].preview, x.value);
        }
        // location.reload()
    
});
