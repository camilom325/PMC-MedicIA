import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'terminal-component',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  @Input() text!: string;

  ngOnInit(): void {
    const typewriter: HTMLElement | null = document.querySelector('.typewriter')!;
    this.textTypingEffect(this.text, typewriter);
  }

  textTypingEffect(text: string, element: HTMLElement, i = 0):void {
    element.innerHTML += text[i];

    if (i === text.length - 1) {
      return;
    }

    setTimeout(() => { this.textTypingEffect(text, element, i + 1) }, 30);

  }

}
