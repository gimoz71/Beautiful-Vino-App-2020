import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutCommunicationService } from 'src/app/services/logoutCommunication/logoutcommunication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Evento, BVCommonService, RichiesteService } from 'bvino-lib';
import { environment } from 'src/environments/environmentkeys';
import { BaseComponent } from 'src/app/components/base/base.component';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.page.html',
  styleUrls: ['./eventi.page.scss'],
})
export class EventiPage extends BaseComponent implements OnInit {

  private unsubscribe$ = new Subject<void>();

  public listaEventi: Array<Evento>;

  constructor(
    private commonService: BVCommonService,
    private richiesteService: RichiesteService,
    public alertService: AlertService,
    public router: Router,
    private logoutComm: LogoutCommunicationService,
    public ngZone: NgZone
  ) {
    super(router, alertService);
    this.listaEventi = new Array<Evento>();

  }

  ionViewDidEnter() {
    this.logoutComm.logoutObservable.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(r => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      this.ngZone.run(() => this.router.navigate(['login'])).then();
    });

    this.commonService.get(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
      // this.eventiService.getEventi(this.richiesteService.getRichiestaGetEventi()).subscribe(r => {
      if (r.esito.codice === environment.ESITO_OK_CODICE) {
        this.listaEventi = this.normalizeList(r.eventi);
      } else {
        this.manageError(r);
      }
    }, err => {
      this.alertService.presentErrorAlert(err.statusText);
    });
  }

  private normalizeList(lista: Array<Evento>): Array<Evento> {
    const toReturn = new Array<Evento>();

    for (const evento of lista) {
      evento.titoloEvento = (evento.titoloEvento ? evento.titoloEvento : '');
      evento.cittaEvento = (evento.cittaEvento ? evento.cittaEvento : '');

      toReturn.push(evento);
    }

    return toReturn;
  }

  ngOnInit() {
  }

  public dettaglioEvento(evento: Evento) {
    this.goToPageParams('dettaglio-evento', { queryParams: { eventoselezionato: JSON.stringify(evento) } });
  }

  ionViewDidLeave() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
