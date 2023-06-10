import { Injectable } from '@angular/core';
import * as ArticlesFromFile from '../assets/articles.json';
import { Article } from './models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

    articles: Article[];
    
    constructor() {
        this.articles = Article.MapArray(ArticlesFromFile);
    }

    public getArticles() : Article[] { return this.articles.slice(); }

    public getArticle(id: number) : Article | undefined { return this.articles.find(x => x.id==id); }
}
