import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService, UiSnackbar } from 'ng-smn-ui';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, AfterViewInit {

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Snackbars & toasts');
        this.toolbarService.set('Snackbars & toasts');
    }

    showSnack() {
        UiSnackbar.hide();
        UiSnackbar.show({
            text: 'SMN UI compilado com sucesso'
        });
    }

    showSnackInfinity() {
        UiSnackbar.show({
            text: 'SMN UI compilado com sucesso',
            duration: Infinity,
            actionText: 'Fechar',
            action: (close) => {
                close();
            },
        });
    }

    showSnackWithAction() {
        UiSnackbar.show({
            text: 'Vou demorar 7s para sair da tela, click no botão para me fechar',
            actionText: 'Fechar',
            action: (close) => {
                close();
                alert('Exec action');
            },
            duration: 7000
        });
    }

    closeSnack() {
        UiSnackbar.hide();
    }

}
