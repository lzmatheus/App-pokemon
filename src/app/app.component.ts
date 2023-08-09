import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Contatos', url: '/contatos', icon: 'call' },
    { title: 'Sobre', url: '/sobre', icon: 'information-circle' },
    { title: 'Política de Privacidade', url: '/politicas-de-privacidade', icon: 'document-lock' }
  ];

  constructor() {}
}
