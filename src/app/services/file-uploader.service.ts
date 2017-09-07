import { UserStorageService } from './user-storage.service';
import { Observable } from 'rxjs/Observable';
import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';

const UPLOAD_FILE_NAME = 'uploadFile';
const UPLOAD_IMAGE_URL = 'http://localhost:4201/api/upload';

@Injectable()
export class FileUploaderService {

  constructor(private readonly httpRequester: HttpRequesterService,
    private userStorageService: UserStorageService) { }

  public uploadFile(file: File) {
    const body = new FormData();
    body.append(UPLOAD_FILE_NAME, file);

    const token = this.userStorageService.getLoggedUserToken();
    const headers = { token };

    return this.httpRequester.post(UPLOAD_IMAGE_URL, body, headers);
  }
}
