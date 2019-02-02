import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  login(f){
    if(f.valid){
      console.log(f.value.username+"  "+f.value.password);
      this.router.navigate(["/dashboard/tabs/papers"]);
    }
  }
}
