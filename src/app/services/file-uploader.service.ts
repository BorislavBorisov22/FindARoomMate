import { HttpRequesterService } from './http-requester.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { UserStorageService } from './user-storage.service';

const UPLOAD_FILE_NAME = 'uploads[]';
const UPLOAD_IMAGE_URL = '/upload';

@Injectable()
export class FileUploaderService {
  constructor(private readonly httpRequester: HttpRequesterService,
    private userStorageService: UserStorageService) { }

  public uploadFile(files: File[]): Observable<Response> {
    const formData = new FormData();
    formData.append(UPLOAD_FILE_NAME, files[0]);

    return this.httpRequester.postFormData(UPLOAD_IMAGE_URL, formData);
  }
}
