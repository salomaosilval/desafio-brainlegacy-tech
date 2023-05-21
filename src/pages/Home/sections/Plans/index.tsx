import { FormatCurrency } from "../../../../utils/formatCurrency";

import "./styles.scss";

export const PlansSection = () => {
  return (
    <>
      <div className="priceContainer" id="plans">
        <div>
          <h1>Escolha seu plano</h1>
          <p>14 dias de free trial.</p>
        </div>
        <div className="plansCardContainer">
          <div className="planCard">
            <h1>Básico</h1>
            <p>{FormatCurrency(9.99)} / Mês</p>
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o treino diário (Séries/Repetições/Peso)
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a diversos exercícios para criar o seu treino.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o consumo diário de água.
              </li>
            </ul>
            <div className="buttonContainer">
              <button type="button">Contratar</button>
            </div>
          </div>
          <div className="planCard">
            <h1>Maromba</h1>
            <p>{FormatCurrency(19.99)} / Mês</p>
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o treino diário (Séries/Repetições/Peso)
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a diversos exercícios para criar o seu treino.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a diversos vídeos de exercícios para aprender a técnica certa.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o consumo diário de água.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar a dieta e a meta de kcal diária.
              </li>
            </ul>
            <div className="buttonContainer">
              <button type="button">Contratar</button>
            </div>
          </div>
          <div className="planCard">
            <h1>Bodybuilder</h1>
            <p>{FormatCurrency(29.99)} / Mês</p>
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o treino diário (Séries/Repetições/Peso)
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a diversos exercícios para criar o seu treino.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a diversos vídeos de exercícios para aprender a técnica certa.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar o consumo diário de água.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Armazenar a dieta e a meta de kcal diária.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Acesso a todas as tabelas nutricionais de alimentos do mundo inteiro.
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                  alt="check icon"
                />
                Consultoria semanal com um dos nossos treinadores profissionais (Você escolhe).
              </li>
            </ul>
            <div className="buttonContainer">
              <button type="button">Contratar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
