fetch("http://localhost:3000/playlists", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
      },
body: JSON.stringify({song: {
    name: "FiPLAYLIST TEST",
}}),
})