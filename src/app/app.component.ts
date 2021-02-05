import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dashboard';

  searchForm: FormGroup;
  @Output()
  public searchResult = new EventEmitter<string>();

  constructor(private FormBuilder: FormBuilder, private router: Router) {
    this.searchForm = this.FormBuilder.group({
      searchItem: ['', Validators.required]
    });

    // this.SearchForm = fb_.group({
    //   "search": ['']
    // });

    console.log(this.searchResult.emit("hello"))

  }

  // initializeForm(): any {

  // }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(): any {
    if (this.searchForm.valid) {
      const searchItem = this.searchForm.controls.searchItem.value;
      // console.log(searchItem);
      this.searchResult.emit(searchItem);
      localStorage.setItem('searchTerm', JSON.stringify(searchItem));
      this.searchForm.reset();

      return
    }
  }

  next(): any {
    //    this.router.navigateByUrl('/home');
  }


}
