import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';

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

    @ViewChild('script') script: ElementRef;

    convertToScript() {
        const element = this.script.nativeElement;
        const script = document.createElement('script');
        script.type = this.type ? this.type : 'text/javascript';
        if (this.src) {
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
