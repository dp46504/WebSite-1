import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CategoryComponent} from "./category/category.component";

export const routes: Routes = [
  { path:"", component: HomeComponent, pathMatch:"full" },
  { path: "category", component: CategoryComponent },
  { path:"**", component: NotFoundComponent }
];
