import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selectorTheme = document.getElementById('themeApp');
  title = 'olsoftware';

  ngOnInit(): void {
    this.firstTheme();
  }

  public firstTheme(): void {
    const firstPath = '../../../../assets/css/colors/olsoftware-color-dark.css'
    this.selectorTheme?.setAttribute('href', firstPath);
  }



}
