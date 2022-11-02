const numQuadrati = 10 * 10;
const boardContainerEl = document.querySelector(".board-container");
const squareInput=document.querySelector(".square-input")





for (let i = 1; i <= numQuadrati; i++) {


    boardContainerEl.innerHTML += `<div class="board-square " > ${i} </div>`;











     let color="";
    if (i % 5 === 0 && i % 3 === 0) {
        color="bg-dark";
        //const ciaoColorEl = document.querySelector(".fizzbuzz-square");
        //console.log(`${i} CIAOOOOO`);
        boardContainerEl.innerHTML += `<div class="board-square " > 
        <div class="square-input " > CIAOOOOO </div>
         </div>`;
    }
    else if (i % 3 === 0) {
        color="bg-dark";
        //console.log(`${i} FIZZ`);
        boardContainerEl.innerHTML += `<div class="board-square " > 
        <div class="square-input " > FIZZ </div>
         </div>`;
    }

    else if (i % 5 === 0) {

       // console.log(`${i} BUZZ`);
        boardContainerEl.innerHTML += `<div class="board-square " > 
        <div class="square-input " >BUZZ </div>
         </div>`;
    }

    else {
        console.log(i);
    }

}