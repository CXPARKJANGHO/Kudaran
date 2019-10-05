import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KensakuComponent } from './kensaku.component';

describe('KensakuComponent', () => {
  let component: KensakuComponent;
  let fixture: ComponentFixture<KensakuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KensakuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KensakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
