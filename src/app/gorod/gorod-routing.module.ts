import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GorodPage } from './gorod.page';

const routes: Routes = [
  {
    path: '',
    component: GorodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GorodPageRoutingModule {}
