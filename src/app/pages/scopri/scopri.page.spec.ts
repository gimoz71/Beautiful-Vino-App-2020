import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScopriPage } from './scopri.page';

describe('ScopriPage', () => {
  let component: ScopriPage;
  let fixture: ComponentFixture<ScopriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScopriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
