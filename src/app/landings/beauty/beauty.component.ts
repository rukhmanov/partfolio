import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.scss'
})
export class BeautyComponent implements OnInit {
  appointmentData = {
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmitAppointment() {
    console.log('Запись:', this.appointmentData);
    alert('Запись оформлена! Мы свяжемся с вами для подтверждения.');
    
    this.appointmentData = {
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    };
  }

  scrollToAppointment() {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToServices() {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  services = [
    {
      category: 'Стрижки и укладки',
      items: [
        { name: 'Женская стрижка', price: '1500', duration: '1.5 часа' },
        { name: 'Мужская стрижка', price: '800', duration: '45 мин' },
        { name: 'Укладка', price: '1200', duration: '1 час' },
        { name: 'Стрижка + укладка', price: '2200', duration: '2 часа' }
      ]
    },
    {
      category: 'Окрашивание',
      items: [
        { name: 'Окрашивание в один тон', price: '2500', duration: '2 часа' },
        { name: 'Мелирование', price: '3500', duration: '3 часа' },
        { name: 'Омбре', price: '4000', duration: '3.5 часа' },
        { name: 'Балаяж', price: '4500', duration: '4 часа' }
      ]
    },
    {
      category: 'Уход за волосами',
      items: [
        { name: 'Кератиновое выпрямление', price: '5000', duration: '3 часа' },
        { name: 'Ламинирование', price: '3000', duration: '2 часа' },
        { name: 'Ботокс для волос', price: '4000', duration: '2.5 часа' },
        { name: 'Маска для волос', price: '1500', duration: '1 час' }
      ]
    },
    {
      category: 'Макияж',
      items: [
        { name: 'Дневной макияж', price: '2000', duration: '1 час' },
        { name: 'Вечерний макияж', price: '3000', duration: '1.5 часа' },
        { name: 'Свадебный макияж', price: '5000', duration: '2 часа' },
        { name: 'Макияж для фотосессии', price: '3500', duration: '1.5 часа' }
      ]
    }
  ];

  masters = [
    {
      name: 'Анна Петрова',
      specialization: 'Мастер-стилист',
      experience: '8 лет',
      image: 'https://images.unsplash.com/photo-1594824388844-9e0b1ef4d8b0?w=300&h=300&fit=crop&crop=face',
      services: ['Стрижки', 'Окрашивание', 'Укладки']
    },
    {
      name: 'Мария Сидорова',
      specialization: 'Колорист',
      experience: '6 лет',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      services: ['Окрашивание', 'Мелирование', 'Балаяж']
    },
    {
      name: 'Елена Козлова',
      specialization: 'Визажист',
      experience: '5 лет',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      services: ['Макияж', 'Брови', 'Ресницы']
    }
  ];

  specialOffers = [
    {
      title: 'Первое посещение',
      description: 'Скидка 20% на любую услугу',
      price: 'от 1200₽',
      condition: 'Только для новых клиентов'
    },
    {
      title: 'Комплекс "Красота"',
      description: 'Стрижка + окрашивание + укладка',
      price: '6000₽',
      condition: 'Вместо 7000₽'
    },
    {
      title: 'Свадебный пакет',
      description: 'Макияж + прическа + маникюр',
      price: '8000₽',
      condition: 'В день свадьбы'
    }
  ];
}
