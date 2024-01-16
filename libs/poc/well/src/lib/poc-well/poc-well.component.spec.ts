import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PocWellComponent } from './poc-well.component';

describe('PocWellComponent', () => {
  let component: PocWellComponent;
  let fixture: ComponentFixture<PocWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocWellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PocWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
