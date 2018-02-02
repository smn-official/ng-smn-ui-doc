import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { UiToolbarService } from 'ng-smn-ui';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['../../home/home.component.scss', './chips.component.scss']
})
export class ChipsComponent implements OnInit, AfterViewInit {
    chips;
    selectedChips;

  constructor(private titleService: Title,
              private toolbarService: UiToolbarService) {
      this.chips = [];
      this.selectedChips = [];
  }

  ngOnInit() {
      this.loadChips();
  }

  ngAfterViewInit() {
      this.titleService.setTitle('Chips');
      this.toolbarService.set('Chips');

  }
  loadChips() {
      const chips = [
          {
              id: 1,
              name: 'Teste 1'
          },
          {
              id: 2,
              name: 'Teste 2'
          },
          {
              id: 3,
              name: 'Teste 3'
          }
      ];
      this.selectedChips.forEach(selectedChip => {
          chips.forEach((chip, i) => {
              if (chip.id === selectedChip.id) {
                  chips.splice(i, 1);
              }
          });
      });
      this.chips = chips;
  }

  chipSelect(chip) {
      this.selectedChips.push(chip);
      this.chips.searchState = '';
  }

  removeChip(chip) {
      this.selectedChips.splice(this.selectedChips.indexOf(chip), 1);
  }

}
