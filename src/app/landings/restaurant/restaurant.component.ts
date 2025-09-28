import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.scss'
})
export class RestaurantComponent implements OnInit {
  reservationData = {
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmitReservation() {
    console.log('Бронирование:', this.reservationData);
    alert('Столик забронирован! Мы свяжемся с вами для подтверждения.');
    
    this.reservationData = {
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    };
  }

  scrollToReservation() {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToMenu() {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  menuCategories = [
    {
      name: 'Антипасти',
      items: [
        { name: 'Брускетта с томатами', price: '450', description: 'Свежие томаты, базилик, моцарелла' },
        { name: 'Карпаччо из говядины', price: '650', description: 'Тонкие ломтики говядины, руккола, пармезан' },
        { name: 'Ассорти сыров', price: '750', description: '5 видов итальянских сыров, мед, орехи' }
      ]
    },
    {
      name: 'Паста',
      items: [
        { name: 'Спагетти Карбонара', price: '550', description: 'Классическая паста с беконом и яйцом' },
        { name: 'Пенне Аррабиата', price: '480', description: 'Острая паста с томатами и чесноком' },
        { name: 'Равиоли с рикоттой', price: '650', description: 'Домашние равиоли с шпинатом и рикоттой' }
      ]
    },
    {
      name: 'Пицца',
      items: [
        { name: 'Маргарита', price: '450', description: 'Томаты, моцарелла, базилик' },
        { name: 'Четыре сыра', price: '550', description: 'Моцарелла, горгонзола, пармезан, рикотта' },
        { name: 'Диабола', price: '580', description: 'Острая салями, моцарелла, перец чили' }
      ]
    },
    {
      name: 'Мясо и рыба',
      items: [
        { name: 'Стейк из говядины', price: '1200', description: 'Мраморная говядина, овощи гриль' },
        { name: 'Лосось в корочке', price: '850', description: 'Филе лосося, картофель, соус тартар' },
        { name: 'Бараньи ребрышки', price: '950', description: 'Медовая глазурь, розмарин, овощи' }
      ]
    }
  ];

  specialOffers = [
    {
      title: 'Бизнес-ланч',
      description: 'Суп + паста + салат + напиток',
      price: '650',
      time: '12:00 - 16:00'
    },
    {
      title: 'Романтический ужин',
      description: 'Антипасти + паста + десерт + вино',
      price: '2500',
      time: '19:00 - 23:00'
    },
    {
      title: 'Семейный обед',
      description: 'Пицца + паста + салат + напитки',
      price: '1800',
      time: 'Выходные'
    }
  ];
}
