import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RecipeBookAngular } from './RecipeBookITems';
import { HomeComponent } from './components/home/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Student ID 00013674

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NavigationComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
