import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    title = 'AngularWebApp';
    articles: Article[] = [];

    constructor(private readonly articlesService: ArticlesService) {}

    ngOnInit() {
        this.articles = this.articlesService.getArticles();
    }
}
