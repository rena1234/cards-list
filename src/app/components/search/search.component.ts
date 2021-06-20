import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/mocks/products-mock';
import { SearchContextService } from 'src/app/services/search-context.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  options = products;

  searchControl = new FormControl();

  constructor(public searchContextService: SearchContextService) { }

  ngOnInit(): void {
    this.searchContextService.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.productName),
        map(productName => productName ? this._filter(productName) : [])
      );
  }
  
  displayFn(product: Product): string {
    return product && product.productName? product.productName: '';
  }

  private _filter(name: string): Product[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.productName.toLowerCase().indexOf(filterValue) === 0);
  }
}
