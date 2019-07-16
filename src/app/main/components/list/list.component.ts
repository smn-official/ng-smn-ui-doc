import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

    menuList: any[];
    itemModel: any;

    constructor(
        private titleService: Title,
        private toolbarService: UiToolbarService
    ) {
        this.itemModel = {
            parentId: 'idMae',
            name: 'nome'
        };

        this.menuList = [
            {
                id: '9lT2QdrpI64',
                idMae: null,
                nome: 'Administração',
                url: null,
                icon: {
                    material: 'home'
                }
            },
            {
                id: 'bXDW7UY-RGE',
                idMae: 'uhqGQJ7GzEQ',
                nome: 'Assunto Contrato',
                url: 'assunto-contrato'
            },
            {
                id: 'C3Ns7GWgEBM',
                idMae: 't9CfntxgLmI',
                nome: 'Cargo',
                url: null
            },
            {
                id: '-XE0EwaskVE',
                idMae: 'uhqGQJ7GzEQ',
                nome: 'Cliente',
                url: 'cliente'
            },
            {
                id: 'hrR3dEI9USU',
                idMae: 't9CfntxgLmI',
                nome: 'Colaborador',
                url: null
            },
            {
                id: 'uhqGQJ7GzEQ',
                idMae: null,
                nome: 'Comercial',
                url: null,
                icon: {
                    img: `http://i.imgur.com/qWA46Se.png`
                }
            },
            {
                id: 'hTlXx7XzS08',
                idMae: '9lT2QdrpI64',
                nome: 'Empresa',
                url: null,
                icon: true
            },
            {
                id: 'BJXpy8TrIXk',
                idMae: '-XE0EwaskVE',
                nome: 'Grupo Empresarial',
                url: 'grupo-empresarial'
            },
            {
                id: 't9CfntxgLmI',
                idMae: null,
                nome: 'Recursos Humanos',
                url: null
            },
            {
                id: 'Awdn-Mf6B-E',
                idMae: '9lT2QdrpI64',
                nome: 'Unidade',
                url: null,
                icon: {
                    material: 'home'
                }
            }
        ];
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Lists');
        this.toolbarService.set('Lists');
    }

}
