import {ErrorHandler, Injectable, TransferState} from '@angular/core';

@Injectable()
export class TestErrorHandler extends ErrorHandler {


  // adding transferState here causes issues!
  constructor(private transferState: TransferState){
    super();
  }
  override handleError(error: any): void {}
}
