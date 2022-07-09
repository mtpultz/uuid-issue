import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { randText } from '@ngneat/falso';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AppComponent],
    });

    component = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    let name = randText();
    expect(component).toBeTruthy();
    expect(name).toBeTruthy();
  });
});
