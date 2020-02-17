import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViniPage } from './vini.page';

describe('ViniPage', () => {
  let component: ViniPage;
  let fixture: ComponentFixture<ViniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
