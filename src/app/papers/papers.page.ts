import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { PapersService } from "./papers.service";
@Component({
  selector: 'app-papers',
  templateUrl: './papers.page.html',
  styleUrls: ['./papers.page.scss'],
})
export class PapersPage implements OnInit, OnDestroy {
  papers: string[];
  private papersubscription: Subscription;

  constructor(private paperservice:PapersService) { }

  ngOnInit() {
    this.papers = this.paperservice.getPapers();
    this.papersubscription = this.paperservice.papersupdate.subscribe(() => {
      this.papers = this.paperservice.getPapers();
    })
  }

  add(f){
    this.paperservice.add(f);
  }

  ngOnDestroy(){
    this.papersubscription.unsubscribe();
  }

}
