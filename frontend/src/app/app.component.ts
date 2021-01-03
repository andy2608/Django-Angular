import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  selected_member = {id: 0, name: '', surname: ''};

  constructor(private api: ApiService){
    this.getMembers();
  }
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data =>{
        this.members = data
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
  };

  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data =>{
        console.log(data);
        this.selected_member = data;
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
  };
}