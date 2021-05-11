import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContatoComponent } from './add-edit-contato.component';

describe('AddEditContatoComponent', () => {
  let component: AddEditContatoComponent;
  let fixture: ComponentFixture<AddEditContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
