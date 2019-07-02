import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-input-files',
    templateUrl: './input-files.component.html',
    styleUrls: ['./input-files.component.scss']
})
export class InputFilesComponent implements OnInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Input files');
        this.toolbarService.set('Input files');
    }

    read(file, item, index) {
        console.log(item, index);
    }

    changeFile(listFile: FileList, invalid) {
        // console.log(listFile, invalid);
    }

    error(file, errors, index) {
        // console.log(file, errors, index)
    }

}
