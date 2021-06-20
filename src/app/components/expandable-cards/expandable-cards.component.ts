import {Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';

@Component({
  selector: 'app-expandable-cards',
  templateUrl: './expandable-cards.component.html',
  styleUrls: ['./expandable-cards.component.scss']
})

export class ExpandableCardsComponent implements OnInit {
  @Input() product: Product;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '250px',
    });
  }

}