const seeAllPlaylists = document.getElementById("seePlaylists");
const api = new BackendApi
api.getAllPlaylists();

class Playlists {
    static allPlaylists = [];

    constructor(id, name) {
        this.id = id;
        this.name = name;
        Playlists.allPlaylists.push(this);
    }
}

let showPlaylists = function() {
    let data = Playlists.allPlaylists;    
    header.innerText = "All Playlists:"
    seeAllPlaylists.remove();
    let list = document.createElement("ol");
    main.appendChild(list);
  
    for(let i = 0; i < data.length; i++) {
        console.log(data[i].name)
        let li = document.createElement("li");
        let link = document.createElement("button");
        link.innerText = `${data[i].name}`;
        link.setAttribute("id", (i + 1));
        li.appendChild(link);
        list.appendChild(li);
        
        link.addEventListener('click', (e) => {
            header.innerText = link.innerText;
            api.showPlayist(link)
            while(list.firstChild){
                list.removeChild(list.firstChild);
            }
        })
    }
};

seeAllPlaylists.addEventListener('click', (e) => {
    showPlaylists()
    searchForm.remove();
    main.appendChild(home)
    backHome();
})