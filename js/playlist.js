api.getAllPlaylists();
const playlistSearchForm = document.createElement("form");
const plSearchButton = document.createElement("button");
const plSearchBar = document.createElement("input");

class Playlists {
    static allPlaylists = [];
    
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Playlists.allPlaylists.push(this);
    }
};

let searchPl = function() {
    let input = document.getElementById("plSearch");
    let search = input.value.toLowerCase();
    let ul = document.querySelector(".playlists");
    let li = ul.getElementsByTagName('li');
    let a;
    let i;
    let txtValue;

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(search) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
}

let playlistSearch = function() {
    playlistSearchForm.setAttribute("id", "playlistSearch");
    plSearchBar.setAttribute("type", "search");
    plSearchBar.setAttribute("placeholder", "search playlists");
    plSearchBar.setAttribute("id", "plSearch")
    plSearchButton.innerText = "search";
    plSearchButton.setAttribute("id", "playlistSearchSubmit");
    playlistSearchForm.appendChild(plSearchBar);
    playlistSearchForm.appendChild(plSearchButton);
    main.prepend(playlistSearchForm);

    plSearchButton.addEventListener("click", (e) => {
        e.preventDefault();
        searchPl();
        console.log("hit")
    })
};

let showPlaylists = function() {
    let list = document.createElement("ol");
    let data = Playlists.allPlaylists;    
    main.appendChild(list);
    header.innerText = "All Playlists:";
    seeAllPlaylists.remove();
    playlistSearch();
  
    for(let i = 0; i < data.length; i++) {
        let li = document.createElement("li");
        let link = document.createElement("a");
        list.classList.add("playlists")
        link.innerText = `${data[i].name}`;
        link.setAttribute("id", (i + 1));
        li.appendChild(link);
        list.appendChild(li); 
        link.addEventListener('click', (e) => {
            e.preventDefault();
            header.innerText = link.innerText;
            playlistSearchForm.remove();
            plSearchButton.remove();
            plSearchBar.remove();
            main.prepend(seeAllPlaylists);
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
    let list = document.getElementById("songList");
    removeSearchElements();
    removeElements(list);
    showPlaylists();
    main.appendChild(home);
    backHome();
});
