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

}
