import { useState } from "react";

import "./styles.scss";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  FAQItems: FAQItem[];
}

export const FaqSection = ({ FAQItems }: FAQSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div className="faqContainer" id="FAQ">
        <h1>FAQ</h1>
        <p>Tire todas as suas dúvidas aqui.</p>
        {FAQItems.map((faq) => (
          <div key={faq.id} className="faqItem">
            <div onClick={() => toggleDropdown(faq.id)}>
              <h2>{faq.question}</h2>
            </div>
            {expandedIndex === faq.id && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};
