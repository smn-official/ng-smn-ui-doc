import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiToolbarService} from "ng-smn-ui";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@shared/translate/translate.service";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit, AfterViewInit {
    info: any;
    translate: any;

    constructor(private toolbarService: UiToolbarService,
                private titleService: Title,
                private translateService: TranslateService ) {
        this.translate = {
            labels: {}
        };
        this.info = {
            name: 'Barry Allen',
            color: '#F44336',
            image: 'https://imagensemoldes.com.br/wp-content/uploads/2018/03/The-Flash-Logo-Vetor-e-PNG.png'
        };
    }

    async ngOnInit() {
        this.translate = await this.translateService.getLanguageData('avatar');
    }

    ngAfterViewInit(): void {
        this.titleService.setTitle('Avatar');
        this.toolbarService.set('Avatar');
    }

    getHtml() {
        return `<!-- With picture -->
<ui-avatar [image]="info.image"
                   [name]="info.name"
                   [color]="info.color"
                   [size]="80"></ui-avatar>

<!-- Without picture -->
<ui-avatar [name]="info.name"
                   [color]="info.color"
                   [size]="50"></ui-avatar>
`;
    }

    getTypescript() {
        return `import { Component } from '@angular/core';

@Component({
  selector: 'demo-avatar',
  templateUrl: 'demo-avatar.component.html',
  styleUrls: ['demo-avatar.component.scss'],
})
export class DemoAvatarComponent {
  image: string;
  name: string;
  color: string;
  size: number;
}`;
    }
}
