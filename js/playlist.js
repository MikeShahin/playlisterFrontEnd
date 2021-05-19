api.getAllPlaylists();

class Playlists {
    static allPlaylists = [];
    
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Playlists.allPlaylists.push(this);
    }
};

let showPlaylists = function() {
    let list = document.createElement("ol");
    main.appendChild(list);
    let data = Playlists.allPlaylists;    
    header.innerText = "All Playlists:";
    seeAllPlaylists.remove();
  
    for(let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        let link = document.createElement("button");
        link.innerText = `${data[i].name}`;
        link.setAttribute("id", (i + 1));
        li.appendChild(link);
        list.appendChild(li); 
        link.addEventListener('click', (e) => {
            header.innerText = link.innerText;
            api.showPlayist(link.id);
            removeElements(list);
        })
    }
};

const makePlaylist = document.getElementById("createPlaylist");
makePlaylist.addEventListener('click', (e) => {
    let x = document.getElementById("playlistId"); 
    removeElements(list);
    let name = header.innerText.split("to ");
    header.innerText = name[1];
    removeSearchElements();
    sidebar.classList.add("hidden");
    api.showPlayist(x.value);
});

seeAllPlaylists.addEventListener('click', (e) => {
    showPlaylists();
    removeSearchElements();
    main.appendChild(home);
    backHome();
});