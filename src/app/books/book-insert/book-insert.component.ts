import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})

export class BookInsertComponent {

  @Output() bookAdded = new EventEmitter<Book>();

  id: string;
  titulo: string;
  autor: string;
  npaginas: string;

  onAddBook() {

    const book: Book = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      npaginas: this.npaginas
    }

    this.bookAdded.emit(book);

    this.id = '';
    this.titulo= '';
    this.autor = '';
    this.npaginas = '';
  }


}
