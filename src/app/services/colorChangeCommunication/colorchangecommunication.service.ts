import { Subject } from 'rxjs';

export class ColorChangeCommunicationService {
    private colorSubject: Subject<boolean> = new Subject<boolean>();
    public colorObservable = this.colorSubject.asObservable();

    public comunicateColorChange(): void {
        this.colorSubject.next(true);
    }
}
