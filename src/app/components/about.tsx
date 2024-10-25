import React from 'react';
import { sql } from "@vercel/postgres";

interface ReleaseNote {
    id: 'uuid';      
    date: Date;
    notes: string;
}

export default async function About() {
    const { rows }: { rows: ReleaseNote[] } = await sql`SELECT * from release_notes`;

    return (
        <section id="About" className='py-12 bg-transparent h-screen'>
            <h1 className="text-4xl font-bold text-white text-stroke-6 text-glow mb-4 flex flex-wrap gap-4 justify-center">About This App</h1>
            <p className='flex flex-wrap gap-4 justify-center text-md text-gray-600'>Text about this app, explaining how its made, that there is a csm and blog coming and then below release notes</p>
            {rows.map(row => (
                <div key={row.id}>
                    <div>date: {new Date(row.date).toLocaleDateString()}</div>
                    <div>
                        release notes: 
                        {row.notes.split('\n').map((note: string, index: number) => (
                            <p key={index}>{note}</p> 
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
