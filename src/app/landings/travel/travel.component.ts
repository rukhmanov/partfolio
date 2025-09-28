import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss'
})
export class TravelComponent implements OnInit {
  tourRequestData = {
    name: '',
    phone: '',
    email: '',
    destination: '',
    duration: '',
    budget: '',
    travelers: '',
    message: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmitTourRequest() {
    console.log('Заявка на тур:', this.tourRequestData);
    alert('Заявка отправлена! Наш менеджер свяжется с вами в течение часа.');
    
    this.tourRequestData = {
      name: '',
      phone: '',
      email: '',
      destination: '',
      duration: '',
      budget: '',
      travelers: '',
      message: ''
    };
  }

  scrollToTours() {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToRequest() {
    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  popularTours = [
    {
      destination: 'Турция',
      duration: '7 дней',
      price: '45000',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
      description: 'Анталья, Кемер, Сиде - все включено',
      features: ['Перелет', 'Отель 4*', 'Питание', 'Экскурсии']
    },
    {
      destination: 'Египет',
      duration: '10 дней',
      price: '55000',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=400&h=300&fit=crop',
      description: 'Хургада, Шарм-эль-Шейх, Каир',
      features: ['Перелет', 'Отель 5*', 'Питание', 'Дайвинг']
    },
    {
      destination: 'ОАЭ',
      duration: '8 дней',
      price: '65000',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      description: 'Дубай, Абу-Даби, Шарджа',
      features: ['Перелет', 'Отель 5*', 'Питание', 'Шопинг']
    },
    {
      destination: 'Таиланд',
      duration: '12 дней',
      price: '75000',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop',
      description: 'Пхукет, Краби, Бангкок',
      features: ['Перелет', 'Отель 4*', 'Питание', 'Экскурсии']
    },
    {
      destination: 'Испания',
      duration: '10 дней',
      price: '85000',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop',
      description: 'Барселона, Мадрид, Валенсия',
      features: ['Перелет', 'Отель 4*', 'Питание', 'Экскурсии']
    },
    {
      destination: 'Италия',
      duration: '9 дней',
      price: '90000',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop',
      description: 'Рим, Флоренция, Венеция',
      features: ['Перелет', 'Отель 4*', 'Питание', 'Экскурсии']
    }
  ];

  services = [
    {
      icon: '✈️',
      title: 'Авиабилеты',
      description: 'Лучшие цены на перелеты по всему миру'
    },
    {
      icon: '🏨',
      title: 'Отели',
      description: 'Подбор отелей любой категории'
    },
    {
      icon: '🛡️',
      title: 'Страхование',
      description: 'Медицинское страхование для путешествий'
    },
    {
      icon: '📋',
      title: 'Визы',
      description: 'Помощь в оформлении виз'
    },
    {
      icon: '🚌',
      title: 'Трансферы',
      description: 'Встреча в аэропорту и трансферы'
    },
    {
      icon: '🎯',
      title: 'Экскурсии',
      description: 'Индивидуальные и групповые экскурсии'
    }
  ];

  destinations = [
    { name: 'Европа', count: '25 стран' },
    { name: 'Азия', count: '15 стран' },
    { name: 'Африка', count: '10 стран' },
    { name: 'Америка', count: '8 стран' },
    { name: 'Океания', count: '5 стран' }
  ];
}
