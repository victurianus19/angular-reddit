import { Pipe, PipeTransform } from '@angular/core';
import { Article } from './article.model';

@Pipe({
  name: 'articleSort',
  pure: false
})
export class ArticleSortedPipe implements PipeTransform {
  public transform(articles: Article[], args?: any[]) {
    let arts: Article[];
    arts = this.sortedArticles(articles);

    return arts;
  }

  public sortedArticles(articles: Article[]): Article[] {
    return articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
