//define differents variables for each pieces

const rooks = document.querySelectorAll(".rook");
const rooksW = document.querySelectorAll(".rook.white");
const rooksB = document.querySelectorAll(".rook.black");

const pawns = document.querySelectorAll(".pawn");
const pawnsW = document.querySelectorAll(".pawn.white");
const pawnsB = document.querySelectorAll(".pawn.black");

const bishops = document.querySelectorAll(".bishop");
const bishopsW = document.querySelectorAll(".bishop.white");
const bishopsB = document.querySelectorAll(".bishop.black");

const knights = document.querySelectorAll(".knight");
const knightsW = document.querySelectorAll(".knight.white");
  const knightsB = document.querySelectorAll(".knight.black");

const kings = document.querySelectorAll(".king");
const kingsW = document.querySelectorAll(".king.white");
const kingsB = document.querySelectorAll(".king.black");

const queens = document.querySelectorAll(".queen");
const queensW = document.querySelectorAll(".queen.white");
const queensB = document.querySelectorAll(".queen.black");


    
    

  
    


//first mod : Fruit 
function modFruit() {
    return new Promise((resolve, reject) => {
        //getting the url for each image :
        const imageRook = chrome.runtime.getURL('medias/fruitChess/citrouille.png');
        const imagePawn = chrome.runtime.getURL('medias/fruitChess/brocoli.png');
        const imageBishop = chrome.runtime.getURL('medias/fruitChess/carottes.png');
        const imageKnight = chrome.runtime.getURL('medias/fruitChess/banane.png');
        const imageKing = chrome.runtime.getURL('medias/fruitChess/pomme.png');
        const imageQueen = chrome.runtime.getURL('medias/fruitChess/poire.png');

        //Insertion of images


        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageRook}')`;
            rook.style.backgroundSize = "cover"; 
            rook.style.filter = "invert(0%)";
        });
        
        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imagePawn}')`;
            pawn.style.backgroundSize = "cover"; 
            pawn.style.filter = "invert(0%)";
        });
        
        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageBishop}')`;
            bishop.style.backgroundSize = "cover";
            bishop.style.filter = "invert(0%)"; 
        });
        
         knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageKnight}')`;
            knight.style.backgroundSize = "cover"; 
            knight.style.filter = "invert(0%)";
        });
        
        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageKing}')`;
            king.style.backgroundSize = "cover"; 
            king.style.filter = "invert(0%)";
        });

        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageQueen}')`;
            queen.style.backgroundSize = "cover"; 
            queen.style.filter = "invert(0%)";
        });

        //inverting color for Black pieces

        rooksW.forEach(rookw => {
            rookw.style.filter = "invert(100%)";
            rookw.style.backgroundSize = "cover"; 
        });

        pawnsW.forEach(pawnw => {
            pawnw.style.filter = "invert(100%)";
            pawnw.style.backgroundSize = "cover"; 
        });

        bishopsW.forEach(bishopW => {
            bishopW.style.filter = "invert(100%)";
            bishopW.style.backgroundSize = "cover"; 
        });

        knightsW.forEach(knightW => {
            knightW.style.filter = "invert(100%)";
            knightW.style.backgroundSize = "cover"; 
        });

        kingsW.forEach(kingW => {
            kingW.style.filter = "invert(100%)";
            kingW.style.backgroundSize = "cover"; 
        });
    
        queensW.forEach(queenW => {
            queenW.style.filter = "invert(100%)";
            queenW.style.backgroundSize = "cover"; 
        });

        resolve();
    });
}


//Hidden mod : Human
function modHuman() {
    return new Promise((resolve, reject) => {
     
        const imageBlackRook = chrome.runtime.getURL('medias/humanChess/blackrook.jpg');
        const imageBlackPawn = chrome.runtime.getURL('medias/humanChess/blackpawn.jpeg');
        const imageBlackBishop = chrome.runtime.getURL('medias/humanChess/blackbishop.jpg');
        const imageBlackKnight = chrome.runtime.getURL('medias/humanChess/blacknight.jpg');
        const imageBlackKing = chrome.runtime.getURL('medias/humanChess/blacking.jpg');
        const imageBlackQueen = chrome.runtime.getURL('medias/humanChess/blackqueen.jpg');
        
        const imageWhiteRook = chrome.runtime.getURL('medias/humanChess/whiterook.jpg');
        const imageWhitePawn = chrome.runtime.getURL('medias/humanChess/whitepawn.jpg');
        const imageWhiteBishop = chrome.runtime.getURL('medias/humanChess/whitebishop.jpg');
        const imageWhiteknight = chrome.runtime.getURL('medias/humanChess/whiteknight.jpg');
        const imageWhiteKing = chrome.runtime.getURL('medias/humanChess/whiteking.webp');
        const imageWhiteQueen = chrome.runtime.getURL('medias/humanChess/whitequeen.jpg');

        //Image for Black pieces
        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageBlackRook}')`;
            rook.style.backgroundSize = "cover"; 
            rook.style.filter = "invert(0%)";
        });
        
        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imageBlackPawn}')`;
            pawn.style.backgroundSize = "cover";
            pawn.style.filter = "invert(0%)";
        });

        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageBlackBishop}')`;
            bishop.style.backgroundSize = "cover"; 
            bishop.style.filter = "invert(0%)";
        });

        knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageBlackKnight}')`;
            knight.style.backgroundSize = "cover"; 
            knight.style.filter = "invert(0%)";
        });

        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageBlackKing}')`;
            king.style.backgroundSize = "cover";
            king.style.filter = "invert(0%)";
            
        });

        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageWhiteQueen}')`;
            queen.style.backgroundSize = "cover";
            queen.style.filter = "invert(0%)";
        });

        
        //Image for white pieces

        rooksW.forEach(rookw => {
            rookw.style.backgroundImage = `url('${imageWhiteRook}')`;
            rookw.style.backgroundSize = "cover"; 
            rookw.style.filter = "invert(0%)"; 
        });

        pawnsW.forEach(pawnw => {
            pawnw.style.backgroundImage = `url('${imageWhitePawn}')`;
            pawnw.style.backgroundSize = "cover";
            pawnw.style.filter = "invert(0%)"; 
        });
       
        bishopsW.forEach(bishopW => {
            bishopW.style.backgroundImage = `url('${imageWhiteBishop}')`;
            bishopW.style.backgroundSize = "cover"; 
            bishopW.style.filter = "invert(0%)";
        });
       
        knightsW.forEach(knightW => {
            knightW.style.backgroundImage = `url('${imageWhiteknight}')`;
            knightW.style.backgroundSize = "cover"; 
            knightW.style.filter = "invert(0%)";
        });

        kingsW.forEach(kingW => {
            kingW.style.backgroundImage = `url('${imageWhiteKing}')`;
            kingW.style.backgroundSize = "cover"; 
            kingW.style.filter = "invert(0%)"; 
        });
        
        queensW.forEach(queenW => {
            queenW.style.backgroundImage = `url('${imageBlackQueen}')`;
            queenW.style.backgroundSize = "cover"; 
            queenW.style.filter = "invert(0%)";
        });

        resolve();
    });
}



//Second mod : Grece
function modGrece() {


    return new Promise((resolve, reject) => {

        //Grece images : 
        const imageRook = chrome.runtime.getURL('medias/greceChess/final/rook.png');
        const imagePawn = chrome.runtime.getURL('medias/greceChess/final/pawn.png');
        const imageBishop = chrome.runtime.getURL('medias/greceChess/final/bishop.png');
        const imageKnight = chrome.runtime.getURL('medias/greceChess/final/knight.png');
        const imageKing = chrome.runtime.getURL('medias/greceChess/final/king.png');
        const imageQueen = chrome.runtime.getURL('medias/greceChess/final/queen.png');
       


        //Black Pieces
        
        
        rooks.forEach(rook => {
            rook.style.backgroundImage = `url('${imageRook}')`;
            rook.style.backgroundSize = "cover";
            rook.style.filter = "invert(100%)";
        });

        pawns.forEach(pawn => {
            pawn.style.backgroundImage = `url('${imagePawn}')`;
            pawn.style.backgroundSize = "cover";
            pawn.style.filter = "invert(100%)"; 
        });

        bishops.forEach(bishop => {
            bishop.style.backgroundImage = `url('${imageBishop}')`;
            bishop.style.backgroundSize = "cover"; 
            bishop.style.filter = "invert(100%)";
        });

        knights.forEach(knight => {
            knight.style.backgroundImage = `url('${imageKnight}')`;
            knight.style.backgroundSize = "cover"; 
            knight.style.filter = "invert(100%)";
        });
        
        kings.forEach(king => {
            king.style.backgroundImage = `url('${imageKing}')`;
            king.style.backgroundSize = "cover"; 
            king.style.filter = "invert(100%)"; 
            
        });

        queens.forEach(queen => {
            queen.style.backgroundImage = `url('${imageQueen}')`;
            queen.style.backgroundSize = "cover"; 
            queen.style.filter = "invert(100%)";
        });



        //White Piece

        rooksW.forEach(rookw => {
            rookw.style.backgroundImage = `url('${imageRook}')`;
            rookw.style.backgroundSize = "cover"; 
            rookw.style.filter = "invert(0%)";
        });
        pawnsW.forEach(pawnw => {
            pawnw.style.backgroundImage = `url('${imagePawn}')`;
            pawnw.style.backgroundSize = "cover"; 
            pawnw.style.filter = "invert(0%)";
        });
        
        bishopsW.forEach(bishopw => {
            bishopw.style.backgroundImage = `url('${imageBishop}')`;
            bishopw.style.backgroundSize = "cover"; 
            bishopw.style.filter = "invert(0%)";
            
        });
        
        knightsW.forEach(knightw => {
            knightw.style.backgroundImage = `url('${imageKnight}')`;
            knightw.style.backgroundSize = "cover"; 
            knightw.style.filter = "invert(0%)";
        });    
     
        kingsW.forEach(kingw => {
            kingw.style.backgroundImage = `url('${imageKing}')`;
            kingw.style.backgroundSize = "cover"; 
            kingw.style.filter = "invert(0%)"; 
        });

        queensW.forEach(queenw => {
            queenw.style.backgroundImage = `url('${imageQueen}')`;
            queenw.style.backgroundSize = "cover"; 
            queenw.style.filter = "invert(0%)"; 
        });

        resolve();
    });
}


//Third mod : Medieval
function modMedieval(){

        return new Promise((resolve, reject) => {

            //Medieval images : 
            const imageRook = chrome.runtime.getURL('medias/medievalChess/rook.png');
            const imagePawn = chrome.runtime.getURL('medias/medievalChess/pawn.png');
            const imageBishop = chrome.runtime.getURL('medias/medievalChess/bishop.png');
            const imageKnight = chrome.runtime.getURL('medias/medievalChess/knight.png');
            const imageKing = chrome.runtime.getURL('medias/medievalChess/king.png');
            const imageQueen = chrome.runtime.getURL('medias/medievalChess/queen.png');
           
    
    
    
            //black pieces
          
            rooks.forEach(rook => {
                rook.style.backgroundImage = `url('${imageRook}')`;
                rook.style.backgroundSize = "cover"; 
                rook.style.filter = "invert(100%)";
            });
           
            pawns.forEach(pawn => {
                pawn.style.backgroundImage = `url('${imagePawn}')`;
                pawn.style.backgroundSize = "cover"; 
                pawn.style.filter = "invert(100%)";
            });

            bishops.forEach(bishop => {
                bishop.style.backgroundImage = `url('${imageBishop}')`;
                bishop.style.backgroundSize = "cover"; 
                bishop.style.filter = "invert(100%)";
            });

            knights.forEach(knight => {
                knight.style.backgroundImage = `url('${imageKnight}')`;
                knight.style.backgroundSize = "cover"; 
                knight.style.filter = "invert(100%)";
            });


            kings.forEach(king => {
                king.style.backgroundImage = `url('${imageKing}')`;
                king.style.backgroundSize = "cover"; 
                king.style.filter = "invert(100%)";
                
            });

            queens.forEach(queen => {
                queen.style.backgroundImage = `url('${imageQueen}')`;
                queen.style.backgroundSize = "cover";
                queen.style.filter = "invert(100%)";
            });
    
            //white pieces

            rooksW.forEach(rookw => {
                rookw.style.backgroundImage = `url('${imageRook}')`;
                rookw.style.backgroundSize = "cover"; 
                rookw.style.filter = "invert(0%)"; 
            });
            
            pawnsW.forEach(pawnw => {
                pawnw.style.backgroundImage = `url('${imagePawn}')`;
                pawnw.style.backgroundSize = "cover"; 
                pawnw.style.filter = "invert(0%)"; 
                
            });
            
            bishopsW.forEach(bishopw => {
                bishopw.style.backgroundImage = `url('${imageBishop}')`;
                bishopw.style.backgroundSize = "cover"; 
                bishopw.style.filter = "invert(0%)";
            });
           
            knightsW.forEach(knightW => {
               
                knightW.style.backgroundImage = `url('${imageKnight}')`;
                knightW.style.backgroundSize = "cover"; 
                knightW.style.filter = "invert(0%)"; 
            });
    
            kingsW.forEach(kingW => {
                kingW.style.backgroundImage = `url('${imageKing}')`;
                kingW.style.backgroundSize = "cover"; 
                kingW.style.filter = "invert(0%)"; 
            });
    
            queensW.forEach(queenW => {
                queenW.style.backgroundImage = `url('${imageQueen}')`;
                queenW.style.backgroundSize = "cover";
                queenW.style.filter = "invert(0%)"; 
            });
    
            resolve();
        });
    }



function Custom(customPieces) {
    // customPieces contient les pièces personnalisées

    //console.log(customPieces)
    
    //BlackPiece
    if(customPieces.black_Rook!="empty"){
        rooksB.forEach(rookb => {
            rookb.style.backgroundImage = `url('${customPieces.black_Rook}')`;
            rookb.style.backgroundSize = "cover"; 
            rookb.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.black_Pawn!="empty"){
        pawnsB.forEach(pawnb => {
            pawnb.style.backgroundImage = `url('${customPieces.black_Pawn}')`;
            pawnb.style.backgroundSize = "cover"; 
            pawnb.style.filter = "invert(0%)"; 
        });
    }

    if(customPieces.black_King!="empty"){
        kingsB.forEach(kingb => {
            kingb.style.backgroundImage = `url('${customPieces.black_King}')`;
            kingb.style.backgroundSize = "cover"; // Add background-size: cover
            kingb.style.filter = "invert(0%)"; 
        });
    }

    if(customPieces.black_Knight!="empty"){
        knightsB.forEach(knightb => {
            knightb.style.backgroundImage = `url('${customPieces.black_Knight}')`;
            knightb.style.backgroundSize = "cover"; // Add background-size: cover
            knightb.style.filter = "invert(0%)"; 
        });
    }

    if(customPieces.black_Bishop!="empty"){
        bishopsB.forEach(bishopb => {
            bishopb.style.backgroundImage = `url('${customPieces.black_Bishop}')`;
            bishopb.style.backgroundSize = "cover"; // Add background-size: cover
            bishopb.style.filter = "invert(0%)"; 
        });
    }

    if(customPieces.black_Queen!="empty"){
        queensB.forEach(queenb => {
            queenb.style.backgroundImage = `url('${customPieces.black_Queen}')`;
            queenb.style.backgroundSize = "cover"; // Add background-size: cover
            queenb.style.filter = "invert(0%)"; 
        });
    }




    //White piece

    if(customPieces.white_Rook!="empty"){
        rooksW.forEach(rookw => {
            rookw.style.backgroundImage = `url('${customPieces.white_Rook}')`;
            rookw.style.backgroundSize = "cover";
            rookw.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.white_Pawn!="empty"){
        pawnsW.forEach(pawnw => {
            pawnw.style.backgroundImage = `url('${customPieces.white_Pawn}')`;
            pawnw.style.backgroundSize = "cover";
            pawnw.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.white_King!="empty"){
        kingsW.forEach(kingw => {
            kingw.style.backgroundImage = `url('${customPieces.white_King}')`;
            kingw.style.backgroundSize = "cover";
            kingw.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.white_Knight!="empty"){
        knightsW.forEach(knightw => {
            knightw.style.backgroundImage = `url('${customPieces.white_Knight}')`;
            knightw.style.backgroundSize = "cover";
            knightw.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.white_Bishop!="empty"){
        bishopsW.forEach(bishopw => {
            bishopw.style.backgroundImage = `url('${customPieces.white_Bishop}')`;
            bishopw.style.backgroundSize = "cover";
            bishopw.style.filter = "invert(0%)"; 
        });
    }
    
    if(customPieces.white_Queen!="empty"){
        queensW.forEach(queenw => {
            queenw.style.backgroundImage = `url('${customPieces.white_Queen}')`;
            queenw.style.backgroundSize = "cover";
            queenw.style.filter = "invert(0%)"; 
        });
    }
    
    
    }
    
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "modFruit") {
            modFruit();
        }
        if (request.action === "modRacist") {
            modHuman();
        }
        if (request.action === "modGrece") {
            modGrece();
        }
        if (request.action === "modMedieval") {
           modMedieval();
        }
        if (request.action === "modCustom") {
            const customPieces = request.customPieces;
            console.log(customPieces)
    
            
            Custom(customPieces);
        }
    });