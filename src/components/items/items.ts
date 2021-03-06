import { Component, Input } from '@angular/core';
import { Items } from '../../model/Items';

/**
 * Generated class for the Items component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsComponent {
  
  @Input() items: Items;

}
