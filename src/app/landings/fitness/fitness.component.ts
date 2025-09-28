import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fitness',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.scss'
})
export class FitnessComponent implements OnInit {
  formData = {
    name: '',
    phone: '',
    email: ''
  };

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit() {
    // Здесь будет логика отправки формы
    console.log('Форма отправлена:', this.formData);
    alert('Спасибо! Мы свяжемся с вами в течение 15 минут.');
    
    // Очистка формы
    this.formData = {
      name: '',
      phone: '',
      email: ''
    };
  }

  scrollToForm() {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToPrograms() {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  trainers = [
    {
      name: 'Анна Петрова',
      specialization: 'Фитнес-тренер',
      experience: '5 лет',
      image: 'https://images.unsplash.com/photo-1594824388844-9e0b1ef4d8b0?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Максим Сидоров',
      specialization: 'Тренер по бодибилдингу',
      experience: '7 лет',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Елена Козлова',
      specialization: 'Йога-инструктор',
      experience: '4 года',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face'
    }
  ];

  programs = [
    {
      name: 'Начинающий',
      price: '2500',
      features: ['Персональная консультация', 'План тренировок', 'Групповые занятия', 'Доступ к залу']
    },
    {
      name: 'Продвинутый',
      price: '3500',
      features: ['Персональные тренировки', 'План питания', 'Все групповые занятия', 'Сауна включена']
    },
    {
      name: 'VIP',
      price: '5000',
      features: ['Персональный тренер', 'Индивидуальная программа', 'Массаж включен', 'Безлимитный доступ']
    }
  ];
}
