const numQuadrati= 10 * 10;
const boardContainerEl =document.querySelector("board-container");






for (let i = 0; i < numQuadrati; i++) {
    

   //boardContainerEl.innerHTML += `<div class="board-square " > ${i} </div>`;
  
  
  
  
  
  
  
  
  
  
   
     // let color="";
    
    if (i % 3 === 0) {
        //color="bg-warning";
        console.log(`${i} FIZZ`);

    } 
    if (i % 5 === 0) {

        console.log(`${i} BUZZ`);

    } 
     if ((i % 5 === 0) && (i % 3 === 0)) {

        console.log(`${i} CIAOOOOO`);

    }

}