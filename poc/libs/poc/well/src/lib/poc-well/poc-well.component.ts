import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
    selector: 'poc-poc-well',
    standalone: true,
    imports: [CommonModule, ButtonModule, InputTextModule, TabMenuModule],
    templateUrl: './poc-well.component.html',
})
export class PocWellComponent implements OnInit {
    items: MenuItem[] | undefined;
    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [{ label: 'Well' }, { label: 'Job' }, { label: 'Fleet Information' }, { label: 'Schedule' }];

        this.activeItem = this.items[1];
    }
}
