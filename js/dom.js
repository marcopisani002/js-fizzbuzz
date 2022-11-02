const numQuadrati = 10 * 10;
const boardContainerEl = document.querySelector(".board-container");






for (let i = 1; i <= numQuadrati; i++) {


    boardContainerEl.innerHTML += `<div class="board-square " > ${i} </div>`;











     let color="";
    if (i % 5 === 0 && i % 3 === 0) {

        console.log(`${i} CIAOOOOO`);

    }
    else if (i % 3 === 0) {
        color="bg-warning";
        console.log(`${i} FIZZ`);

    }

    else if (i % 5 === 0) {

        console.log(`${i} BUZZ`);

    }

    else {
        console.log(i);
    }

}