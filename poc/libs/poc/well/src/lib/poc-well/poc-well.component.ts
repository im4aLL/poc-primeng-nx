import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'poc-poc-well',
    standalone: true,
    imports: [CommonModule, TabMenuModule, AccordionModule, ButtonModule, CardModule],
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
