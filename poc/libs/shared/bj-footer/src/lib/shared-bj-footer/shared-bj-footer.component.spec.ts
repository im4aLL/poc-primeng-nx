import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedBjFooterComponent } from './shared-bj-footer.component';

describe('SharedBjFooterComponent', () => {
  let component: SharedBjFooterComponent;
  let fixture: ComponentFixture<SharedBjFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBjFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedBjFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
