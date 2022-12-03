import { Component } from '@angular/core';
import { ApiService } from '../api.service';


export interface Tag {
  title: string
}

export interface Preference{
  title: string
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})



export class ProfilComponent {

  tags: Tag [] = [];
  displayedColumns: string[] = ['title'];
  dataSource: any;

  preferences: Preference [] = [];
  displayedColumns1: string[] = ['title'];
  dataSource1: any;

  constructor (private api: ApiService) {
  }

  ngOnInit(): void {

    this.api.getTags().subscribe(
      data =>{ 
        this.tags = data;
        this.dataSource= this.tags
  
      },
      error => { console.log(error)}
    )

    
    this.api.getIntrests().subscribe(
      data =>{ 
        this.tags = data;
        this.dataSource1= this.tags
  
      },
      error => { console.log(error)}
    )
}

}
