import { Injectable } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { observable, computed, action } from 'mobx-angular';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost } from '../models/post';
import { IJsonReturn } from '../models/json-return';
import { environment } from '../../environments/environment';
import { AppStore } from '../app.store';
import { Catalog } from '../models/catalog';

@Injectable()
export class PostPageStore {
  constructor(
    private domSanitizer: DomSanitizer,
    private http: HttpClient,
    private appStore: AppStore,
    private title: Title
  ) { }

  defaultPost: IPost = {
    id: '',
    title: '',
    createAt: '',
    section: '',
    rest: '',
    category: '',
    labels: [],
    bgUrl: '',
    bgColor: ''
  };

  @observable post: IPost = this.defaultPost;
  @observable headerList: Catalog = [];

  @observable loading = true;

  @computed
  get allContent(): string {
    return this.post.section + this.post.rest;
  }

  @computed
  get pageUrl(): string {
    return `${location.protocol}//${location.host}${location.pathname}`;
  }

  @computed
  get affixIndexList(): boolean {
    return !this.appStore.isHeaderTransparent;
  }

  @action('set default')
  setDefault(): void {
    this.post = this.defaultPost;
    this.loading = true;
    this.headerList = [];
  }

  @action('get post')
  getPost(postId: string): void {
    this.loading = true;
    this.http.get<IJsonReturn<IPost>>(`/api/posts/${postId}`)
      .subscribe((meta) => {
        if (meta.ret) {
          this.post = meta.data;
          this.title.setTitle(`${this.post.title} - ${this.appStore.pageTitle}`);
          this.reportView(this.post.id);
        } else {
        }
        this.loading = false;
      });
  }

  reportView(postId: string): void {
    this.http.get(`/api/posts/report/${postId}`).subscribe();
  }


  @action('active index')
  activeIndex(indexId: string): void {
    this.headerList.forEach(item => {
      item.active = false;
    });
    const index = this.headerList.findIndex(item => item.id === indexId);
    this.headerList[index].active = true;
  }

  scrollTo(to: number, duration: number): void {
    const scrollBody = document.documentElement;
    const start = scrollBody.scrollTop;
    const change = to - start;
    const increment = 5;

    const animateScroll = (elapsedTime: number) => {
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

  easeInOut(currentTime: number, start: number, change: number, duration: number): number {
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
  }
}
