import { Component, HostListener, OnInit } from '@angular/core';
import { Ill } from './ill.interface';

declare global {
  interface Window {
    ill: any;
  }
}

@Component({
  selector: 'app-illustrated',
  templateUrl: './illustrated.component.html',
  styleUrls: ['./illustrated.component.css']
})

export class IllustratedComponent implements OnInit{
  private ill: any;

  ngOnInit() {
    // Initialize ill object properties
    // window.onload = () => {

    Array.from(document.querySelectorAll('.record, .calculation')).forEach(el => {
        (el as HTMLElement).onclick = (event: MouseEvent) => {
          if (el === event.target && typeof event.offsetY === 'number' && event.offsetY < 60) {
            this.ill.toggleRecord(el, event);
          } else {
            this.ill.selectRecord(el, event);
          }
        };
    });

    Array.from(document.querySelectorAll('.rec-label')).forEach(el => {
      (el as HTMLElement).onclick = (event: Event) => {
        this.ill.toggleRecord(el.parentNode, event);
      };
    });

    Array.from(document.querySelectorAll('.record')).forEach(el => {
      this.ill.addToggleAnnotations(el);
    });

    Array.from(document.querySelectorAll('codesample')).forEach(el => {
      this.ill.addShowCode(el);
    });

    this.ill.injectLabels();
    

    window.onkeyup = (e: KeyboardEvent) => {
      let els: HTMLElement[];
      if (e.keyCode === 27) {
        els = Array.from(document.querySelectorAll('.record.annotate'));
        if (els.length) {
          els.forEach(rec => rec.classList.remove('annotate'));
        } else {
          this.ill.unselectAllRecords();
        }
      }
    };
    

    if (typeof window !== 'undefined') {
      window.ill = this.ill;
    }

  }



  constructor() {
    this.ill = {};
    this.ill.elementIsVisible = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect()
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
    };

    this.ill.ensureElementInView = (el: HTMLElement) => {
      if (!this.ill.elementIsVisible(el)) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    this.ill.unselectAllRecords = () => {
      const records = Array.from(document.querySelectorAll('.illustrated .record.selected, .illustrated .calculation.selected'));
      for (const record of records) {
        record.classList.remove('selected');
      }
    };

    this.ill.toggleRecord = (element: HTMLElement, event: Event) => {
      const selected = element.classList.contains('selected');
      this.ill.unselectAllRecords();

      if (!selected) {
        element.classList.add('selected');
      } else {
        this.ill.closeAllCode();
      }

      event.stopPropagation();
      this.ill.ensureElementInView(element);
    };

    this.ill.selectRecord = (element: HTMLElement, event: Event) => {
      this.ill.unselectAllRecords();
      element.classList.add('selected');
      event.stopPropagation();
      this.ill.ensureElementInView(element);
    };

    this.ill.showCode = (element: HTMLElement, event: Event) => {
      if (element.parentNode) {
        (element.parentNode as HTMLElement).classList.add('show');
      }
      event.stopPropagation();
    };

    this.ill.closeAllCode = () => {
      const codeSamples = Array.from(document.querySelectorAll('codesample.show'));
      for (const codeSample of codeSamples) {
        codeSample.classList.remove('show');
      }
    };

    this.ill.toggleAnnotate = (el: HTMLElement) => {
      el.classList.toggle('annotate');
    };

    this.ill.cancel = (event: Event) => {
      if (event) {
        event.stopPropagation();
      }
    };
    this.ill.addShowCode = (el: HTMLElement) => {
      const showCodeTmplElement = document.getElementById('showCodeTmpl');
      if (showCodeTmplElement) {
        const showCodeTmpl = showCodeTmplElement.innerHTML;
        el.innerHTML = showCodeTmpl + el.innerHTML;
      }
    };

    this.ill.addToggleAnnotations = (record: HTMLElement) => {
      const expl = record.querySelector('.rec-explanation') as Element;
      if (expl && expl instanceof Element) {
        const annotateTmpl = document.getElementById('annotateTmpl')?.cloneNode(true);
        if (annotateTmpl) {
          expl.insertAdjacentElement('afterend', annotateTmpl as Element);
        }
      }
    };

    this.ill.injectLabels = () => {
      const elements = Array.from(document.querySelectorAll('.string > .explanation, .decryption > .explanation'));
      for (const element of elements) {
        const expl = element;
        const parentNode = expl.parentNode;
        if (parentNode) {
          const label = parentNode.querySelector('.label');
          if (label) {
            const labelText = label.textContent;
            if (labelText !== null) {
              const h4 = document.createElement('h4');
              const labelTextNode = document.createTextNode(labelText);
              h4.appendChild(labelTextNode);
              expl.insertAdjacentElement('afterbegin', h4);
            }
          }
        }
      }
    };

  }

  
  
}
