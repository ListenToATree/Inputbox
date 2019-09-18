import {Component, ContentChild, ElementRef, HostBinding, Input,} from '@angular/core';
import {InputRefDirective} from '../input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent {
  @Input() icon: string;

  @ContentChild(InputRefDirective, {static: false})
  inputDirective: InputRefDirective;

  @ContentChild('inputField', {read: ElementRef, static: false})
  inputField: any;

  @HostBinding('class.focus')
  get focus() {
    return this.inputDirective ? this.inputDirective.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  onClick() {
    this.inputField.nativeElement.value = '';
  }
}
