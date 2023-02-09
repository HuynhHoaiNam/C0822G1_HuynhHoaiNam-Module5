import {Injectable} from '@angular/core';
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  wordList: IWord[] = [{
    id: 1,
    word: "Red",
    mean: "Màu đỏ"
  },
    {
      id: 2,
      word: "Green",
      mean: "Màu xanh"
    },
    {
      id: 3,
      word: "Blue",
      mean: "Màu xanh dương"
    },
    {
      id: 4,
      word: "Black",
      mean: "Màu đen"
    }]

  constructor() {
  }

  getAll() {
    return this.wordList;
  }

  findById(word: string) {
    for (let i = 0; i < this.wordList.length; i++) {
      if (this.getAll()[i].word === word) {
        return this.getAll()[i].mean;
      }
    }

  }


}
