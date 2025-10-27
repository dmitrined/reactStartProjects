import { useState, type JSX } from "react";
import style from "./Quiz.module.css";
import { questions, type Question } from "./questions";

interface ResultProps {
  correct: number;
  onRestart: () => void;
}

function Result({ correct, onRestart }: ResultProps): JSX.Element {
  return (
    <div className={style.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button onClick={onRestart}>Попробовать снова</button>
    </div>
  );
}

interface GameProps {
  question: Question;
  onClickVariant: (index: number) => void;
  step: number;
}

function Game({ question, onClickVariant, step }: GameProps): JSX.Element {
  const percentage = Math.round((step / questions.length) * 100);
  
  return (
    <>
      <div className={style.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={style.progress__inner}
        ></div>
      </div>

      <h1>{question.title}</h1>

      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Quiz(): JSX.Element {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index: number): void => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const handleRestart = (): void => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <div className={style.App}>
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} onRestart={handleRestart} />
      )}
    </div>
  );
}
