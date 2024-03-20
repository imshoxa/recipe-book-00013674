import { Component, inject } from '@angular/core';
import { RecipeBookAppService } from '../../recipe-book-app.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule, 
    MatSelectModule, 
    FormsModule, 
    MatButtonModule
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  serviceRecipeBookApp = inject(RecipeBookAppService)
  router = inject(Router)
  categories: any

  itemToCreate: any = {
    title: "",
    description: "",
    categoryID: 0
  }
  ngOnInit() {
    this.serviceRecipeBookApp.getAllCategories().subscribe(result => {
      this.categories = result
    })
  }

  selectedCategoryID: number = 0

  onCreateBtn() {
    this.itemToCreate.categoryID = this.selectedCategoryID
    this.serviceRecipeBookApp.createItem(this.itemToCreate).subscribe(result => {
      alert("Created")
      this.router.navigateByUrl("home")
    });
  }
}
