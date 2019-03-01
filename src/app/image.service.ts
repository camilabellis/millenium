import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  visibleImages = [];

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('http://demo2815618.mockable.io/millenium/gallery');
  }
}

