let play = true;
let list_play = [0];
let red_list = [];
let player1List =[];
let blue_list = [];
let player2List =[];
const winCondition = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function clickButton(params) {
    const element = document.getElementById("house" + params);
    if (!list_play.includes(params)) {
        if (play) {
            element.style.backgroundImage = "url(img/X.png)";
            red_list.push(params);
            machePoint("red");
        } else {
            element.style.backgroundImage = "url(img/O.png)";
            blue_list.push(params);
            machePoint("blue");
        }
        list_play.push(params);
        play = !play;
    }
}

function machePoint(player) {
    if (player == "blue") {
        if(blue_list.length >= 3) {
            console.log(blue_list);
        }
        if (player == 1) {
            if (player1List.length >= 3) {
                console.log(player1List);
            }
        }
    } else if (player == "Red") {
        if (red_list.length >= 3){
            console.log(red_list);
        }
        if (player == 1) {
            if (player2List >= 3) {
                console.log(player2List);
            }
        }
    }  

    for (let i = 0; i < winCondition.length; i++) {
        const list = winCondition[i];
        let cont = 0;
        for (let i = 0; i < list.length; i++) { 
            if (red_list.includes(list[i])) {
                cont += 1;
            }
        }

        if (cont == 3) {
            for (let i = 0; i < list.length; i++) {
                const element = document.getElementById("house" + list[i]);
                element.style.backgroundColor = "green";
                list_play = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            }
        }
    }   
    
}