import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContatoComponent } from './show-contato.component';

describe('ShowContatoComponent', () => {
  let component: ShowContatoComponent;
  let fixture: ComponentFixture<ShowContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
