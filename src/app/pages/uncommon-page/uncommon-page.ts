import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../../components/card/card";

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage { }
