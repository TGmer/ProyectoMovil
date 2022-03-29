import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
   places = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imgURL:'https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg',
      comments: ['Awesome place!', 'Fantastic view!']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imgURL:'https://upload.wikimedia.org/wikipedia/commons/4/49/Estatua_de_la_Libertad_New_York.jpg',
      comments: ['Awesome place!', 'Fantastic view!']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
