import {AfterViewInit, Component, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['../../home/home.component.scss', './autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
    codes: any[];

    // DEMO 01
    teams: string[];
    teamsFiltrados: string[];
    searchTeams;
    loading;
    timing;
    valueTeam;

    // DEMO 2
    actors: any[];
    actorsFiltred: any[];
    searchActors: string;
    loading2;
    timing2;
    selectValue;

    // DEMO 3
    searchObject;
    objectValue;
    objects: any[];
    objectsFiltred: any[];
    loading3;
    timing3;


    constructor(private elementRef: ElementRef) {
        // DEMO 1
        this.teams = ['Santos', 'São Paulo', 'Palmeiras'];
        this.teamsFiltrados = this.teams;

        // DEMO 2
        this.actors = [
            {actor: 'Ramón Valdês', character: 'Seu Madruga'},
            {actor: 'Inocencio Jirafales', character: 'Professor Girafales'},
            {actor: 'Professor Girafales', character: 'Seu Madruga'},
            {actor: 'Frederico Mátalas', character: 'Quico'}];
        this.actorsFiltred = this.actors;

        // DEMO 3
        this.objects = ['Luz', 'Lapis', 'Borracha', 'Garrafa', 'Apontador', 'Lixo', 'Caixa', 'Livro', 'Fone'];
        this.objectsFiltred = this.objects;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    // DEMO 1
    search() {
        clearInterval(this.timing);
        this.loading = true;
        this.timing = setTimeout(() => {
            this.loading = false;
            if (!this.searchTeams) {
                this.teamsFiltrados = this.teams;
                return;
            }
            this.teamsFiltrados = this.teams.filter(item => {
                return (item.indexOf(this.searchTeams) !== -1);
            });
        }, 300);
    }

    finish(item) {
        console.log(item); // Mostra o item selecionado
    }

    // DEMO 2
    searchActor() {
        clearInterval(this.timing2);
        this.loading = true;
        this.timing2 = setTimeout(() => {
            this.loading = false;
            if (!this.searchActors) {
                this.actorsFiltred = this.actors;
                return;
            }
            this.actorsFiltred = this.actors.filter(item => {
                return (item.actor.indexOf(this.searchActors) !== -1);
            });
        }, 300);
    }

    // DEMO 3

    searchObjects() {
        clearInterval(this.timing3);
        this.loading = true;
        this.timing3 = setTimeout(() => {
            this.loading = false;
            if (!this.searchObject) {
                this.objectsFiltred = this.objects;
                return;
            }
            this.objectsFiltred = this.objects.filter(item => {
                return (item.indexOf(this.searchObject) !== -1);
            });
        }, 300);
    }

    loadMoreObjects() {
        this.objectsFiltred = [...this.objects, ...['Novo item', 'Novo item', 'Novo item', 'Novo item']];
        this.objects = [...this.objects, ...['Novo item', 'Novo item', 'Novo item', 'Novo item']];
    }

}
