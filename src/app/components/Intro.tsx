import React from 'react';

function Intro() {
    return (
        <div id="Home" className="bg-transparent py-16 px-8 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-white text-stroke-6 text-glow mb-4">Terrinia Schoelitsz</h1>
            <div className="text-xl text-white text-stroke-6 mb-2">
                <h2>Software Engineer HBO AD</h2>
                <h4 className="text-lg font-light mt-1">Graduated in 2021</h4>
            </div>
            <div className="text-lg text-gray-600 mt-4">
                <p className="mt-2 max-w-lg mx-auto">Ik zoek naar een manier om impact te maken. Er zijn zoveel richtingen in IT die een echt verschil kunnen maken voor onze toekomst. Om daar te komen is groei in de richting van data essentieel.</p>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
            
        </div>
    );
}

export default Intro;
