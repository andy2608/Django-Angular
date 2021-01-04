import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private api: ApiService,
              private router: Router,
              private appComponent: AppComponent) { }

  selected_member = {name: '', surname: ''};
  selected_id; 

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap)=> {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    });
    
  };
  loadMember(id){
    this.api.getMember(id).subscribe(
      data =>{
        this.selected_member = data;
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
    
  };

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
  };

  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
        let index;
        this.appComponent.members.forEach((e, i) => {
          if(e.id == this.selected_id)
            index = i;       
        });
        this.appComponent.members.splice(index, 1);
      },
      erro => {
        console.log("Ocorreu um Erro");
      }      
    );
  };

  newMember = (member) => {
    this.router.navigate(['new-member']);
  };
}
