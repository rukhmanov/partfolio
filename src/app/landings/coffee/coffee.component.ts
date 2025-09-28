import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.scss'
})
export class CoffeeComponent implements OnInit {
  orderData = {
    name: '',
    phone: '',
    address: '',
    items: '',
    message: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmitOrder() {
    console.log('Заказ:', this.orderData);
    alert('Заказ принят! Мы свяжемся с вами для подтверждения.');
    
    this.orderData = {
      name: '',
      phone: '',
      address: '',
      items: '',
      message: ''
    };
  }

  scrollToMenu() {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToOrder() {
    const element = document.getElementById('order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  menuCategories = [
    {
      name: 'Кофе',
      items: [
        { name: 'Эспрессо', price: '120', description: 'Классический крепкий кофе' },
        { name: 'Американо', price: '150', description: 'Эспрессо с горячей водой' },
        { name: 'Капучино', price: '180', description: 'Эспрессо с молочной пеной' },
        { name: 'Латте', price: '200', description: 'Эспрессо с большим количеством молока' },
        { name: 'Мокко', price: '220', description: 'Кофе с шоколадом и молоком' },
        { name: 'Фраппе', price: '250', description: 'Холодный кофе со льдом' }
      ]
    },
    {
      name: 'Десерты',
      items: [
        { name: 'Тирамису', price: '280', description: 'Классический итальянский десерт' },
        { name: 'Чизкейк', price: '320', description: 'Нежный чизкейк с ягодами' },
        { name: 'Круассан', price: '150', description: 'Свежая выпечка с маслом' },
        { name: 'Маффин', price: '180', description: 'Домашний маффин с шоколадом' },
        { name: 'Панкейки', price: '350', description: 'Три панкейка с кленовым сиропом' }
      ]
    },
    {
      name: 'Напитки',
      items: [
        { name: 'Горячий шоколад', price: '200', description: 'Густой горячий шоколад' },
        { name: 'Чай черный', price: '120', description: 'Ассам, Эрл Грей, Дарджилинг' },
        { name: 'Чай зеленый', price: '120', description: 'Сенча, Жасмин, Матча' },
        { name: 'Смузи', price: '250', description: 'Фруктовый смузи на выбор' },
        { name: 'Лимонад', price: '180', description: 'Домашний лимонад со льдом' }
      ]
    },
    {
      name: 'Завтраки',
      items: [
        { name: 'Овсянка', price: '200', description: 'С ягодами, орехами и медом' },
        { name: 'Тост с авокадо', price: '250', description: 'На цельнозерновом хлебе' },
        { name: 'Яичница', price: '180', description: 'С беконом и тостом' },
        { name: 'Бутерброд', price: '220', description: 'С курицей, сыром и овощами' }
      ]
    }
  ];

  specialOffers = [
    {
      title: 'Утренний кофе',
      description: 'Любой кофе + круассан',
      price: '250₽',
      time: '8:00 - 11:00'
    },
    {
      title: 'Обеденный сет',
      description: 'Кофе + десерт + сэндвич',
      price: '450₽',
      time: '12:00 - 15:00'
    },
    {
      title: 'Вечерний коктейль',
      description: 'Кофе + десерт',
      price: '350₽',
      time: '18:00 - 22:00'
    }
  ];

  features = [
    {
      icon: '☕',
      title: 'Свежий кофе',
      description: 'Обжариваем зерна каждую неделю'
    },
    {
      icon: '🏠',
      title: 'Уютная атмосфера',
      description: 'Идеальное место для работы и отдыха'
    },
    {
      icon: '🚚',
      title: 'Доставка',
      description: 'Быстрая доставка по всему городу'
    },
    {
      icon: '💳',
      title: 'Оплата картой',
      description: 'Принимаем все виды платежей'
    }
  ];
}
