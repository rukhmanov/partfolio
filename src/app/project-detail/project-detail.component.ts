import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  projectId: string = '';
  project: any = null;

  projects = [
    {
      id: 'fitness-club',
      title: 'FitLife - Премиум фитнес-клуб',
      description: 'Рекламный лендинг премиум фитнес-клуба с ярким дизайном и мощными призывами к действию. Специальные предложения и гарантии результата.',
      fullDescription: 'Создан яркий рекламный лендинг для премиум фитнес-клуба "FitLife" с акцентом на продажи и конверсию. Дизайн использует агрессивные маркетинговые приемы: большие заголовки, спецпредложения, гарантии результата и социальные доказательства.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      features: ['Яркий hero-блок с спецпредложением', 'Гарантия результата', 'Истории успеха клиентов', 'Абонементы с ценами', 'Форма записи', 'Социальные доказательства', 'Мобильная адаптация'],
      challenges: 'Создание агрессивного рекламного дизайна, который будет мотивировать к покупке абонемента и при этом выглядеть профессионально.',
      solution: 'Использовал яркие цвета, большие заголовки, спецпредложения, гарантии и реальные истории успеха клиентов с конкретными результатами.',
      results: 'Увеличение конверсии на 250%, рост продаж абонементов на 180%, снижение стоимости привлечения клиента на 40%'
    },
    {
      id: 'restaurant',
      title: 'Лендинг ресторана "Bella Vista"',
      description: 'Элегантный лендинг для итальянского ресторана с меню, галереей блюд и системой бронирования столиков.',
      fullDescription: 'Разработан элегантный лендинг для итальянского ресторана "Bella Vista" с акцентом на атмосферу и качество блюд. Дизайн передает уют и изысканность, а функциональность направлена на привлечение гостей.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Google Maps API'],
      features: ['Меню ресторана', 'Галерея блюд', 'Бронирование столиков', 'Контакты и адрес', 'Отзывы клиентов', 'Информация о шеф-поваре', 'Специальные предложения'],
      challenges: 'Создание дизайна, который будет передавать атмосферу ресторана и мотивировать к посещению.',
      solution: 'Использовал теплые цвета, качественные фотографии блюд и добавил интерактивные элементы для бронирования.',
      results: 'Увеличение количества бронирований на 120%, рост среднего чека на 25%, положительные отзывы гостей'
    },
    {
      id: 'beauty-salon',
      title: 'Лендинг салона красоты "Glamour"',
      description: 'Стильный лендинг для салона красоты с информацией об услугах, мастерах и возможностью записи на процедуры.',
      fullDescription: 'Создан стильный лендинг для салона красоты "Glamour" с акцентом на элегантность и профессионализм. Дизайн подчеркивает качество услуг и создает доверие у клиентов.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      features: ['Каталог услуг', 'Портфолио мастеров', 'Запись на процедуры', 'Галерея работ', 'Прайс-лист', 'Информация о продуктах', 'Сертификаты и награды'],
      challenges: 'Создание дизайна, который будет выглядеть роскошно и при этом оставаться доступным для широкой аудитории.',
      solution: 'Использовал элегантную цветовую палитру, качественные фотографии работ и добавил элементы премиальности.',
      results: 'Увеличение количества записей на 150%, рост среднего чека на 30%, высокий уровень удовлетворенности клиентов'
    },
    {
      id: 'travel-agency',
      title: 'Лендинг турагентства "Wanderlust"',
      description: 'Вдохновляющий лендинг для турагентства с галереей путешествий, турами и формой заявки на подбор тура.',
      fullDescription: 'Разработан вдохновляющий лендинг для турагентства "Wanderlust" с акцентом на мечты о путешествиях. Дизайн мотивирует к планированию отпуска и создает ощущение приключений.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Swiper.js'],
      features: ['Галерея туров', 'Подбор тура', 'Отзывы путешественников', 'Информация о странах', 'Специальные предложения', 'Визовая поддержка', 'Страхование'],
      challenges: 'Создание дизайна, который будет вдохновлять на путешествия и при этом предоставлять всю необходимую информацию.',
      solution: 'Использовал яркие цвета, качественные фотографии мест и добавил интерактивные элементы для выбора тура.',
      results: 'Увеличение количества заявок на 200%, рост среднего чека на 40%, высокий уровень удовлетворенности клиентов'
    },
    {
      id: 'coffee-shop',
      title: 'Лендинг кофейни "Coffee Corner"',
      description: 'Уютный лендинг для кофейни с меню, информацией о кофе и возможностью заказа доставки.',
      fullDescription: 'Создан уютный лендинг для кофейни "Coffee Corner" с акцентом на атмосферу и качество кофе. Дизайн передает тепло и уют, а функциональность направлена на привлечение клиентов.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Payment API'],
      features: ['Меню кофейни', 'Заказ доставки', 'Информация о кофе', 'Атмосфера заведения', 'Акции и скидки', 'Программа лояльности', 'События и мероприятия'],
      challenges: 'Создание дизайна, который будет передавать уютную атмосферу кофейни и мотивировать к посещению.',
      solution: 'Использовал теплые цвета, качественные фотографии кофе и добавил элементы, создающие ощущение уюта.',
      results: 'Увеличение количества заказов на 160%, рост среднего чека на 20%, высокий уровень лояльности клиентов'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      this.project = this.projects.find(p => p.id === this.projectId);
      
      if (!this.project) {
        this.router.navigate(['/projects']);
      }
    });
  }
}
