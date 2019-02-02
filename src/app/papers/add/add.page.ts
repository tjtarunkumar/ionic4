import { Component, OnInit } from '@angular/core';
import { PapersService } from "../papers.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private paperservice: PapersService) { }

  ngOnInit() {
  }

  add(f){
    this.paperservice.add(f);
  }
}
