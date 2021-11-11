
class UIController{

    constructor(){
        this.view = 0;
        this.searchTabButton = document.getElementById('searchButton');
        this.lobbyTabButton = document.getElementById('lobbyButton');
        this.view = "ok" // 0 means it's on search view, 1 means it's on lobby page
        this.lobbyScreenHidden();
        this.searchTabButton.addEventListener("click", function(){

            var divsToShow = document.getElementsByClassName("slider"); 
            var divsToHide = document.getElementsByClassName("lobby");

            for(var i = 0; i < divsToShow.length; i++){
                divsToShow[i].style.display = "block";
            } 

            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "none";
            } 
        });

        this.lobbyTabButton.addEventListener("click", function(){

            var divsToHide = document.getElementsByClassName("slider"); 
            var divsToShow = document.getElementsByClassName("lobby");

            for(var i = 0; i < divsToHide.length; i++){
                divsToHide[i].style.display = "none";
            } 

            for(var i = 0; i < divsToShow.length; i ++){
                divsToShow[i].style.display = "inline-block"

            }




        });
    }
    
    lobbyScreenHidden(){
        var divsToHide =  document.getElementsByClassName("lobby");
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        } 

    }


}

class lobby{

    constructor(address, sport, gamemode, current_players, x, y){

        this.address = address;
        this.sport = sport;
        this.x = x;
        this.y = y;
        this.player_limit = 10;
        this.current_players = 0

    }

    player_limit(){
        switch(this.sport){
            case "basketball":
                switch(this.gamemode){
                    case "3v3":
                        this.player_limit = 6;
                    case "kof":
                        this.player_limit = 10;

                    case "5v5":
                        this.player_limit = 10;
                }
            
            case "soccer":
                switch(this.gamemode){
                    case "5v5":
                        this.player_limit = 10;
                    case "7v7":
                        this.player_limit = 14;
                    case "11v11":
                        this.player_limit = 22;
                    case "penalty kicks":
                        this.player_limit = 25; 
                }
            
            case "tennis":
                switch(this.gamemode){
                    case "1v1":
                        this.player_limit = 2;
                    case "2v2":
                        this.player_limit = 4;
                }
        }
    }

    lobby_joined(){

        if (this.current_players == this.player_limit){
            alert("Sorry, this game is full. You can still go there and wait in queue!")
            return
        }

        this.current_players += 1;
    }

    lobby_left(){

        this.current_players -= 1;
    }


}

function initializeLobbies(){
    var lobbyList = []

    for (i = 0; i < 10; i ++){
        var lob = new lobby("1", "2","3","4"); 
        lobbyList.push(lob);
    }

    console.log(lobbyList[0].x);
}

function lobbyManager(){
    
    //HERE IMPLEMENT A SEARCH FOR SPECIFIC MATCHES AND GAMEMODES AND WHAT NOT
    /*
    var child = document.createElement('p');
    var text = document.createTextNode("TESTING STUFF OUT REALLY QUICKLy")
    child.appendChild(text);
    overlay = document.getElementById("Overlay");
    overlay.style.overflow = scroll;
    overlay.appendChild(child);
    child.style.display = none;
    overlay.appendChild(child)
    */

}

function initializeMap(){
	var map = L.map('map', {
	    center: [45.4231 , -75.6831],
	    zoom: 15
	    ,minZoom: 14
	    ,maxZoom: 15
	});

	L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=O3pyJcEeLGNOsjDEVBeQ', {
	attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
	}).addTo(map);
}




function main(){
    
    let UI = new UIController();
    initializeMap();
    initializeLobbies();
    lobbyManager();

}