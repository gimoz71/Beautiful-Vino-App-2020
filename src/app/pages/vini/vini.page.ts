import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vini',
  templateUrl: './vini.page.html',
  styleUrls: ['./vini.page.scss'],
})
export class ViniPage implements OnInit {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone
  ) { }

  ionViewDidEnter() {
    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });

  }

  ngOnInit() {
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
