import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBjHeaderComponent } from '@poc/shared/bj-header';
import { SharedBjFooterComponent } from '@poc/shared/bj-footer';

@Component({
  selector: 'poc-poc-well',
  standalone: true,
  imports: [CommonModule, SharedBjHeaderComponent, SharedBjFooterComponent],
  templateUrl: './poc-well.component.html',
  styleUrl: './poc-well.component.css',
})
export class PocWellComponent {}
