import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtabelComponent } from './crudtabel.component';

describe('CrudtabelComponent', () => {
  let component: CrudtabelComponent;
  let fixture: ComponentFixture<CrudtabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
