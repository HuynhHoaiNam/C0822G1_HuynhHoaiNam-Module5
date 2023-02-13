import {Component, OnInit} from '@angular/core';
import {ServiceContractService} from "../../../service-contract/service-contract.service";
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[] = [];
  contract: Contract = {};

  constructor(private contractService: ServiceContractService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.contractService.getAll().subscribe(next => {
      console.log(next);
      this.contractList = next;
    }, error => {

    }, () => {
    })
  }
}
