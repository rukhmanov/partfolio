import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects = [
    {
      id: 'fitness-club',
      title: 'FitLife - Премиум фитнес-клуб',
      description: 'Рекламный лендинг премиум фитнес-клуба с ярким дизайном и мощными призывами к действию. Специальные предложения и гарантии результата.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      features: ['Яркий hero-блок с спецпредложением', 'Гарантия результата', 'Истории успеха клиентов', 'Абонементы с ценами', 'Форма записи']
    },
    {
      id: 'restaurant',
      title: 'Лендинг ресторана "Bella Vista"',
      description: 'Элегантный лендинг для итальянского ресторана с меню, галереей блюд и системой бронирования столиков.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Google Maps API'],
      features: ['Меню ресторана', 'Галерея блюд', 'Бронирование столиков', 'Контакты и адрес', 'Отзывы клиентов']
    },
    {
      id: 'beauty-salon',
      title: 'Лендинг салона красоты "Glamour"',
      description: 'Стильный лендинг для салона красоты с информацией об услугах, мастерах и возможностью записи на процедуры.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      features: ['Каталог услуг', 'Портфолио мастеров', 'Запись на процедуры', 'Галерея работ', 'Прайс-лист']
    },
    {
      id: 'travel-agency',
      title: 'Лендинг турагентства "Wanderlust"',
      description: 'Вдохновляющий лендинг для турагентства с галереей путешествий, турами и формой заявки на подбор тура.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Swiper.js'],
      features: ['Галерея туров', 'Подбор тура', 'Отзывы путешественников', 'Информация о странах', 'Специальные предложения']
    },
    {
      id: 'coffee-shop',
      title: 'Лендинг кофейни "Coffee Corner"',
      description: 'Уютный лендинг для кофейни с меню, информацией о кофе и возможностью заказа доставки.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Payment API'],
      features: ['Меню кофейни', 'Заказ доставки', 'Информация о кофе', 'Атмосфера заведения', 'Акции и скидки']
    }
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    this.observeElements();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
  }
}
