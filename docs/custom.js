
      const translations = {
        ru: {
          my_name: "Карим Крамин",
          greeting: "Привет! Меня зовут Карим.",
          intro: "Привет! Спасибо, что зашел сюда. Я —студент ПМИ, Факультет компьютерных наук, ВШЭ. Хочу поднять перцентиль и пройти на МОП.",
          about_me: "Обо мне",
          about_me_title: "Обо мне",
          about_me_content: "Я Карим, учусь на втором курсе ПМИ ФКН ВШЭ. Люблю велосипедный спорт, имею 3к часов в Fortnite и даже какие никакие призовые(3$).",
          experience: "Опыт работы",
          experience_title: "Мой опыт учёбы",
          position_title: "Студент Яндекс Лицея",
          position_description: "Закончил Лицей Академии Яндекса, еще учась в школе, с отличием! Учился в 131 Лицее города Казани.",
          goals_title: "Мои цели",
          goals_content: "Мои цели: Закончить семестр без троек, поступить на моп, выучить английский на неплохом уровне",
          collaboration: "Сотрудничество",
          collaboration_title: "Сотрудничество",
          collaboration_intro: "Если вас заинтересовало мое резюме, то вы можете связаться со мной следующими способами:",
          write_me: "Написать мне",
          made_with_love: "Сделано с любовью в 2024 году.",
          hse: "Студент НИУ «ВШЭ»",
          write_tg:"Написать в Telegram",
          write_email:"Написать на почту",
          watch_cv:"Посмотреть резюме",
          edu_period:"Сентябрь 2023 – Настоящее время",
          write_me_btn:"Написать мне",
          yandex:"Студент Яндекс Лицея",
          yandex_period:"Сентябрь 2021 – 2023"
        },
        en: {
          my_name: "Karim Kramin",
          greeting: "Hello! My name is Karim.",
          intro: "Hi! Thanks for stopping by. I’m a student of Applied Mathematics and Informatics (AMI) at the Faculty of Computer Science, HSE University. I want to raise my percentile and get into the MOP program.",
          about_me: "About Me",
          about_me_title: "About Me",
          about_me_content: "My name is Karim, and I’m a second-year AMI student at FCS HSE. I enjoy cycling, have 3,000 hours in Fortnite, and even earned some prize money ($3)!",
          experience: "Experience",
          experience_title: "My Experience",
          position_title: "Data Science Student",
          position_description: "I graduated with honors from the Yandex Academy Lyceum while still in school! Before that, I studied at Lyceum 131 in Kazan.",
          goals_title: "My Goals",
          goals_content: "Finish the semester without any Cs, get into the MOP program, learn English to a decent level.",
          collaboration: "Collaboration",
          collaboration_title: "Collaboration",
          collaboration_intro: "If you are interested in my resume, you can contact me in the following ways:",
          write_me: "Write to me",
          made_with_love: "Made with love in 2024 year.",
          hse:"Student of HSE",
          write_tg:"Write to Telegram",
          write_email:"Write on email",
          watch_cv:"Watch CV",
          edu_period:"September 2023 - Now",
          write_me_btn:"Write to me",
          yandex:"Student of Yandex Lyceum",
          yandex_period:"September 2021 - 2023"
        }
      };

      function applyTranslation(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
          const key = element.getAttribute('data-key');
          if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
          }
        });
      }

      function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      }

      function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
          // Автоматическое определение системной темы
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          // Автоматическое переключение по времени суток
          const hour = new Date().getHours();
          const isNight = hour >= 19 || hour < 7;
          if (prefersDark || isNight) {
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        }
      }

      function initLanguage() {
        const savedLang = localStorage.getItem('language') || 'ru';
        document.getElementById('language-select').value = savedLang;
        applyTranslation(savedLang);
      }

      document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initLanguage();

        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

        document.getElementById('language-select').addEventListener('change', (e) => {
          const selectedLang = e.target.value;
          applyTranslation(selectedLang);
          localStorage.setItem('language', selectedLang);
        });
      });