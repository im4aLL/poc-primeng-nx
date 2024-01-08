import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBjHeaderComponent } from '@poc/shared/bj-header';
import { SharedBjFooterComponent } from '@poc/shared/bj-footer';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'poc-poc-well',
  standalone: true,
  imports: [
    CommonModule,
    SharedBjHeaderComponent,
    SharedBjFooterComponent,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './poc-well.component.html',
  styleUrl: './poc-well.component.css',
})
export class PocWellComponent {}
