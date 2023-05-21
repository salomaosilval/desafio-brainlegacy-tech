import "./styles.scss";

export const PresentationSection = () => {
  return (
    <>
      <div className="presentationContainer" id="presentation">
        <div>
          <div className="infoContainer">
            <h1>A melhor maneira para gerenciar o seu treino e dieta!</h1>
            <p>
              Uma poderosa ferramenta para anotar os seus treinos, progressão de carga além de poder acompanhar o
              andamento da sua dieta diariamente e meta de água.
            </p>
            <div className="storeAppsContainer">
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684688010/pt-br_badge_web_generic_wbkw1q.png"
                alt="Google Play"
                onClick={() => window.open("https://play.google.com/store/games?hl=pt_BR&gl=US", "_blank")}
              />
              <img
                src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684688010/apple_hwevy6.png"
                alt="App Store"
                onClick={() => window.open("https://www.apple.com/br/app-store/", "_blank")}
              />
            </div>
          </div>
          <div className="usersInfo">
            <h1>1.8M+</h1>
            <p>Usuários já utilizam o aplicativo</p>
          </div>
        </div>
        <div className="appMockupContainer">
          <img
            src="https://res.cloudinary.com/dv61ldehl/image/upload/v1684688174/GymLog_Mockup_3_a9c43p.png"
            alt="App mockup"
          />
        </div>
      </div>
    </>
  );
};
