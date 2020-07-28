import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  public isMenuOpen: boolean = false;
  user = null;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getLoggedIn().subscribe((user) => {
      this.user = user;
    });
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
