import {Component, ElementRef, OnInit} from '@angular/core';
import {UiToolbarService, UiElement} from 'ng-smn-ui';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['../../home/home.component.scss', './data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {
    list: Array<any>;
    searchOpen: boolean;
    searchText: string;

  constructor(private element: ElementRef) {
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
}
