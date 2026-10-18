import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupoCadastrar } from './grupo-cadastrar';

describe('GrupoCadastrar', () => {
  let component: GrupoCadastrar;
  let fixture: ComponentFixture<GrupoCadastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoCadastrar],
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoCadastrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
