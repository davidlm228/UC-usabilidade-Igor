import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  constructor(private httpClient: HttpClient){ }

  private books: Book [] = [];

  private bookListActual = new Subject<Book[]>();

  getBooks(): void {
    this.httpClient.get
      <
        {
          mensagem: string,
          books: Book[]
        }
      >
      ('http://localhost:3000/api/books')
      .subscribe(
        (dados) => {
            this.books = dados.books;
            this.bookListActual.next([...this.books]);
        }
      )
    }

    addBook (id: string, titulo: string, autor: string, npaginas: string): void{
      const book: Book = {
        id: id,
        titulo: titulo,
        autor: autor,
        npaginas: npaginas
      };

      this.httpClient.post
      <{mensagem: string}>
      ('http://localhost:3000/api/books', book)
      .subscribe(
        (dados) => {
          console.log(dados.mensagem);
          this.books.push(book);
          this.bookListActual.next([...this.books]);
        }
      );
  }


  getListOfBooksAttObservable() {
    return this.bookListActual.asObservable();
  }



}
