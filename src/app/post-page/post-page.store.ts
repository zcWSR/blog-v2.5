import { Injectable } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { observable, computed, action } from 'mobx-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost } from "../modules/post";
import { IJsonReturn } from '../modules/json-return';
import { environment } from "../../environments/environment";

@Injectable()
export class PostPageStore {
  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  @observable post: IPost = {
    id: '',
    title: '',
    date: '',
    section: '',
    rest: '',
    category: '',
    labels: []
  };

  @computed
  get allContent() {
    return this.post.section + this.post.rest;
  }

  @action('get post') 
  getPost(postId) {
    const url = `${environment.api_host}/blog/posts/${postId}`;
    this.http.jsonp(url, 'callback')
      .subscribe((meta: IJsonReturn<IPost>) => {
        if (meta.ret) {
          this.post = meta.data;
        } else {

        }
      });
  }
}