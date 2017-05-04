import { Component, Input } from '@angular/core';
import { Item } from '../../model/Item';

/**
 * Generated class for the Item component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {
  
  @Input() item: Item;

}
