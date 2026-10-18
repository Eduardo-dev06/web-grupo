import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrupoListar } from './grupo-listar';

describe('GrupoListar', () => {
  let component: GrupoListar;
  let fixture: ComponentFixture<GrupoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
