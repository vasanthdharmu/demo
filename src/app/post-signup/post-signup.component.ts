import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-post-signup',
  templateUrl: './post-signup.component.html',
  styleUrls: ['./post-signup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostSignupComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  interestCtrl = new FormControl();
  filteredInterests: Observable<string[]>;
  interests: string[] = ['Photography'];
  allInterests: string[] = [
    'Travel',
    'Photography',
    'Food',
    'Cricket',
    'Football',
  ];

  @ViewChild('interestInput') interestInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor(private router: Router) {
    this.filteredInterests = this.interestCtrl.valueChanges.pipe(
      startWith(null),
      map((interest: string | null) =>
        interest ? this._filter(interest) : this.allInterests.slice()
      )
    );
  }

  ngOnInit() {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our interest
    if ((value || '').trim()) {
      this.interests.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.interestCtrl.setValue(null);
  }

  remove(interest: string): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.interests.push(event.option.viewValue);
    this.interestInput.nativeElement.value = '';
    this.interestCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allInterests.filter(
      (interest) => interest.toLowerCase().indexOf(filterValue) === 0
    );
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
