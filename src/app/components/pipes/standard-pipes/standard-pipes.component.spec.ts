import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPipesComponent } from './standard-pipes.component';

describe('StandardPipesComponent', () => {
  let component: StandardPipesComponent;
  let fixture: ComponentFixture<StandardPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
