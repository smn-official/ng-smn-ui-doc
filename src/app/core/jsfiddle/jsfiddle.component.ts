import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-jsfiddle',
    templateUrl: './jsfiddle.component.html',
    styleUrls: ['./jsfiddle.component.scss']
})
export class JsfiddleComponent implements OnInit, AfterViewInit {

    @Input() id: string;
    @Input() tabs: string;
    @Input() height: string;

    url: any;

    constructor(public sanitizer: DomSanitizer, public changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.tabs = this.tabs ? this.tabs : 'html,css,js,result';
        const jsfiddleUrl = `https://jsfiddle.net/${this.id}/embedded/${this.tabs}/?accentColor=00e676&bodyColor=fff`;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(jsfiddleUrl);
        this.changeDetector.detectChanges();
    }


}
