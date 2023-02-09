import {Component, OnInit} from '@angular/core';
import {IWord} from "../iword";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[] = [];
  word: IWord = {};


  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryServiceService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.wordList = this.dictionaryService.getAll();
  }

  checkWord() {
    for (let i = 0; i < this.wordList.length; i++) {
      if (this.dictionaryService.getAll()[i].word == this.word.word) {
        this.route.navigate(["/detail", this.dictionaryService.getAll()[i].word])
      }
    }
  }
}
