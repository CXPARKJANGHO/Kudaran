import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCollectionComponent } from './tag-collection.component';

describe('TagCollectionComponent', () => {
  let component: TagCollectionComponent;
  let fixture: ComponentFixture<TagCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
