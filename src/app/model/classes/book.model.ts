import { Item } from '../model-interface/response/item.model';


export class Book implements Book {

    isbn: string;
    isbn13: string;
    title: string;
    author: string;
    publisher: string;
    genre: string;
    description: string;
    publishDate: Date;
    imageUrl: string;

    constructor(responseItem: Item) {
        if(responseItem.volumeInfo.industryIdentifiers !== undefined){
            for (let identifier of responseItem.volumeInfo.industryIdentifiers) {
                switch (identifier.type) {
                    case 'ISBN_13':
                        this.isbn13 = identifier.identifier;
                        break;
                    case 'ISBN_10':
                        this.isbn = identifier.identifier;
                        break;
                    default:
                        this.isbn = null;
                        this.isbn13 = null;
                }
            }
        }

        this.title = responseItem.volumeInfo.title ?? 'undefined';

        if (typeof responseItem.volumeInfo.authors !== 'undefined') {
            this.author = responseItem.volumeInfo.authors[0];
        } else {
            this.author = 'undefined';
        }

        this.publisher = responseItem.volumeInfo.publisher ?? 'undefined';

        if (typeof responseItem.volumeInfo.categories !== 'undefined') {
            this.genre = responseItem.volumeInfo.categories[0];
        } else {
            this.genre = 'undefined';
        }


        this.description = responseItem.volumeInfo.description ?? 'undefined';


        this.publishDate = new Date(responseItem.volumeInfo.publishedDate);



        if (typeof responseItem.volumeInfo.imageLinks !== 'undefined') {
            this.imageUrl = responseItem.volumeInfo.imageLinks.thumbnail;
        } else {
            this.imageUrl = 'undefined';
        }
    }


}