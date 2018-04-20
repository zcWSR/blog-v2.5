import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { observable, computed, action } from 'mobx-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost } from '../models/post';
import { IJsonReturn } from '../models/json-return';
import { environment } from '../../environments/environment';
import { AppStore } from '../app.store';

@Injectable()
export class PostPageStore {
  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private appStore: AppStore
  ) {}

  defaultPost: IPost = {
    id: '',
    title: '',
    createAt: '',
    section: '',
    rest: '',
    category: '',
    labels: []
  };

  @observable post: IPost = this.defaultPost;
  @observable headerList = [];

  @observable loading = true;

  @computed
  get allContent() {
    return this.post.section + this.post.rest;
  }

  @computed
  get pageUrl() {
    return `${location.protocol}//${location.host}${location.pathname}`;
  }

  @computed
  get affixIndexList() {
    return !this.appStore.isHeaderTransparent;
  }

  @action('set default')
  setDefault() {
    this.post = this.defaultPost;
    this.loading = true;
    this.headerList = [];
  }

  @action('get post')
  getPost(postId) {
    this.loading = true;
    const url = `${environment.api_host}/blog/posts/${postId}`;
    this.http.jsonp(url, 'callback')
      .subscribe((meta: IJsonReturn<IPost>) => {
        if (meta.ret) {
          this.post = meta.data;
        } else {
        }
        this.loading = false;
      });
  }


  @action('active index')
  activeIndex(indexId) {
    this.headerList.forEach(item => {
      item.active = false;
    });
    const index = this.headerList.findIndex(item => item.id === indexId);
    this.headerList[index].active = true;
  }

  scrollTo(to, duration) {
    const scrollBody = document.documentElement;
    const start = scrollBody.scrollTop;
    const change = to - start;
    const increment = 5;

    const animateScroll = elapsedTime => {
        elapsedTime += increment;
        const position = this.easeInOut(elapsedTime, start, change, duration);
        scrollBody.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(() => {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
  }

  easeInOut(currentTime, start, change, duration) {
      currentTime /= duration / 2;
      if (currentTime < 1) {
          return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }
}
