import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcquistaeventoPage } from './acquistaevento.page';

describe('AcquistaeventoPage', () => {
  let component: AcquistaeventoPage;
  let fixture: ComponentFixture<AcquistaeventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquistaeventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcquistaeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
