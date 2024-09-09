"use client";

import React, { useState } from 'react';

interface ProjectCardsProps {
  projectCards: ProjectCard[];
}

type ProjectCard = {
  title: string;
  subtitle: string;
  text: string;
};

export default function ProjectCards({ projectCards }: ProjectCardsProps) {
  const [expandedCards, setExpandedCards] = useState<boolean[]>(new Array(projectCards.length).fill(false));

  const handleCardClick = (index: number) => {
    setExpandedCards(prevState =>
      prevState.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <section className="py-12 bg-transparent h-screen" id="Projects">
      <div className="flex flex-wrap gap-4 justify-center">
        {projectCards.map((card, index) => (
          <div
            key={index}
            className={`w-80 min-h-[200px] p-4 mr-10 bg-white shadow-md rounded-lg transition-all border-glow card-container ${expandedCards[index] ? 'expanded' : ''}`}
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <h4 className="text-md text-gray-600">{card.subtitle}</h4>
            <div className="mt-2">
              {expandedCards[index] && <p className="text-gray-900">{card.text}</p>}
            </div>
            <button
              className="mt-2 text-gray-600 hover:text-blue-100"
              onClick={() => handleCardClick(index)}
            >
              {expandedCards[index] ? "Close" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
