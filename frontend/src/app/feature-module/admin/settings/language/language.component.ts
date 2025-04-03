import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { languages } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
})
export class LanguageComponent {
  public routes = routes;
  public languages: Array<languages> = [];
  constructor(private data: DataService) {
    this.languages = this.data.languages;
  }
  
}
