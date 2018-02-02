import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {UiToolbarService, UiElement} from 'ng-smn-ui';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['../../home/home.component.scss', './data-tables.component.scss']
})
export class DataTablesComponent implements OnInit, AfterViewInit {
    list: Array<any>;
    searchOpen: boolean;
    searchText: string;
    orderBy = [];

  constructor(private element: ElementRef,
              private titleService: Title,
              private toolbarService: UiToolbarService) {
      this.list = [
          {
              name: 'Spider',
              surname: 'Man',
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Captain',
              surname: 'Marvel',
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Hulk',
              surname: undefined,
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Thor',
              surname: undefined,
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Iron',
              surname: 'Man',
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Luke',
              surname: 'Cage',
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Black',
              surname: 'Widow',
              age: Math.floor((Math.random() * 30) + 20)
          },
          {
              name: 'Daredevil',
              surname: 'of Hell\'s Kitchen',
              age: Math.floor((Math.random() * 30) + 20)
          }
      ];
  }

  ngOnInit() {
  }

ngAfterViewInit() {
    this.titleService.setTitle('Color pickers');
    this.toolbarService.set('Color pickers');
}

    toggleSearch() {
        const inputSearch = this.element.nativeElement.querySelectorAll('input[name="searchText"]')[0];

        if (this.searchOpen) {
            this.searchOpen = false;
            UiElement.closest(inputSearch, 'form').style.right = '';
        } else {
            this.searchOpen = true;
            UiElement.closest(inputSearch, 'form').style.right = UiElement.closest(inputSearch, '.align-right').clientWidth + 'px';

            setTimeout(() => {
                inputSearch.focus();
            }, 280);
        }
    }
    toggleOrderBy(column: string) {
        if (this.orderBy.includes(column + '-DESC')
            || this.orderBy.includes(column + '-ASC')) {
            if (this.orderBy.includes(column + '-ASC')) {
                this.orderBy.push(column + '-DESC');
                this.orderBy.splice(this.orderBy.indexOf(column + '-ASC'), 1);
            } else if (this.orderBy.includes(column + '-DESC')) {
                if (this.orderBy.includes(column + '-DESC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-DESC'), 1);
                }
                if (this.orderBy.includes(column + '-ASC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-ASC'), 1);
                }
            }
        } else {
            this.orderBy.push(column + '-ASC');
        }
        console.log(this.orderBy);
        console.log('Ordenação precisa fazer uma requisição para funcionar');
    }
}
