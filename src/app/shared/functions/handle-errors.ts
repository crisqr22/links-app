import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const handleServicesErrors = (error: HttpErrorResponse, serviceName?: string) => {
  let msg;
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
};
