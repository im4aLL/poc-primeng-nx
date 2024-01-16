import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedBjHeaderComponent } from './shared-bj-header.component';

describe('SharedBjHeaderComponent', () => {
  let component: SharedBjHeaderComponent;
  let fixture: ComponentFixture<SharedBjHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBjHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedBjHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
