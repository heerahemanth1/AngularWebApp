import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticlesService } from '../articles.service';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

    article: Article;

    constructor(
        private articlesService: ArticlesService,
        private route: ActivatedRoute,
    ) {
        this.article = this.articlesService.getArticle(Number(this.route.snapshot.paramMap.get('id')))!;
    }
}
