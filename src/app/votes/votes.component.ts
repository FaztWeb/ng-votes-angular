import { Component } from '@angular/core';

import { Article } from './Article';

@Component({
    selector: 'votes-app',
    templateUrl: './votes.component.html',
    styleUrls: ['./votes.component.css']
})
export class VotesApp {
    title:string = "Votes app";
    articles: Article[];
    
    constructor() {
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fazt Web', 'http://faztweb.com', 3),
            new Article('Faz Blog', 'http://blog.faztweb.com'),
        ]
    }

    addArticle(
            title: HTMLInputElement,
            link:HTMLInputElement
        ):boolean {
        console.log(`Article Added ${title.value}, link: ${link.value}`);
        this.articles.push(
            new Article(title.value, link.value)
        );
        title.value = '';
        link.value = '';
        return false;
    }
    
    sortedArticles(): Article[] {
        return this.articles.sort((a: Article, b:Article) => b.votes - a.votes);
    }
}


