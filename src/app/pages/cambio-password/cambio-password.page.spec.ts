import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambioPasswordPage } from './cambio-password.page';

describe('CambioPasswordPage', () => {
  let component: CambioPasswordPage;
  let fixture: ComponentFixture<CambioPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambioPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
