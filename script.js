const characterList = document.getElementById('character-list');
const characterDetails = document.getElementById('character-details');


const characterImages = {
    "Luke Skywalker": "img/Luke Skywalker.webp",
    "C-3PO": "img/C-3PO.webp",
    "R2-D2": "img/R2-D2.webp",
    "Darth Vader": "img/Darth Vader.webp",
    "Leia Organa": "img/Leia Organa.webp",
    "Obi-Wan Kenobi": "img/Obi-Wan Kenobi.jpeg",
    "Beru Whitesun lars":"img/Beru Whitesun lars.webp",
    "Biggs Darklighter":"img/Biggs Darklighter.jpeg",
    "R5-D4":"img/R5-D4.jpeg",
    "Owen Lars":"img/Owen Lars.jpeg"
   
};


fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => {
        displayCharacters(data.results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        
    });

function displayCharacters(characters) {
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

            const imageUrl = characterImages[character.name] 

        characterElement.innerHTML = `
            <img src="${imageUrl}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;
        characterElement.addEventListener('click', () => {
            displayCharacterDetails(character);
        });
        characterList.appendChild(characterElement);
    });
}


function displayCharacterDetails(character) {
    characterDetails.innerHTML = `
        <h2>${character.name}</h2>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height} cm</p>
    `;
    characterDetails.style.display = 'block';
}
