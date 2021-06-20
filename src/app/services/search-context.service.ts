import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchContextService {
  
  /*
  private resultsSearchBehavior = new BehaviorSubject<Product[]>(
    new Array<Product>()
  );
  reultsSearch = this.resultsSearchBehavior.asObservable();
  */

  filteredOptions: Observable<Product[]>;

  constructor() { }
}
