import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
    selector: 'poc-poc-well',
    standalone: true,
    imports: [
        CommonModule,
        TabMenuModule,
        AccordionModule,
        ButtonModule,
        CardModule,
        DialogModule,
        InputTextModule,
        InputNumberModule,
        DropdownModule,
        FormsModule,
        InputTextareaModule,
    ],
    templateUrl: './poc-well.component.html',
})
export class PocWellComponent implements OnInit {
    items: MenuItem[] | undefined;
    activeItem: MenuItem | undefined;
    isModalOpen: boolean;
    options: object[] | undefined;
    selectedOption: object;

    /**
     * init
     *
     * @returns void
     */
    ngOnInit(): void {
        this.items = [{ label: 'Well' }, { label: 'Job' }, { label: 'Fleet Information' }, { label: 'Schedule' }];
        this.options = [
            { name: 'Single Blender', code: 'singleBlender' },
            { name: 'Single Blender x', code: 'singleBlender2' },
        ];

        this.activeItem = { ...this.items[1] };
    }

    /**
     * Show modal
     *
     * @returns void
     */
    showModal(): void {
        this.isModalOpen = true;
    }
}
