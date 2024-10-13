import { sql } from "@vercel/postgres";
import '../app/globals.css';
import Intro from './components/Intro'; 
import React from 'react';
import SideMenu from "./components/SideMenu";
import Timeline from "./components/Timeline";
import SkillCards from "./components/Skills";
import ProjectCards from "./components/ProjectCards";

export default async function Home() {
  const { rows } = await sql`SELECT * from cv_navbar`;
  const { rows: projectcardsrows } = await sql`SELECT * FROM cv_projects`;

  type ProjectCard = {
    title: string;
    subtitle: string;
    text: string;
  };
  
  // Map the database fields to the ProjectCard type
  const projectCards: ProjectCard[] = projectcardsrows.map((row: any) => ({
    title: row.title,
    subtitle: row.short_desc,
    text: row.long_story
  }));

  return (
    <div className="">
      <nav className="nav">
        <div className="pr-4 flex flex-wrap justify-between pt-4">
            <ul className="flex ml-auto space-x-4">
            {rows.map((row) => (
              <li key={row.id}>
                <a href={row.link} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {row.label}
                </a>
              </li>
            ))}
            </ul>
        </div>
      </nav>
      <div className="flex">
      <div className="w-64">
        <SideMenu />
      </div>
      <div className="flex-1">
        <Intro />
        <Timeline />
        <SkillCards />
        <ProjectCards projectCards={projectCards} />
      </div>
    </div>
  </div>
  );
}
