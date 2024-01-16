function Fruit() {
    return new Promise((resolve, reject) => {
        const rooks = document.querySelectorAll(".rook");
        const imageUrl = chrome.runtime.getURL('fruitChess/citrouille.png');
        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageUrl}')`;
            rook.style.backgroundSize = "cover"; // Add background-size: cover
        });
        rooksW = document.querySelectorAll(".rook.white");
        rooksW.forEach(rookw => {
            rookw.style.filter = "invert(100%)";
            rookw.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const pawns = document.querySelectorAll(".pawn");
        const imageUrl1 = chrome.runtime.getURL('fruitChess/brocoli.png');
        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imageUrl1}')`;
            pawn.style.backgroundSize = "cover"; // Add background-size: cover
        });
        pawnsW = document.querySelectorAll(".pawn.white");
        pawnsW.forEach(pawnw => {
            pawnw.style.filter = "invert(100%)";
            pawnw.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const bishops = document.querySelectorAll(".bishop");
        const imageUrl2 = chrome.runtime.getURL('fruitChess/carottes.png');
        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageUrl2}')`;
            bishop.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const bishopsW = document.querySelectorAll(".bishop.white");
        bishopsW.forEach(bishopW => {
            bishopW.style.filter = "invert(100%)";
            bishopW.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const knights = document.querySelectorAll(".knight");
        const imageUrl3 = chrome.runtime.getURL('fruitChess/banane.png');
        knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageUrl3}')`;
            knight.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const knightsW = document.querySelectorAll(".knight.white");
        knightsW.forEach(knightW => {
            knightW.style.filter = "invert(100%)";
            knightW.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const kings = document.querySelectorAll(".king");
        const imageUrl4 = chrome.runtime.getURL('fruitChess/pomme.png');
        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageUrl4}')`;
            king.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const kingsW = document.querySelectorAll(".king.white");
        kingsW.forEach(kingW => {
            kingW.style.filter = "invert(100%)";
            kingW.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const queens = document.querySelectorAll(".queen");
        const imageUrl5 = chrome.runtime.getURL('fruitChess/poire.png');
        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageUrl5}')`;
            queen.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const queensW = document.querySelectorAll(".queen.white");
        queensW.forEach(queenW => {
            queenW.style.filter = "invert(100%)";
            queenW.style.backgroundSize = "cover"; // Add background-size: cover
        });

        resolve();
    });
}

// Fruit();



















function Human() {
    return new Promise((resolve, reject) => {
        const rooks = document.querySelectorAll(".rook");
        const imageHB0 = chrome.runtime.getURL('humanChess/blackrook.jpg');
        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageHB0}')`;
            rook.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const imageHW0 = chrome.runtime.getURL('humanChess/whiterook.jpg');
        rooksW = document.querySelectorAll(".rook.white");
        rooksW.forEach(rookw => {
            rookw.style.backgroundImage = `url('${imageHW0}')`;
            rookw.style.backgroundSize = "cover"; // Add background-size: cover
            rookw.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        const pawns = document.querySelectorAll(".pawn");
        const imageHB1 = chrome.runtime.getURL('humanChess/blackpawn.jpeg');
        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imageHB1}')`;
            pawn.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const imageHW1 = chrome.runtime.getURL('humanChess/whitepawn.jpg');
        pawnsW = document.querySelectorAll(".pawn.white");
        pawnsW.forEach(pawnw => {
            pawnw.style.backgroundImage = `url('${imageHW1}')`;
            pawnw.style.backgroundSize = "cover"; // Add background-size: cover
            pawnw.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        const bishops = document.querySelectorAll(".bishop");
        const imageHB3 = chrome.runtime.getURL('humanChess/blackbishop.jpg');
        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageHB3}')`;
            bishop.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const imageHW3 = chrome.runtime.getURL('humanChess/whitebishop.jpg');
        const bishopsW = document.querySelectorAll(".bishop.white");
        bishopsW.forEach(bishopW => {
            bishopW.style.backgroundImage = `url('${imageHW3}')`;
            bishopW.style.backgroundSize = "cover"; // Add background-size: cover
            bishopW.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        const knights = document.querySelectorAll(".knight");
        const imageHB4 = chrome.runtime.getURL('humanChess/blacknight.jpg');
        knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageHB4}')`;
            knight.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const knightsW = document.querySelectorAll(".knight.white");
        knightsW.forEach(knightW => {
            const imageHW4 = chrome.runtime.getURL('humanChess/whiteknight.jpg');
            knightW.style.backgroundImage = `url('${imageHW4}')`;
            knightW.style.backgroundSize = "cover"; 
            knightW.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        const kings = document.querySelectorAll(".king");
        const imageHB5 = chrome.runtime.getURL('humanChess/blacking.jpg');
        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageHB5}')`;
            king.style.backgroundSize = "cover"; // Add background-size: cover
            
        });
        const imageHW5 = chrome.runtime.getURL('humanChess/whiteking.webp');
        const kingsW = document.querySelectorAll(".king.white");
        kingsW.forEach(kingW => {
            kingW.style.backgroundImage = `url('${imageHW5}')`;
            kingW.style.backgroundSize = "cover"; // Add background-size: cover
            kingW.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        const queens = document.querySelectorAll(".queen");
        const imageHB6 = chrome.runtime.getURL('humanChess/blackqueen.jpg');
        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageHB6}')`;
            queen.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const queensW = document.querySelectorAll(".queen.white");
        const imageHW6 = chrome.runtime.getURL('humanChess/whitequeen.jpg');
        queensW.forEach(queenW => {
            queenW.style.backgroundImage = `url('${imageHW6}')`;
            queenW.style.backgroundSize = "cover"; // Add background-size: cover
            queenW.style.filter = "invert(0%)"; // Add filter: invert(0%)
        });

        resolve();
    });
}

// Human();








function Grece() {


    return new Promise((resolve, reject) => {

        //Grece images : 
        const imageKB0 = chrome.runtime.getURL('greceChess/final/rook.png');
   
        
        const imageKB1 = chrome.runtime.getURL('greceChess/final/pawn.png');
     

        const imageKB3 = chrome.runtime.getURL('greceChess/final/bishop.png');
     

        const imageKB4 = chrome.runtime.getURL('greceChess/final/knight.png');
      

        const imageKB5 = chrome.runtime.getURL('greceChess/final/king.png');
       

        const imageKB6 = chrome.runtime.getURL('greceChess/final/queen.png');
       




        const rooks = document.querySelectorAll(".rook");
        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageKB0}')`;
            rook.style.backgroundSize = "cover"; // Add background-size: cover
        });
        rooksW = document.querySelectorAll(".rook.white");
        rooksW.forEach(rookw => {
            rookw.style.backgroundImage = `url('${imageKB0}')`;
            rookw.style.backgroundSize = "cover"; // Add background-size: cover
            rookw.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        const pawns = document.querySelectorAll(".pawn");
        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imageKB1}')`;
            pawn.style.backgroundSize = "cover"; // Add background-size: cover
        });
        
        pawnsW = document.querySelectorAll(".pawn.white");
        pawnsW.forEach(pawnw => {
            pawnw.style.backgroundImage = `url('${imageKB1}')`;
            pawnw.style.backgroundSize = "cover"; // Add background-size: cover
            pawnw.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        const bishops = document.querySelectorAll(".bishop");

        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageKB3}')`;
            bishop.style.backgroundSize = "cover"; // Add background-size: cover
        });
     
        const bishopsW = document.querySelectorAll(".bishop.white");
        bishopsW.forEach(bishopW => {
            bishopW.style.backgroundImage = `url('${imageKB3}')`;
            bishopW.style.backgroundSize = "cover"; // Add background-size: cover
            bishopW.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        const knights = document.querySelectorAll(".knight");
        
        knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageKB4}')`;
            knight.style.backgroundSize = "cover"; // Add background-size: cover
        });
        const knightsW = document.querySelectorAll(".knight.white");
        knightsW.forEach(knightW => {
           
            knightW.style.backgroundImage = `url('${imageKB4}')`;
            knightW.style.backgroundSize = "cover"; 
            knightW.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        const kings = document.querySelectorAll(".king");
     
        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageKB5}')`;
            king.style.backgroundSize = "cover"; // Add background-size: cover
            
        });
       
        const kingsW = document.querySelectorAll(".king.white");
        kingsW.forEach(kingW => {
            kingW.style.backgroundImage = `url('${imageKB5}')`;
            kingW.style.backgroundSize = "cover"; // Add background-size: cover
            kingW.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        const queens = document.querySelectorAll(".queen");
       
        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageKB6}')`;
            queen.style.backgroundSize = "cover"; // Add background-size: cover
        });

        const queensW = document.querySelectorAll(".queen.white");

        queensW.forEach(queenW => {
            queenW.style.backgroundImage = `url('${imageKB6}')`;
            queenW.style.backgroundSize = "cover"; // Add background-size: cover
            queenW.style.filter = "invert(100%)"; // Add filter: invert(0%)
        });

        resolve();
    });
}

function Medieval(){

        return new Promise((resolve, reject) => {

            //Grece images : 
            const imageM0 = chrome.runtime.getURL('medievalChess/rook.png');
            const imageM1 = chrome.runtime.getURL('medievalChess/pawn.png');
            const imageM2 = chrome.runtime.getURL('medievalChess/bishop.png');
            const imageM3 = chrome.runtime.getURL('medievalChess/knight.png');
            const imageM4 = chrome.runtime.getURL('medievalChess/king.png');
            const imageM5 = chrome.runtime.getURL('medievalChess/queen.png');
           
    
    
    
    
            const rooks = document.querySelectorAll(".rook");
            rooks.forEach(rook => {
                rook.style.backgroundImage = `url('${imageM0}')`;
                rook.style.backgroundSize = "cover"; // Add background-size: cover
            });
            rooksW = document.querySelectorAll(".rook.white");
            rooksW.forEach(rookw => {
                rookw.style.backgroundImage = `url('${imageM0}')`;
                rookw.style.backgroundSize = "cover"; // Add background-size: cover
                rookw.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            const pawns = document.querySelectorAll(".pawn");
            pawns.forEach(pawn => {
                pawn.style.backgroundImage = `url('${imageM1}')`;
                pawn.style.backgroundSize = "cover"; // Add background-size: cover
            });
            
            pawnsW = document.querySelectorAll(".pawn.white");
            pawnsW.forEach(pawnw => {
                pawnw.style.backgroundImage = `url('${imageM1}')`;
                pawnw.style.backgroundSize = "cover"; // Add background-size: cover
                pawnw.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            const bishops = document.querySelectorAll(".bishop");
    
            bishops.forEach(bishop => {
                bishop.style.backgroundImage = `url('${imageM2}')`;
                bishop.style.backgroundSize = "cover"; // Add background-size: cover
            });
         
            const bishopsW = document.querySelectorAll(".bishop.white");
            bishopsW.forEach(bishopW => {
                bishopW.style.backgroundImage = `url('${imageM2}')`;
                bishopW.style.backgroundSize = "cover"; // Add background-size: cover
                bishopW.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            const knights = document.querySelectorAll(".knight");
            
            knights.forEach(knight => {
                knight.style.backgroundImage = `url('${imageM3}')`;
                knight.style.backgroundSize = "cover"; // Add background-size: cover
            });
            const knightsW = document.querySelectorAll(".knight.white");
            knightsW.forEach(knightW => {
               
                knightW.style.backgroundImage = `url('${imageM3}')`;
                knightW.style.backgroundSize = "cover"; 
                knightW.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            const kings = document.querySelectorAll(".king");
         
            kings.forEach(king => {
                king.style.backgroundImage = `url('${imageM4}')`;
                king.style.backgroundSize = "cover"; // Add background-size: cover
                
            });
           
            const kingsW = document.querySelectorAll(".king.white");
            kingsW.forEach(kingW => {
                kingW.style.backgroundImage = `url('${imageM4}')`;
                kingW.style.backgroundSize = "cover"; // Add background-size: cover
                kingW.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            const queens = document.querySelectorAll(".queen");
           
            queens.forEach(queen => {
                queen.style.backgroundImage = `url('${imageM5}')`;
                queen.style.backgroundSize = "cover"; // Add background-size: cover
            });
    
            const queensW = document.querySelectorAll(".queen.white");
    
            queensW.forEach(queenW => {
                queenW.style.backgroundImage = `url('${imageM5}')`;
                queenW.style.backgroundSize = "cover"; // Add background-size: cover
                queenW.style.filter = "invert(100%)"; // Add filter: invert(0%)
            });
    
            resolve();
        });
    }
function Custom(){
    
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  
    
    if (request.action === "modFruit") { // Corrected from "modHuman"
        Fruit();
    }
    if (request.action === "modRacist") { // Corrected from "modHuman"
        Human();
    }
    if (request.action === "modGrece") { // Corrected from "modHuman"
        Grece();
    }
    if (request.action === "modMedieval") { // Corrected from "modHuman"
       Medieval();
    }
    if (request.action === "modCustom") { // Corrected from "modHuman"
       console.log("caca")
    }
    
});
