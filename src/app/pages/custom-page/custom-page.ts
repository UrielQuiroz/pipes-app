import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroColorPipe } from '../../pipes/color.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { heroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ toggleCasePipe, CanFlyPipe, heroColorPipe, heroTextColorPipe, TitleCasePipe, heroCreatorPipe ],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPage {
  name = signal('Uriel Quiroz')
  upperCase = signal(false);

  heroes = signal(heroes);
}
