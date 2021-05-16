fetch("http://localhost:3000/songs", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
      },
body: JSON.stringify({song: {
    artist: "Filth",
    songName: "Lesson",
    preview: "https://cdns-preview-7.dzcdn.net/stream/c-7338170a14d582aa32e883e6abb94c26-6.mp3",
    playlist_id: 1
}}),
})