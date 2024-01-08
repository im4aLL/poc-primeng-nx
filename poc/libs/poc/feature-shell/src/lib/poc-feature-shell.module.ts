import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocWellComponent } from '@poc/poc/well';

export const pocRoutes: Routes = [
  {
    path: '',
    component: PocWellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(pocRoutes)],
  exports: [RouterModule],
})
export class PocFeatureShellModule {}
