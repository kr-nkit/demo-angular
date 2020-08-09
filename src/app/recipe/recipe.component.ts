import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let recipe = this.http.get("http://starlord.hackerearth.com/recipe");
    recipe.subscribe((data)=>this.recipes=data);
    
  }

}
