import { Injectable } from '@angular/core';

import { Router } from "@angular/router";

import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  private papers: string[] = ['Hindi'];
  papersupdate = new Subject();
  constructor(private router: Router) { }

  add(f){
    if(f.valid){
      this.papers.push(f.value.papername);
      this.papersupdate.next();
      this.router.navigate(["/dashboard/tabs/papers"]);
    }
  }

  getPapers(){
    return [...this.papers];
  }
}
