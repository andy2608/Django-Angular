import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member ={name:'', surname:'', phone:''}

  constructor(private api: ApiService,
              private appComponent: AppComponent) { }

  ngOnInit(){

  }

  salve(){
    this.api.saveNewMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data);
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
  }; 
}
