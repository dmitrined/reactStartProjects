// 1. Определяем тип или интерфейс для одного объекта вопроса
export interface Question {
  title: string;
  variants: string[];
  correct: number; // Индекс правильного варианта (0, 1, 2, ...)
}

// 2. Используем этот тип для массива
export const questions: Question[] = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];