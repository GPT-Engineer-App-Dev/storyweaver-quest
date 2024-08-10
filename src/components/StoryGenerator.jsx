import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const StoryGenerator = ({ theme, setTheme, onGenerate }) => {
  return (
    <div className="mb-4 flex space-x-2">
      <Input
        type="text"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        placeholder="Enter a theme for your story"
        className="flex-grow"
      />
      <Button onClick={onGenerate}>Generate Story</Button>
    </div>
  );
};

export default StoryGenerator;