
class UIController{

    constructor(){
        this.view = 0;
        this.searchTabButton = document.getElementById('searchButton');
        this.lobbyTabButton = document.getElementById('lobbyButton');
        this.view = "ok" // 0 means it's on search view, 1 means it's on lobby page
        this.lobbyScreenHidden();
        this.searchTabButton.addEventListener("click", function(){
        this.selectedSport = "basketball"; //default value ig

            var toShow = [];
            toShow.push(document.getElementsByClassName("slider"))
            toShow.push(document.getElementsByClassName("modifierText"));
            toShow.push(document.getElementsByClassName("selectionText"))

            var toHide = [];
            toHide.push(document.getElementsByClassName("lobby")) 

            for(var i = 0; i < toShow.length; i++){
                for (var j = 0; j < toShow[i].length; j++){
                    toShow[i][j].style.display = "block";
                }
            } 

            for(var i = 0; i < toHide.length; i++){
                for (var j = 0; j < toHide[i].length; j++){
                    toHide[i][j].style.display = "none";

                }
            } 
        });

        this.lobbyTabButton.addEventListener("click", function(){

            var toHide = [];
            toHide.push(document.getElementsByClassName("slider"))
            toHide.push(document.getElementsByClassName("modifierText"));
            toHide.push(document.getElementsByClassName("selectionText"))

            var toShow = [];
            toShow.push(document.getElementsByClassName("lobby")) 

            var test =document.getElementsByClassName("modifierText");

            for(var i = 0; i < toShow.length; i++){
                for (var j =0; j < toShow[i].length; j++){
                    toShow[i][j].style.display = "block";
                }
            } 

            for(var i = 0; i < toHide.length; i++){
                for (var j = 0; j < toHide[i].length; j++){
                    toHide[i][j].style.display = "none";

                }
            } 
            




        });
    }
    
    lobbyScreenHidden(){
        var divsToHide =  document.getElementsByClassName("lobby");
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].style.display = "none";
        } 

    }

    editSportValue(){

        var sportSlider = document.getElementById("sportSlider");
        var sportText = document.getElementById("sportText");
        var gamemodeSlider = document.getElementById("gamemodeSlider");
        var gamemodeText = document.getElementById("gamemodeText");
        const event = new Event('change');


        sportSlider.addEventListener("click", function(){

            if (sportSlider.value == 7){
                sportText.innerHTML = "tennis";
            }else if(sportSlider.value == 1){
                sportText.innerHTML = "soccer";

            }else if(sportSlider.value == 2){
                sportText.innerHTML = "basketball";
            }else if(sportSlider.value == 3){

                sportText.innerHTML = "volleyball";
            }else if(sportSlider.value == 4){
                sportText.innerHTML = "field hockey";
            }else if(sportSlider.value == 5){
                sportText.innerHTML = "baseball";
            }else if(sportSlider.value == 6){
                sportText.innerHTML = "football";
            }

        });


        sportSlider.addEventListener('change', function(e){

            if(sportSlider.value == 1){
                //soccer
                gamemodeSlider.max = 4;
            }else if(sportSlider.value == 2){
                //basketball
                gamemodeSlider.max = 4;
            }else if(sportSlider.value == 3){
                //volleyabll
                gamemodeSlider.max = 2; 
            }else if(sportSlider.value == 4){
                //field hockey
                gamemodeSlider.max = 2;
            }else if(sportSlider.value == 5){
                //baseball
                gamemodeSlider.max = 3;
            }else if(sportSlider.value == 6){
                //football
                gamemodeSlider.max = 4;

            }else if (sportSlider.value == 7){
                //tennis
                gamemodeSlider.max = 2;
            }
            if(gamemodeSlider.max > 2){
                gamemodeSlider.value = 2; 
            }else{

                gamemodeSlider.value = 1;
            }

        });

        gamemodeSlider.addEventListener("click", function(){

            
            if(sportSlider.value == 1){
                //soccer
                //gamemodeSlider.max = 4;

                if(gamemodeSlider.value == 1){
                    gamemodeText.innerHTML = "11v11"
                }else if(gamemodeSlider.value == 2){
                    gamemodeText.innerHTML = "7v7"
                }else if(gamemodeSlider.value == 3){
                    gamemodeText.innerHTML="5v5"
                }else if(gamemodeSlider.value == 4){
                    gamemodeText.innerHTML = "penalties"
                }

            }else if(sportSlider.value == 2){
                //basketball
                //gamemodeSlider.max = 4;
            }else if(sportSlider.value == 3){
                //volleyabll
                //gamemodeSlider.max = 2; 
            }else if(sportSlider.value == 4){
                //field hockey
                //gamemodeSlider.max = 2;
            }else if(sportSlider.value == 5){
                //baseball
                //gamemodeSlider.max = 3;
            }else if(sportSlider.value == 6){
                //football
                //gamemodeSlider.max = 4;
             } else if (sportSlider.value == 7){
                    //tennis
                    //gamemodeSlider.max = 2;
    

            }

        });

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
    overlay = document.getElementById("lobbyScreen");
    overlay.style.overflow = scroll;
    child.style.display = "block";
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
    UI.editSportValue();
    initializeMap();
    initializeLobbies();
    lobbyManager();


}