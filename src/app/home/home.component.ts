import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = [
    {
      title: 'Одностраничный сайт (Лендинг)',
      price: '10 000 ₽',
      description: 'Идеально для представления одного продукта, услуги или мероприятия.'
    },
    {
      title: 'Многостраничный сайт',
      price: '10 000 ₽ + 7 000 ₽ за страницу',
      description: 'Первая страница: 10 000 ₽, каждая последующая страница: + 7 000 ₽'
    },
    {
      title: 'Адаптация под мобильные устройства',
      price: '15 000 ₽ + 10 000 ₽ за страницу',
      description: 'Первая страница: 15 000 ₽, каждая следующая: + 10 000 ₽'
    },
    {
      title: 'Система авторизации',
      price: '10 000 ₽ за способ',
      description: 'Вход через Email, Яндекс, Google'
    },
    {
      title: 'Интеграция онлайн-оплаты',
      price: '30 000 ₽',
      description: 'Карты, электронные кошельки'
    },
    {
      title: 'Полноценный интернет-магазин',
      price: 'По запросу',
      description: 'Включает фронтенд, бэкенд, базу данных, авторизацию, корзину, панель администратора'
    }
  ];

  technologies = [
    'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'PostgreSQL', 'Ionic'
  ];
}
