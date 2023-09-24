import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JumlahPesananButtonComponent } from './jumlah-pesanan-button.component';

describe('JumlahPesananButtonComponent', () => {
  let component: JumlahPesananButtonComponent;
  let fixture: ComponentFixture<JumlahPesananButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JumlahPesananButtonComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JumlahPesananButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
