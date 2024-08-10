import React, { useEffect, useRef } from 'react';

const StoryDisplay = ({ story }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = story;
    }
  }, [story]);

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-lg">
      <div ref={containerRef} className="story-content" />
      <style jsx>{`
        .story-content {
          font-family: 'Arial', sans-serif;
        }
        .story-title {
          font-size: 24px;
          color: #333;
          margin-bottom: 16px;
        }
        .story-paragraph {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .story-button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        .story-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default StoryDisplay;