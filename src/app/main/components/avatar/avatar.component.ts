import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

    info: any;

    constructor() {
        this.info = {
            name: 'Jhon Doe',
            color: '#69F0AE',
            image: 'http://gameranx.com/wp-content/uploads/2016/02/No-Mans-Sky-4-K-Wallpaper.jpg'
        };
    }

    ngOnInit() {
    }

}
