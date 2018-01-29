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

    //DEMO 2
    personagens: any[];
    personagensFiltrados: any[];
    searchPersonagens;
    //
    //
    valuePersonagem;

    constructor(private elementRef: ElementRef) {
        this.codes = [];
        this.codes[10] = `<div id="gist86052914" class="gist">    <div class="gist-file">      <div class="gist-data">        <div class="js-gist-file-update-container js-task-list-container file-box">  <div id="file-autocompletecomdoisatributos-html" class="file">      <div itemprop="text" class="blob-wrapper data type-html">      <table class="highlight tab-size js-file-line-container" data-tab-size="8">      <tr>        <td id="file-autocompletecomdoisatributos-html-L1" class="blob-num js-line-number" data-line-number="1"></td>        <td id="file-autocompletecomdoisatributos-html-LC1" class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">ui-input-container</span>&gt;</td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L2" class="blob-num js-line-number" data-line-number="2"></td>        <td id="file-autocompletecomdoisatributos-html-LC2" class="blob-code blob-code-inner js-file-line">  &lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L3" class="blob-num js-line-number" data-line-number="3"></td>        <td id="file-autocompletecomdoisatributos-html-LC3" class="blob-code blob-code-inner js-file-line">        [(<span class="pl-e">ngModel</span>)]=<span class="pl-s"><span class="pl-pds">&quot;</span>searchPersonagens<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L4" class="blob-num js-line-number" data-line-number="4"></td>        <td id="file-autocompletecomdoisatributos-html-LC4" class="blob-code blob-code-inner js-file-line">        [<span class="pl-e">modelValue</span>]=<span class="pl-s"><span class="pl-pds">&quot;</span>valuePersonagem<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L5" class="blob-num js-line-number" data-line-number="5"></td>        <td id="file-autocompletecomdoisatributos-html-LC5" class="blob-code blob-code-inner js-file-line">        <span class="pl-e">uiInput</span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L6" class="blob-num js-line-number" data-line-number="6"></td>        <td id="file-autocompletecomdoisatributos-html-LC6" class="blob-code blob-code-inner js-file-line">        <span class="pl-e">uiAutocomplete</span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L7" class="blob-num js-line-number" data-line-number="7"></td>        <td id="file-autocompletecomdoisatributos-html-LC7" class="blob-code blob-code-inner js-file-line">        (<span class="pl-e">input</span>)=<span class="pl-s"><span class="pl-pds">&quot;</span>searchPersonagem()<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L8" class="blob-num js-line-number" data-line-number="8"></td>        <td id="file-autocompletecomdoisatributos-html-LC8" class="blob-code blob-code-inner js-file-line">        (<span class="pl-e">focus</span>)=<span class="pl-s"><span class="pl-pds">&quot;</span>searchPersonagem()<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L9" class="blob-num js-line-number" data-line-number="9"></td>        <td id="file-autocompletecomdoisatributos-html-LC9" class="blob-code blob-code-inner js-file-line">        [<span class="pl-e">primary</span>]=<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;ator&#39;<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L10" class="blob-num js-line-number" data-line-number="10"></td>        <td id="file-autocompletecomdoisatributos-html-LC10" class="blob-code blob-code-inner js-file-line">        [<span class="pl-e">secondary</span>]=<span class="pl-s"><span class="pl-pds">&quot;</span>&#39;personagem&#39;<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L11" class="blob-num js-line-number" data-line-number="11"></td>        <td id="file-autocompletecomdoisatributos-html-LC11" class="blob-code blob-code-inner js-file-line">        <span class="pl-e">theme-class</span>=<span class="pl-s"><span class="pl-pds">&quot;</span>dark<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L12" class="blob-num js-line-number" data-line-number="12"></td>        <td id="file-autocompletecomdoisatributos-html-LC12" class="blob-code blob-code-inner js-file-line">        [<span class="pl-e">list</span>]=<span class="pl-s"><span class="pl-pds">&quot;</span>personagensFiltrados<span class="pl-pds">&quot;</span></span></td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L13" class="blob-num js-line-number" data-line-number="13"></td>        <td id="file-autocompletecomdoisatributos-html-LC13" class="blob-code blob-code-inner js-file-line">        [<span class="pl-e">loading</span>]=<span class="pl-s"><span class="pl-pds">&quot;</span>loading<span class="pl-pds">&quot;</span></span>&gt;</td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L14" class="blob-num js-line-number" data-line-number="14"></td>        <td id="file-autocompletecomdoisatributos-html-LC14" class="blob-code blob-code-inner js-file-line">  &lt;<span class="pl-ent">label</span>&gt;Chaves&lt;/<span class="pl-ent">label</span>&gt;</td>      </tr>      <tr>        <td id="file-autocompletecomdoisatributos-html-L15" class="blob-num js-line-number" data-line-number="15"></td>        <td id="file-autocompletecomdoisatributos-html-LC15" class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">ui-input-container</span>&gt;</td>      </tr></table>  </div>  </div>  </div>      </div>      <div class="gist-meta">        <a href="https://gist.github.com/GabrielFerreir/056ac2a505badc271764ed09a3316bde/raw/ffca4b092bd376f0f5037e48173b3062fa2d7f18/autocompleteComDoisAtributos.html" style="float:right">view raw</a>        <a href="https://gist.github.com/GabrielFerreir/056ac2a505badc271764ed09a3316bde#file-autocompletecomdoisatributos-html">autocompleteComDoisAtributos.html</a>        hosted with &#10084; by <a href="https://github.com">GitHub</a>      </div>    </div></div>`;

        // DEMO 1
        this.teams = [ 'Santos', 'São Paulo', 'Palmeiras' ];
        this.teamsFiltrados = this.teams;

        //DEMO 2
        this.personagens = [
            {
                ator: 'Roberto Gómez Bolaños',
                personagem: 'Chaves'
            },
            {
                ator: 'Ramón Valdés',
                personagem: 'Seu Madruga'
            },
            {
                ator: 'Florinda Meza',
                personagem: 'Dona Florinda'
            }
        ];
        this.personagensFiltrados = this.personagens;
    }

    ngOnInit() {
        this.codes[0] = `constructor() {
            this.personagens = [
                {
                    ator: 'Roberto Gómez Bolaños',
                    personagem: 'Chaves'
                },
                {
                    ator: 'Ramón Valdés',
                    personagem: 'Seu Madruga'
                },
                {
                    ator: 'Florinda Meza',
                    personagem: 'Dona Florinda'
                }
            ]
            this.personagensFiltrados = this.personagens;
        }`;
        this.codes[1] = ``
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
                return (item.indexOf(this.searchTeams) !== -1)  ;
            });
        }, 300);
    }
    finish(item) {
        console.log(item); // Mostra o item selecionado
    }

    //DEMO 2

    searchPersonagem() {
        clearInterval(this.timing);
        this.loading = true;
        this.timing = setTimeout(() => {
            this.loading = false;
            if (!this.searchPersonagens) {
                this.personagensFiltrados = this.personagens;
                return;
            }
            this.personagensFiltrados = this.personagens.filter(item => {
                return (item.ator.indexOf(this.searchPersonagens) !== -1) ||
                    (item.personagem.indexOf(this.searchPersonagens) !== -1);
            })
        }, 300);
    }

    loadMorePersogens() {

    }

}
