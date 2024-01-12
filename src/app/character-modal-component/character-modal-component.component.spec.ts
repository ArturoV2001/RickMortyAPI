import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModalComponentComponent } from './character-modal-component.component';

describe('CharacterModalComponentComponent', () => {
  let component: CharacterModalComponentComponent;
  let fixture: ComponentFixture<CharacterModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
