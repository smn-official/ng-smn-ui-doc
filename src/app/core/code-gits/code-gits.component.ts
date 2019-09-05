import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'code-gits',
  templateUrl: './code-gits.component.html',
  styleUrls: ['./code-gits.component.css']
})
export class CodeGitsComponent implements AfterViewInit {

  @Input() id: string;
  @ViewChild('code', null) code: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    this.code.nativeElement.id = this.id.split('/')[1];
    const doc = this.code.nativeElement.contentDocument || this.code.nativeElement.contentElement.contentWindow;
    const content = `
        <body 
        onload="parent.document.getElementById('${this.code.nativeElement.id}')
        .style.height = (document.querySelector('.gist-file').scrollHeight + 26) + 'px'">
          <script type="text/javascript" src="https://gist.github.com/${this.id}.js"></script>
        </body>`;
    doc.open();
    doc.write(content);
    doc.close();
    this.code.nativeElement.style.width = '100%';
    this.code.nativeElement.style.border = 'none';
  }
}
