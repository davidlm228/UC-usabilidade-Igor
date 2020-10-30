import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css']
})

export class BookInsertComponent {

  constructor (public bookService: BookService){

  }

  onAddBook(form: NgForm) {
    if (form.invalid) return;
    this.bookService.addBook(
      form.value.id,
      form.value.titulo,
      form.value.autor,
      form.value.npaginas
    );
    form.resetForm();

  }
}
