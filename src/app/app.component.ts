import { Component } from '@angular/core';
import MenuData from './menu.json';

interface Menu{
  id:number;
  name:String;
  url:String;
  icon:String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tryapp';
  menus:Menu[]=MenuData;
}


