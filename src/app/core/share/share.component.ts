import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-share',
  template: `
  <div class="bshare-custom icon-medium center">
    <div class="bsPromo bsPromo2"></div>
    <a title="分享到" href="http://www.bShare.cn/" id="bshare-shareto" class="bshare-more">
      分享到
    </a>
    <a title="分享到QQ空间" class="bshare-qzone"></a>
    <a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a>
    <a title="分享到网易微博" class="bshare-neteasemb" href="javascript:void(0);"></a>
    <a title="分享到腾讯微博" class="bshare-qqmb"></a>
    <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
  </div>
  `,
  styleUrls: ['./share.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
