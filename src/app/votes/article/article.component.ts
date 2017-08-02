import { Component } from '@angular/core';

import { Article } from '../Article';

@Component({
    selector: 'article',
    host: {
        class: 'row'
    },
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    inputs: ['article']
})
export class ArticleComponent {
    article: Article;

    constructor() {

    }

    voteUp():boolean {
        this.article.voteUp();  
        return false;
    }

    voteDown():boolean {
        this.article.voteDown();    
        return false;
    }
}