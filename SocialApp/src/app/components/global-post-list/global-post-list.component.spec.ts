import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPostListComponent } from './global-post-list.component';

describe('GlobalPostListComponent', () => {
  let component: GlobalPostListComponent;
  let fixture: ComponentFixture<GlobalPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
