import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import StoryGenerator from '../components/StoryGenerator';
import StoryDisplay from '../components/StoryDisplay';

const Index = () => {
  const [theme, setTheme] = useState('');
  const [generatedStory, setGeneratedStory] = useState(null);

  const handleGenerate = async () => {
    if (theme.trim() === '') {
      alert('Please enter a theme');
      return;
    }
    
    // In a real application, this would call an API to generate the story
    // For now, we'll use a placeholder story
    const placeholderStory = `
      <div class="story-container">
        <h1 class="story-title">A Tale of ${theme}</h1>
        <p class="story-paragraph">Once upon a time, in a world where ${theme} was everything...</p>
        <button class="story-button" onclick="alert('You clicked an interactive element!')">Interact with the story</button>
        <p class="story-paragraph">The journey through ${theme} continued, full of surprises...</p>
      </div>
    `;
    
    setGeneratedStory(placeholderStory);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Story Generator</h1>
      <div className="mb-4 flex space-x-2">
        <Input
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          placeholder="Enter a theme for your story"
          className="flex-grow"
        />
        <Button onClick={handleGenerate}>Generate Story</Button>
      </div>
      {generatedStory && <StoryDisplay story={generatedStory} />}
    </div>
  );
};

export default Index;