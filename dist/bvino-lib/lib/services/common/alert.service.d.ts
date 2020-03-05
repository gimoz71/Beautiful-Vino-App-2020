import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
export declare class AlertService {
    router: Router;
    toastrService: ToastrService;
    constructor(router: Router, toastrService: ToastrService);
    presentAlert(alertMessage: string): Promise<void>;
    presentErrorAlert(alertMessage: string): Promise<void>;
}
