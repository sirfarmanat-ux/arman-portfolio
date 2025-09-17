import React from 'react';
import { Link } from 'react-router-dom';

const JustKidding: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-rose-200 via-yellow-100 to-beige-200">
      <h1 className="text-6xl md:text-8xl font-cursive text-rose-800 italic mb-6" style={{ fontFamily: "'Satisfy', cursive"  }}>
        JUST KIDDING
      </h1>
      <p className="text-gray-700 text-xl md:text-2xl mb-8">
        Looks like you found the secret! 😄
      </p>
      <Link to="/">
        <button className="px-8 py-3 bg-rose-800 text-white rounded-full font-semibold hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default JustKidding;
