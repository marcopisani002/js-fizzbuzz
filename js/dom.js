const numQuadrati = 10 * 10;
const boardContainerEl = document.querySelector(".board-container");
const squareInput = document.querySelector(".square-input")





for (let i = 1; i <= numQuadrati; i++) {

    if (i % 5 === 0 && i % 3 === 0) {

        //console.log(`${i} CIAOOOOO`);
        boardContainerEl.innerHTML += `<div class="board-square fizzbuzz-square " > 
        <div class="square-input " > FIZZBUZZ</div>
         </div>`;
    }
    else if (i % 3 === 0) {

        //console.log(`${i} FIZZ`);

        boardContainerEl.innerHTML += `<div class="board-square fizz-square  " > 
        <div class="square-input " > FIZZ </div>
         </div>`;
    }

    else if (i % 5 === 0) {

        // console.log(`${i} BUZZ`);

        boardContainerEl.innerHTML += `<div class="board-square buzz-square " > 
        <div class="square-input " >BUZZ </div>
         </div>`;
    }

    else {
        // console.log(i);

        boardContainerEl.innerHTML += `<div class="board-square square-input  no-square" > ${i} </div>`;

    }

}