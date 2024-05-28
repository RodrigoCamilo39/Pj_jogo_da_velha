let play = true;
let list_play = [0];
let player1List =[];
let player2List =[];
const winCondition = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function clickButton(params) {
    const element = document.getElementById("house" + params);
    if (!list_play.includes(params)) {
        if (play) {
            element.style.backgroundImage = "url(img/X.png)";
            player1List.push(params);
            machePoint(1);
            
        } else {
            element.style.backgroundImage = "url(img/O.png)";
            player2List.push(params);
            machePoint(2);
        }
        list_play.push(params);
        play = !play;
    }
}

function winPoint(gameList) {
    for (let i = 0; i < winCondition.length; i++) {
        const list = winCondition[i];
        let cont = 0;
        for (let i = 0; i < list.length; i++) { 
            if (gameList.includes(list[i])) {
                cont += 1;
            }
        }

        if (cont == 3) {
            for (let i = 0; i < list.length; i++) {
                const element = document.getElementById("house" + list[i]);
                element.style.backgroundColor = "green";
            }
            list_play = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }   
}

function machePoint(player) {
    if (player == 1) {
        if(player1List.length >= 3) {
            console.log(player1List);
            winPoint(player1List);
        }
        if (player == 1) {
            if (player1List.length >= 3) {
                console.log(player1List);
            }
        }
    } else if (player == 2) {
        if (player2List.length >= 3){
            console.log(player2List);
            winPoint(player2List);
        }
        if (player == 2) {
            if (player2List >= 3) {
                console.log(player2List);
            }
        }
    }  
}