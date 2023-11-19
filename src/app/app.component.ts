import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addLink(title:HTMLInputElement, link:HTMLInputElement){
    console.log('valores: ', title.value, link.value);
    return false
  }
}
