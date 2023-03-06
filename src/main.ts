// import Marvel from "./models/Marvel";

import Character from "./controlers/CharacterController";

// import URL from './marvelConfig.json'
const initApp = async() => {
    const character = new Character(20, 40)

    const data =  await character.getCharacters();

    console.log('DATA', data);
}


document.addEventListener('DOMContentLoaded', initApp);
export {}