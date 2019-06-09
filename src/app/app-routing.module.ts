import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchTrackComponent } from './search-track/search-track.component';

const routes: Routes = [
  { path : 'search' , component : SearchTrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchTrackComponent]