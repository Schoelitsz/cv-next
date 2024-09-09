import React from 'react';
import { sql } from "@vercel/postgres";

type HardcodedTempCards = {
    id: string; 
    label: string;
    skillrating: number;
    text: string;
    color: string;
    is_fave: number; 
}

// id
// label
// text
// color
// icon
// tags

export default async function SkillCards() {

    const { rows } = await sql`SELECT * from cv_skills`;
    return (
        <div className='flex flex-wrap justify-around gap-4' id="Skills">
            {rows.map(row => (
                <div 
                    key={row.id}
                    className='relative text-white border-glow rounded-full w-52 h-52 flex items-center justify-center transform transition-transform duration-300 hover:scale-110'
                >
                    {/* Label */}
                    <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100'>
                        <div className='text-gray-500 stroke-black text-glow text-center text-2xl font-bold'>
                            {row.label}
                        </div>
                    </div>
                    
                    {/* Text */}
                    {/* <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100'>
                        <div className='text-gray-500 stroke-black text-glow text-center text-lg'>
                            {row.text}
                        </div>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

