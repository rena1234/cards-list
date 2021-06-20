import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchContextService {
  
  filteredOptions: Observable<Product[]>;

  constructor() { }
}
