import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['../../home/home.component.scss', './autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
    codes: any[];

    constructor() {
        this.codes = [];
    }

    ngOnInit() {
        this.codes[0] = ``;

        this.codes[1] = ``
    }

}
