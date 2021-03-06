import { Component, OnInit } from '@angular/core';
import { SearchContextService } from 'src/app/services/search-context.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private searchContextService: SearchContextService) { }
  products: Product[] = [];
  contextUpdateCounter = 0;

  ngOnInit(): void {
    this.searchContextService.filteredOptions.subscribe( filteredOptions => {
      this.contextUpdateCounter += 1;
      return this.products = filteredOptions
    });
  }
}