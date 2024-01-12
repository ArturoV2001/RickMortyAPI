import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCardComponentComponent } from './characters-card-component.component';

describe('CharactersCardComponentComponent', () => {
  let component: CharactersCardComponentComponent;
  let fixture: ComponentFixture<CharactersCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersCardComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
