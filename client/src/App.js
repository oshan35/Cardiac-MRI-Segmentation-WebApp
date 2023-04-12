import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { segmentImage } from './AppService';

function App() {
  const [segmentedImage, setSegmentedImage] = useState(null);

  const handleImageChange = async (event) => {
      if (!event.target.files || event.target.files.length === 0) return;
      const imageFile = event.target.files[0];

      try {
          const response = await segmentImage(imageFile);
          setSegmentedImage(`data:image/png;base64,${response.mask}`);
      } catch (error) {
          console.error('Error segmenting image:', error);
      }
  };

  return (
      <div className="App">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {segmentedImage && (
              <div>
                  <h3>Segmented Image:</h3>
                  <img src={segmentedImage} alt="Segmented" />
              </div>
          )}
      </div>
  );
}

export default App;
