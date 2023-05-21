import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { PresentationSection } from "./sections/Presentation";
import { FeaturesSection } from "./sections/Features";
import { PlansSection } from "./sections/Plans";
import { FaqSection } from "./sections/FAQ";

export const Home = () => {
  const FAQItems = [
    {
      id: 1,
      question: "Quais são as opções de treino disponíveis na ferramenta?",
      answer:
        "A ferramenta oferece opções de treino como ABC, ABCD, ABCDE e ABCDEF. Você pode escolher o tipo de treino que melhor se adapta às suas necessidades e objetivos.",
    },
    {
      id: 2,
      question: "Como posso aprender a técnica correta dos exercícios?",
      answer:
        "A ferramenta possui vídeos dos exercícios disponíveis para você. Basta acessar a seção de vídeos e assistir a demonstrações passo a passo dos exercícios, para garantir que você esteja executando-os corretamente.",
    },
    {
      id: 3,
      question: "Posso armazenar os dados da minha dieta na ferramenta?",
      answer:
        "Sim, você pode utilizar a ferramenta para armazenar os dados da sua dieta. Ela possui um banco de dados com todas as tabelas nutricionais necessárias para acompanhar sua alimentação de forma eficiente.",
    },
    {
      id: 4,
      question: "Existe uma ferramenta para acompanhar o consumo diário de água?",
      answer:
        "Sim, a ferramenta inclui uma funcionalidade para acompanhar o consumo diário de água. Você pode registrar a quantidade de água que bebe ao longo do dia e monitorar seu progresso para garantir uma hidratação adequada.",
    },
    {
      id: 5,
      question: "É possível ter acompanhamento de um profissional qualificado?",
      answer:
        "Sim, a ferramenta oferece a opção de acompanhamento com um profissional qualificado. Você pode ter um profissional de saúde ou um personal trainer como seu guia, que irá ajudá-lo a alcançar seus objetivos e fornecer orientações personalizadas.",
    },
    {
      id: 6,
      question: "Quais são as opções de pagamento?",
      answer: "Temos diversas opções de pagamento, dentro delas estão: PIX, Boleto, Cartão de crédito.",
    },
  ];

  return (
    <>
      <Header />
      <PresentationSection />
      <FeaturesSection />
      <PlansSection />
      <FaqSection FAQItems={FAQItems} />
      <Footer />
    </>
  );
};
