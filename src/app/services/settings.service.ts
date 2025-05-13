import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  //Variable de tema de la aplicacion
  linkTheme=document.querySelector('#theme');

  constructor() { 
     //Accedo al documento index.html    
     const url=localStorage.getItem('theme') || `./assets/css/colors/purple-dark.css`;
     this.linkTheme.setAttribute('href',url);
  }

  changeTheme(theme:string){    
    //Accedo al documento index.html    
    const url=`./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    const links=document.querySelectorAll('.selector');
    links.forEach(elem=>{
      elem.classList.remove('working');
      const btnTheme=elem.getAttribute('data-theme');

      const btnThemeUrl=`./assets/css/colors/${btnTheme}.css`;
      const currentTheme=this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme){
        elem.classList.add('working');

      }

    })
  }
}
