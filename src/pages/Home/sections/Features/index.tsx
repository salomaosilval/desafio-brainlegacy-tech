import "./styles.scss";

export const FeaturesSection = () => {
  return (
    <>
      <div className="featuresContainer" id="features">
        <div className="featuresMockupContainer">
          <img
            src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684688174/GymLog_Mockup_2_pfofnx.png"
            alt="Mockup app"
          />
        </div>
        <div className="listFeaturesContainer">
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                alt="check icon"
              />
              Ferramenta para escolher o tipo de treino (ABC, ABCD, ABCDE, ABCDEF)
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                alt="check icon"
              />
              Vídeos dos exercícios para você aprender a técnica correta
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                alt="check icon"
              />
              Ferramenta para armazenar os dados da sua dieta (banco de dados com todas as tabelas nutricionais)
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                alt="check icon"
              />
              Ferramenta para acompanhar o consumo diário de água
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684690882/5610944_zgoabn.png"
                alt="check icon"
              />
              Acompanhamento com um profissional qualificado
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
