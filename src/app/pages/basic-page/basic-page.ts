import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {
  nameLower = signal('uriel');
  nameUpper = signal('URIEL');
  fullName = signal('uRiEl QuIrOz');

  customDate = signal( new Date() )

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set( new Date() );
      console.log('tick')
    }, 1000);

    onCleanup(() => {
      clearInterval(interval)
    })

  })
}
