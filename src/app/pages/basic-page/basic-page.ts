import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocalService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe
  ],
  templateUrl: './basic-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPage {

  localeService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID))

  nameLower = signal('uriel');
  nameUpper = signal('URIEL');
  fullName = signal('uRiEl QuIrOz');

  customDate = signal( new Date() )

  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set( new Date() );
    }, 1000);

    onCleanup(() => {
      clearInterval(interval)
    })

  })

  changeLocale(locale: AvailableLocale) {
    console.log({ locale })
    this.localeService.changeLocale(locale);
  }
}
