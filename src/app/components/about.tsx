import React from 'react';
import { sql } from "@vercel/postgres";

interface ReleaseNote {
    id: string;      
    date: Date;
    notes: string;
}

export default async function About() {
    const { rows }: { rows: ReleaseNote[] } = await sql`SELECT * from release_notes`;

    return (
        <section id="About" className="py-16 bg-transparent min-h-screen flex flex-col items-center">
            <div className="max-w-2xl w-full text-center px-2">
                <h1 className="text-4xl font-bold text-white mb-6 text-stroke-6 text-glow">About This App</h1>
                <h3 className="text-lg text-gray-400 mb-10">
                    This application was built using Next.JS and is almost completely dynamically loaded from a database hosted on Vercel. To help manage the database and the content, I will also be creating a CSM in a C# application. This app works as an online, dynamic and easy-to-update CV and a hub to show what I'm working on. In that spirit I'll also be adding blog features in the future. Below you can read the release notes as I continue the develop the app.
                </h3>
                <h1 className="text-4xl pt-6 font-semibold text-white mb-4 text-glow">Release Notes</h1>
                <div className="border-glow bg-white-800 rounded-lg p-4">
                    {rows.map((row) => (
                        <div key={row.id} className="bg-transparent-700 rounded-md p-4 mb-4 text-left">
                            <div className="text-gray-400 text-2xlg">
                                <h1>Date:</h1> {new Date(row.date).toLocaleDateString()}
                            </div>
                            <div className="text-gray-400 mt-2">
                                <p>{row.notes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
