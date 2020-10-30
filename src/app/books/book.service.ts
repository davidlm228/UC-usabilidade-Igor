import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private books: Book [] = [];

  getBooks(): Book[] {
    return [...this.books];
  }

  private listBooksAtt = new Subject <Book[]>();

  addBook (id: string, titulo: string, autor: string, npaginas: string): void{
    const book: Book = {
      id: id,
      titulo: titulo,
      autor: autor,
      npaginas: npaginas
    };
    this.books.push(book);
    this.listBooksAtt.next([...this.books]);
  }

  getListOfBooksAttObservable() {
    return this.listBooksAtt.asObservable();
  }



}
