import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';

const client1 = {
  name: 'Uriel',
  gender: 'male',
  age: 30,
  address: 'Nuevo Leon, México'
}

const client2 = {
  name: 'Carolina',
  gender: 'female',
  age: 30,
  address: 'Sinaloa, México'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {

  // i18Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if( this.client() == client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })
  clients = signal([
    'Ana',
    'Yuri',
    'Jenny',
    'Thalia',
    'Selena',
    'Julieta',
    'Natalia',
    'Danna',
    'Belinda'
  ])

  deleteClient() {
    this.clients.update(prev => prev.slice(1))
  }

}
