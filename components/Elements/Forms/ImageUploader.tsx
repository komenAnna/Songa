import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

function ImageUploader({ onImageUpload }: { onImageUpload: (imageData: File) => void }) {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string; // Cast the result to string
        setSelectedImages((prevImages) => [...prevImages, imageData]);
        // onImageUpload(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-full'>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImages.length > 0 && (
        <div>
          <h3>Selected Images:</h3>
          <ul>
            {selectedImages.map((imageData, index) => (
              <li key={index}>
                <Image src={imageData} alt={`Selected ${index + 1}`} width={100} height={300} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
