import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Ionic', level: 80, category: 'Mobile' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Database' },
    { name: 'MongoDB', level: 65, category: 'Database' },
    { name: 'SCSS/CSS', level: 90, category: 'Frontend' },
    { name: 'Git', level: 80, category: 'Tools' }
  ];

  experience = [
    {
      period: '2023 - настоящее время',
      position: 'Frontend Developer (Freelance)',
      company: 'Самостоятельная деятельность',
      description: 'Разработка веб-приложений и мобильных приложений для клиентов. Создание лендингов, интернет-магазинов и корпоративных порталов.'
    },
    {
      period: '2021 - 2023',
      position: 'Junior Frontend Developer',
      company: 'IT-компания',
      description: 'Участие в разработке пользовательских интерфейсов, работа с Angular, TypeScript, создание адаптивных дизайнов.'
    }
  ];

  education = [
    {
      year: '2021',
      degree: 'Самообразование в веб-разработке',
      institution: 'Онлайн курсы и практика',
      description: 'Изучение современных технологий веб-разработки, практические проекты, участие в сообществах разработчиков.'
    }
  ];
}
