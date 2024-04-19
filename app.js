let characters;

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        characters = data.results;
    });

const StartGrild = () => LLenarDivs(); 
function LLenarDivs() {
    for (let x = 0; x < characters.length; x++) {
        var div2 = document.getElementById('personajes');
        var div = document.createElement('div');
        var title = document.createElement('h3');
        var img = document.createElement('img');
        img.src = characters[x].image;
        title.textContent = characters[x].name; 
        div.appendChild(title);
        div.appendChild(img);
        
        div2.append(div);
        
    }

}
