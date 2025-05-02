import React, { useEffect } from 'react';

const BackgroundEffects = () => {
  useEffect(() => {
    const starsContainer = document.getElementById('stars');

    if (!starsContainer) return;

    const starCount = 100;
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite alternate`;

      stars.push(star);
    }

    stars.forEach(star => starsContainer.appendChild(star));

    // Cleanup on unmount
    return () => {
      stars.forEach(star => {
        if (starsContainer.contains(star)) {
          starsContainer.removeChild(star);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="horizon"></div>
      <div className="stars" id="stars"></div>
    </>
  );
};

export default BackgroundEffects;
