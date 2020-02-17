import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProfiloPage } from './edit-profilo.page';

describe('EditProfiloPage', () => {
  let component: EditProfiloPage;
  let fixture: ComponentFixture<EditProfiloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfiloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
