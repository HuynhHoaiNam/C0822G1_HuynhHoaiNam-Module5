import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../service/dictionary-service.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord = {};

  constructor(private activatedRoute: ActivatedRoute, private dictionaryServiceService: DictionaryServiceService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const word = next.get("word");
      if (word != null) {
        this.word.mean = dictionaryServiceService.findById(word);
      }
    }, error => {

    }, () => {

    })
  }

  ngOnInit(): void {
  }

}
