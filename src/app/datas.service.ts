import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  artisans = [
    {
      "id": "1",
      "name": "Vallis Bellemare",
      "img": "../assets/img/Plombier.jpeg",
      "alt": "Photo de l'artisan Vallis Bellemare",
      "specialty": "Plombier",
      "note": "4",
      "location": "Vienne",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"v.bellemare@gmail.com",
      "website":"https://plomberie-bellemare.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      "id": "2",
      "name": "Amitee Lécuyer",
      "img": "../assets/img/couturier.jpeg",
      "alt": "Photo de l'artisan Amitee Lécuyer",
      "specialty": "Couturier",
      "note": "4.5",
      "location": "Annecy",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"a.amitee@hotmail.com",
      "website":"https://lecuyer-couture.com",
      "category":"Fabrication",
      "top": false
    },
    {
      "id": "3",
      "name": "Leala Dennis",
      "img":"../assets/img/Coiffeur.jpg",
      "alt": "Photo de l'artisan Laela Dennis",
      "specialty": "Coiffeur",
      "note": "3.8",
      "location": "Chambéry",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"l.dennos@hotmail.fr",
      "website":"https://coiffure-leala-chambery.fr",
      "category":"Services",
      "top": false
    },
    {
      "id": "4",
      "name": "Chocolaterie Labbé",
      "img": "../assets/img/chocolatier.jpeg",
      "alt": "Photo de l'artisan Chocolaterie Labbé",
      "specialty": "Chocolatier",
      "note": "4.9",
      "location": "Grenoble",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"chocolaterie-labbe@gmail.com",
      "website":"https://chocolaterie-labbe.fr",
      "category":"Alimentation",
      "top": true
    },
    {
      "id": "5",
      "name": "Claude Quinn",
      "img": "../assets/img/bijoutier.webp",
      "alt": "Photo de l'artisan Claude Quinn",
      "specialty": "Bijoutier",
      "note": "4.2",
      "location": "Aix-les-bains",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"c-quinn@gmail.com",
      "website":"https://claude-quinn.fr",
      "category":"Fabrication",
      "top": false
    },
    {
      "id": "6",
      "name": "Valérie Laderoute",
      "img": "../assets/img/Toiletteur.jpg",
      "alt": "Photo de l'artisan Valérie Laderoute",
      "specialty": "Toiletteur",
      "note": "4.5",
      "location": "Valence",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"v-laredoute@gmail.com",
      "website":"valérie-laderoute.com",
      "category":"Services",
      "top": false
    },
    {
      "id": "7",
      "name": "Boutot & fils",
      "img": "../assets/img/menuisier.jpeg",
      "alt": "Photo de l'artisan Boutot & fils",
      "specialty": "Menuisier",
      "note": "4.7",
      "location": "Bourg-en-bresse",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"boutot-menuiserie@gmail.com",
      "website":"https://boutot-menuiserie.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      "id": "8",
      "name": "CM Graphisme",
      "img": "../assets/img/web design.jpeg",
      "alt": "Photo de l'artisan CM Graphisme",
      "specialty": "Webdesign",
      "note": "4.4",
      "location": "Valence",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@cm-graphisme.com",
      "website":"https://cm-graphisme.com",
      "category":"Services",
      "top": false
    },
    {
      "id": "9",
      "name": "Orville Salmons",
      "img": "../assets/img/chauffagiste.jpg",
      "alt": "Photo de l'artisan Orville Salmons",
      "specialty": "Chauffagiste",
      "note": "5",
      "location": "Evian",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"o-salmons@live.com",
      "website":"https://orville-salmons.com",
      "category":"Bâtiment",
      "top": true
    },
    {
      "id": "10",
      "name": "Au pain chaud",
      "img": "../assets/img/boulangerie.webp",
      "alt": "Photo de l'artisan Au Pain Chaud",
      "specialty": "Boulanger",
      "note": "4.8",
      "location": "Montélimar",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"aupainchaud@hotmail.com",
      "website":"https://Au-Pain-Chaud.com",
      "category":"Alimentation",
      "top": true
    },
    {
      "id": "11",
      "name": "Boucherie Dumont",
      "img": "../assets/img/Boucher.webp",
      "alt": "Photo de l'artisan Boucherie Dumont",
      "specialty": "Boucher",
      "note": "4.5",
      "location": "Lyon",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"boucherie.dumond@gmail.com",
      "website":"https://Boucherie-Dumont.fr",
      "category":"Alimentation",
      "top": false
    },
    {
      "id": "12",
      "name": "Mont Blanc Eléctricité",
      "img": "../assets/img/Electricien.jpg",
      "alt": "Photo de l'artisan Mont Blanc Eléctricité",
      "specialty": "Electricien",
      "note": "4.5",
      "location": "Chamonix",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@mont-blanc-electricite.com",
      "website":"https://mont-blanc-electricite.com",
      "category":"Bâtiment",
      "top": false
    },
    {
      "id": "13",
      "name": "Traiteur Truchon",
      "img": "../assets/img/traiteur.webp",
      "alt": "Photo de l'artisan Traiteur Truchon",
      "specialty": "Traiteur",
      "note": "4.1",
      "location": "Privas",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@truchon-traiteur.fr",
      "website":"https://truchon-traiteur.fr",
      "category":"Bâtiment",
      "top": false
    },
    {
      "id": "14",
      "name": "Le monde des fleurs",
      "img": "../assets/img/fleuriste.jpg",
      "alt": "Photo de l'artisan Le monde des fleurs",
      "specialty": "Fleuriste",
      "note": "4.6",
      "location": "Annonay",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"contact@le-monde-des-fleurs-annonay.fr",
      "website":"https://le-monde-des-fleurs-annonay.fr",
      "category":"Services",
      "top": false
    },
    {
      "id": "15",
      "name": "Royden Charbonneau",
      "img": "../assets/img/carrossier.jpg",
      "alt": "Photo de l'artisan Royden Charbonneau",
      "specialty": "Carrossier",
      "note": "3.8",
      "location": "Saint-Priest",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"r.charbonneau@gmail.com",
      "website":"https://rodyen-charbonneau.com",
      "category":"Services",
      "top": false
    },
    {
      "id": "16",
      "name": "Ernest Carignan",
      "img": "../assets/img/ferronier.jpg",
      "alt": "Photo de l'artisan Ernest Carignan",
      "specialty": "Ferronier",
      "note": "5",
      "location": "Le Puy-en-Velay",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"e-carigan@hotmail.com",
      "website":"https://ernet-carignan.fr",
      "category":"Fabrication",
      "top": false
    },
    {
      "id": "17",
      "name": "C'est sup'hair",
      "img": "../assets/img/sup'hair.jpg",
      "alt": "Photo de l'artisan C'est sup'hair",
      "specialty": "Coiffeur",
      "note": "4.1",
      "location": "Romans-sur-Isère",
      "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ",
      "email":"sup-hair@gmail.com",
      "website":"https://sup-hair.fr",
      "category":"Services",
      "top": false
    }
  ]

  constructor() { }
  getArtisansByCategory(category: string) {
    return this.artisans.filter(artisan => artisan.category.toLowerCase() ===category.toLowerCase())
  };
  getArtisansByName(name: string) {
    return this.artisans.filter(artisan => artisan.name.toLowerCase() ===name.toLowerCase())
  };
  getArtisansByLocation(location: string) {
    return this.artisans.filter(artisan => artisan.location.toLowerCase() ===location.toLowerCase())
  };
  getArtisansBySpecialty(specialty: string) {
    return this.artisans.filter(artisan => artisan.specialty.toLowerCase() ===specialty.toLowerCase())
  }
}
