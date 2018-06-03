import { Component, ElementRef, ViewChild, Input, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-script-hack',
    template: `<div #script style.display="none">
    <ng-content></ng-content>
  </div>`
})
export class ScriptHackComponent implements AfterViewInit {

    @Input()
    src: string;

    @Input()
    type: string;

    @Input()
    charSet: string;

    @ViewChild('script') script: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document
    ) {

    }

    convertToScript() {
        const element = this.script.nativeElement;
        const script = this.document.createElement('script');
        script.type = this.type || 'text/javascript';
        script.charset = this.charSet || 'utf-8';
        if (this.src) {
            script.async = true;
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        const parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    }

    ngAfterViewInit() {
        this.convertToScript();
    }
}
