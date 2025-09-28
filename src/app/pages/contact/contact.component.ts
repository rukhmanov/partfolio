import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = {
    email: 'aleksei.rukhmanov@gmail.com',
    telegram: 'https://t.me/AleksRukhman',
    location: 'Россия',
    availability: 'Доступен для новых проектов'
  };

  onSubmit() {
    // Здесь будет логика отправки формы
    const mailtoLink = `mailto:${this.contactInfo.email}?subject=${encodeURIComponent(this.contactForm.subject)}&body=${encodeURIComponent(
      `Имя: ${this.contactForm.name}\nEmail: ${this.contactForm.email}\n\nСообщение:\n${this.contactForm.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Очистка формы
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
