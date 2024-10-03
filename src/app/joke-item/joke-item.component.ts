import { Component, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-item',
  standalone: true,
  imports: [],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.css'
})
export class JokeItemComponent {

  @Input('joke') joke: Joke;

}
