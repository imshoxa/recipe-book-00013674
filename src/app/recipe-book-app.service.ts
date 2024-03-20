import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RecipeBookAngular } from './RecipeBookITems'

// Student ID 00013674

@Injectable({
  providedIn: 'root'
})
export class RecipeBookAppService {
  httpClient = inject(HttpClient)
  constructor() { }
  getAll(){return this.httpClient.get<RecipeBookAngular[]>("https://localhost:7162/api/Recipes/")}
  getAllCategories(){return this.httpClient.get<RecipeBookAngular[]>("https://localhost:7162/api/Recipes/")}

  createItem(item:any){
    return this.httpClient.post("https://localhost:7162/api/Recipes/", item);
  }
}
