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
    src = '';

    @Input()
    type = '';

    @ViewChild('script') script?: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) {

    }

    convertToScript(): void {
        const element = this.script?.nativeElement;
        const script = this.document.createElement('script');
        script.type = this.type || 'text/javascript';
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

    ngAfterViewInit(): void {
        this.convertToScript();
    }
}
