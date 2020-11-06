import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book.model'
import { BookService } from '../book.service';
import { Subscription, Observable } from 'rxjs';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent implements OnInit, OnDestroy {


  books: Book[] = [];
  private booksSubscription: Subscription;

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks();
    this.booksSubscription = this.bookService
    .getListOfBooksAttObservable()
    .subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}

