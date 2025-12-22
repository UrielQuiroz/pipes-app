import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroColorPipe } from '../../pipes/color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ toggleCasePipe, CanFlyPipe, heroColorPipe ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Uriel Quiroz')
  upperCase = signal(false);

  heroes = signal(heroes);
}
