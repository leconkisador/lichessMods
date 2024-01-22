// Selection all the button to dynamicly allow them some click propreties
const fruit = document.getElementById("fruit");
const human = document.getElementById("human");
const grece = document.getElementById("grece");
const medieval = document.getElementById("medieval");
const custom = document.getElementById("custom");


// Adding some visual effect to Custom opening pop up button
const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
      const currentWidth = entry.contentRect.width;

      // Condition pour la largeur supérieure à 150px
      if (currentWidth > 150) {
          custom.innerHTML = "CREATE YOUR OWN";
      } else {
          // Condition pour la largeur inférieure à 150px
          custom.innerHTML = "+";
      }
  }
});

resizeObserver.observe(custom);






//creating the custom pop up using javascript :

//When custom is clicked
custom.addEventListener('click', () => {
  //creating the principal pop up div
  const divPopUp=document.getElementById("customP")

  //getting the different manes of pieces for labeling inputs
  const labels = [
        'Pawn',
        'Rook',
        'Knight',
        'King',
        'Queen',
        'Bishop'
      ];
  
  //Title of the div
  const title= document.createElement("h3")
  var texth3 =document.createTextNode("CUSTOM PIECES")
  title.appendChild(texth3)
  divPopUp.appendChild(title)


  //Creating a sub div containing the input for black pieces
  const divBlack = document.createElement('div');
        divBlack.id = 'divBlack';
        
        //the title of the sub div
        const h2= document.createElement('h2')
        var textNode = document.createTextNode("Black Side");
        h2.appendChild(textNode);
        divBlack.appendChild(h2)
        
        //generating inputs
        for (let i = 0; i < labels.length; i++) {
            const input = document.createElement('input');
            input.type = 'file';
            input.name = 'fichier' + (i + 1);
            

            const label = document.createElement('label');
            label.textContent = labels[i];

            divBlack.appendChild(label);
            divBlack.appendChild(input);
            divBlack.appendChild(document.createElement('br')); 
        }


        

  //Creating a sub div containing the input for white pieces
  const divWhite = document.createElement('div');
        divWhite.id = 'divWhite';
        
        //title of the sub div
        const h21= document.createElement('h2')
        textNode = document.createTextNode("White Side");
        h21.appendChild(textNode);
        divWhite.appendChild(h21)
        
        //generating inputs
        for (let i = 0; i < labels.length; i++) {
          const input = document.createElement('input');
          input.type = 'file';
          input.name = 'fichier' + (i + 7);
          
    
          const label = document.createElement('label');
          label.textContent = labels[i];
    
          divWhite.appendChild(label);
          divWhite.appendChild(input);
          divWhite.appendChild(document.createElement('br'));
      }
       

      //creating a closing button for close the custom pop up
        const close= document.createElement("button")
        close.id='close'
        close.innerText = 'x';


        //adding element to the principal div
        divPopUp.appendChild(close)
        divPopUp.appendChild(divBlack);
        divPopUp.appendChild(divWhite);
        divPopUp.style.display="block"

        //configuration of the closing effect
        close.addEventListener('click', () => {
          const divPopUp = document.getElementById("customP");

          // Deleting all childs one by one until it's empty
          while (divPopUp.firstChild) {
            divPopUp.removeChild(divPopUp.firstChild);
          }

          // Hidding the pop up once there is no child remaining
          divPopUp.style.display = "none";
        })


      // Creating the button for submiting the custom data
      const create= document.createElement("button")
      create.id="create"
      divPopUp.appendChild(create)
      create.innerText = 'CREATE';
      



















      const customPieces = {};

      // Adding effect to the button
      create.addEventListener('click', () => {
        

        // Select all elements of divBlack
        let inputs = document.querySelectorAll('#divBlack input');
        // Initialisation of the varible which will stock the data to transmit
        
        //using black piece inputs
        inputs.forEach((input, index) => {
          const label = labels[index];
          const side = 'black';
          // check if the input empty or full
          if(input.files && input.files[0]) {
            var file = input.files[0];
            var reader = new FileReader();
            reader.onloadend = function() {
                var base64 = reader.result;
                customPieces[`${side}_${label}`] = base64;
            };
            
            reader.readAsDataURL(file);
          }
          else{
            customPieces[`${side}_${label}`] = "empty";
          }
        })
        //dame with white ones
        inputs = document.querySelectorAll('#divWhite input');

        inputs.forEach((input, index) => {
          const label = labels[index];
          const side = 'white';
          // check if the input iunpty or full
          if(input.files && input.files[0]) {
            var file = input.files[0];
            var reader = new FileReader();
            reader.onloadend = function() {
                var base64 = reader.result;
                customPieces[`${side}_${label}`] = base64;
            };
            
            reader.readAsDataURL(file);
          }
          else{
            customPieces[`${side}_${label}`] = "empty";
          }
        })
      
       
        //sending the mesage "modCustom" and the variable customPieces to script.js
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          console.log(customPieces)
          chrome.tabs.sendMessage(tabs[0].id, {action: "modCustom",customPieces});
                 
            
    
            
            
            
        });
    });
});


//sending the mesage "modFruit" 
fruit.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modFruit"});
    });
});

//sending the mesage "modHuman" 
human.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modRacist"});
    });
});

//sending the mesage "modGrece" 
grece.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modGrece"});
    });
});

//sending the mesage "modHMedieval" 
medieval.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modMedieval"});
    });
});

