import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoToPayPage } from './go-to-pay.page';

const routes: Routes = [
  {
    path: '',
    component: GoToPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoToPayPageRoutingModule {}
