import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onProcess',
  templateUrl: './onProcess.component.html',
  styleUrls: ['./onProcess.component.css']
})
export class OnProcessComponent {

  @Input() embedded: boolean | undefined;

}
