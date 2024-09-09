import React from 'react';
import { sql } from "@vercel/postgres";


//HERE you were about to make the data here dynamic

export default async function Timeline() {
  const { rows } = await sql`SELECT * from cv_timeline_items`;

  // Find the favorite item (where is_fave is true)
  const favoriteItem = rows.find(item => item.is_fave === true);

  // Filter out the favorite item from the rest of the timeline
  const otherItems = rows.filter(item => item.is_fave !== true);

  return (
    <section className="py-12 bg-transparent" id="Resume">
      <div className="container mx-auto">
        <h3 className='text-white text-4xl font-bold text-center mb-8'>Current</h3>
        {favoriteItem && (
          <h3 className="text-glow pulse text-white text-4xl font-bold text-center mb-8">
            {favoriteItem.title}
          </h3>
        )}
        <div className="relative">
          <div className="border-glow border-r-4 border-white absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <ul className="">
            {otherItems.map((item, index) => (
              <li
                key={item.id} 
                className={`flex items-center w-full ${
                  index % 2 === 0 ? "justify-start pl-48" : "justify-end pr-48"
                } relative`}
              >
                <div
                  className={`transition-transform duration-300 w-2/10 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  } hover:scale-125`}
                >
                  <div className="w-80 h-80 bg-transparent rounded-full flex flex-col justify-center items-center border-4 border-white border-glow p-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center transition-opacity duration-300 z-10">
                      <h3 className="text-gray-500 text-glow text-center text-2xl font-semibold mb-2 opacity-100 hover:opacity-0">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-center text-sm mb-4 opacity-100 hover:opacity-0">
                        {new Date(item.start_date).toLocaleDateString()} -{" "}
                        {new Date(item.end_date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center text-center text-white p-4 bg-transparent bg-opacity-75 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                      <p>{item.extended_text}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};



