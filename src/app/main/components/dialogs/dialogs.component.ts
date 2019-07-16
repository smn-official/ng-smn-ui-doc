import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';
import { UiDialog } from 'ng-smn-ui'

@Component({
    selector: 'app-dialogs',
    templateUrl: './dialogs.component.html',
    styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit, AfterViewInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Dialogs');
        this.toolbarService.set('Dialogs');
    }

    openWithService(dialogRef) {
        UiDialog.show(dialogRef);
    }

    closeWithService() {
        UiDialog.hide();
    }

}
