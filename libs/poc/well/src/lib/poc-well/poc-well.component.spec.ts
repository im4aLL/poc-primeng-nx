import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocWellComponent } from './poc-well.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PocWellComponent', () => {
    let component: PocWellComponent;
    let fixture: ComponentFixture<PocWellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PocWellComponent, RouterTestingModule, NoopAnimationsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(PocWellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create x', () => {
        expect(component).toBeTruthy();
    });
});
