import { Component } from '@angular/core';
import { Book } from './books/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade-cadastro-livros';

  books: Book[] = []

  onBookAdded(book) {
    this.books = [...this.books, book]
  }

}
