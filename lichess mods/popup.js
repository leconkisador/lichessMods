const fruit= document.getElementById("fruit")
const human= document.getElementById("human")
const grece= document.getElementById("grece")
const medieval= document.getElementById("medieval")
const custom=document.getElementById("custom")

custom.addEventListener('mouseover', () => {
  setTimeout(() => {
      custom.innerHTML = "CREATE YOUR OWN";
  }, 260);
});


custom.addEventListener('mouseout', () => {
  custom.innerHTML="+"
})


//creating the custom pop up
custom.addEventListener('click', () => {
  const div0=document.getElementById("customP")

  const labels = [
        'Pawn',
        'Rook',
        'Knight',
        'King',
        'Queen',
        'Bishop'

      ];

  const h3= document.createElement("h3")
  var texth3 =document.createTextNode("CUSTOM PIECES")
  h3.appendChild(texth3)
  div0.appendChild(h3)



  const div1 = document.createElement('div');
        div1.id = 'div1';
        
        const h2= document.createElement('h2')
        var textNode = document.createTextNode("Black Side");
        h2.appendChild(textNode);
        div1.appendChild(h2)
        

        for (let i = 0; i < labels.length; i++) {
            const input = document.createElement('input');
            input.type = 'file';
            input.name = 'fichier' + (i + 1);
            

            const label = document.createElement('label');
            label.textContent = labels[i];

            div1.appendChild(label);
            div1.appendChild(input);
            div1.appendChild(document.createElement('br')); // Ajoutez un saut de ligne entre chaque paire de label et input
        }


        

        // Création de la deuxième div
  const div2 = document.createElement('div');
        div2.id = 'div2';
        

        const h21= document.createElement('h2')
        textNode = document.createTextNode("White Side");
        h21.appendChild(textNode);
        div2.appendChild(h21)
        

        for (let i = 0; i < labels.length; i++) {
          const input = document.createElement('input');
          input.type = 'file';
          input.name = 'fichier' + (i + 7);
          
    
          const label = document.createElement('label');
          label.textContent = labels[i];
    
          div2.appendChild(label);
          div2.appendChild(input);
          div2.appendChild(document.createElement('br')); // Ajoutez un saut de ligne entre chaque paire de label et input
      }
       

        
        // Ajout des divs à la div principale
        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.style.display="block"



  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "modCustom"});
  });
});

fruit.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modFruit"});
    });
});

human.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modRacist"});
    });
});

grece.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modGrece"});
    });
});

medieval.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "modMedieval"});
    });
});

