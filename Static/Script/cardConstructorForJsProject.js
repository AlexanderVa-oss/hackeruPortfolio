class CardForJsProject {
    gameSRC;
    gameImage;
    gameName;
    gameDescription;
    gameClickToPlay;
    constructor(gameSRC,gameImage, gameName, gameDescription, gameClickToPlay) {
        this.gameSRC = gameSRC;
        this.gameImage = gameImage || 'url(https://cdn.leonardo.ai/users/174b9e54-f96e-4369-950f-7eaad8384fa9/generations/1834c86c-83c8-4d2a-99c7-427aabbcbab1/Leonardo_Diffusion_XL_green_snake_skin_0.jpg)';
        this.gameName = gameName;
        this.gameDescription = gameDescription;
        this.gameClickToPlay = gameClickToPlay || `Click To Play`;
    }
    get fullCardForJsProject() {
        return (
            `<div class="cardJs" onclick="document.location='${this.gameSRC}';">
                <div class="jsCardFront" style="background-image: ${this.gameImage};">
                    <div class="gameName">${this.gameName}</div>
                    <div class="descriptionProject">${this.gameDescription}</div>
                </div>
                <div class="jsCardBack">${this.gameClickToPlay}</div>
            </div>`)
    }
}

let c1 = new CardForJsProject('javaScriotProjects/xo/xo.html','', 'Tic-Tack-Toe', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c2 = new CardForJsProject('javaScriotProjects/memoryCard/memoryCard.html', '', 'Memory Game', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c3 = new CardForJsProject('javaScriotProjects/Snake/snake.html','', 'Snake', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c4 = new CardForJsProject('javaScriotProjects/flipyBird/flappyBird.html', '', 'Flappy Bird', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c5 = new CardForJsProject('javaScriotProjects/countriesFin/countriesFin.html', '', 'Countries', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c6 = new CardForJsProject('javaScriotProjects/myAcount/myAcount.html', '', 'My Acount', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');
let c7 = new CardForJsProject('javaScriotProjects/ToDoList1/ToDoList1.html', '', 'To Do List', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!'); 
let c8 = new CardForJsProject('javaScriotProjects/simpleToDoList.html', '', 'Simple of ToDo list', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!'); 
let c9 = new CardForJsProject('javaScriotProjects/Kosynka/1.html', '', 'Soliter', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, assumenda!');

document.querySelector('.jsCardWrap').innerHTML += c1.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c2.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c3.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c4.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c5.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c6.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c7.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c8.fullCardForJsProject
document.querySelector('.jsCardWrap').innerHTML += c9.fullCardForJsProject