import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RecipeBookAngular } from '../../../RecipeBookITems';
import {MatButtonModule} from '@angular/material/button';
import { RecipeBookAppService } from '../../../recipe-book-app.service';
import { Router } from '@angular/router';

// Student ID 00013674

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router= inject(Router)
  RecipeBookService=inject(RecipeBookAppService)
  itemsList: RecipeBookAngular[]=[];
  ngOnInit(){
    this.RecipeBookService.getAll().subscribe((result) => {
      this.itemsList=result
    })
  }
  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Category Name', 'Actions'];
  c(){
    console.log("create");
    this.router.navigateByUrl("create");
  };
  e(id:number){
    console.log("edit", id);
    this.router.navigateByUrl("edit/"+id);
  };
  dt(id:number){
    console.log("detais", id);
    this.router.navigateByUrl("details/"+id);
  };
  dl(id:number){
    console.log("delete", id);
    this.router.navigateByUrl("delete/"+id);
  }

}
