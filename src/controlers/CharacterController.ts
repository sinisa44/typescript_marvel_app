import generateURL from "../utils/marvelClient.util";

interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURL: string;
  urls: string[];
  thumbnail: string;
  comics: string[];
}

interface ICharacterController {
  getCharacters: () => Promise<ICharacter[]>;
  getCharacter: (endpoint: string) => Promise<ICharacter>;
  saveCharacters: (character: ICharacter) => Promise<ICharacter>;
  removeFavoriteCharacter: (character: ICharacter) => void;
  responseOffset: number;
  responseLimit: number;
}

export default class Character implements ICharacterController {
  public constructor(
    public responseOffset: number = 100,
    public responseLimit = 100
  ) {}

  async getCharacters(): Promise<ICharacter[]> {
    const response = await fetch(
      generateURL("characters", this.responseLimit, this.responseOffset)
    );

    const data = await response.json();

    return data.data.results;
  }

  async getCharacter(endpoint: string): Promise<ICharacter> {
    console.log(endpoint);
    return {
      id: 1,
      name: "test",
      description: "123",
      modified: "yes",
      resourceURL: "asd",
      urls: ["1", "2"],
      thumbnail: "thumb",
      comics: ["12", "123"],
    };
  }

  async saveCharacters(character: ICharacter): Promise<ICharacter> {
    return {
      id: 1,
      name: "test",
      description: "123",
      modified: "yes",
      resourceURL: "asd",
      urls: ["1", "2"],
      thumbnail: "thumb",
      comics: ["12", "123"],
    };
  }

  async removeFavoriteCharacter(character: ICharacter) {
    console.log(character);
  }
}
