import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchContextService } from 'src/app/services/search-context.service';
import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let searchContextService: SearchContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      providers: [SearchContextService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    searchContextService = TestBed.inject(SearchContextService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
