import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

function ImageUploader({ onImageUpload }: { onImageUpload: (imageData: File) => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result as string; // Cast the result to string
        setSelectedImage(imageData);
        // onImageUpload(imageData);
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <Image src={selectedImage} alt="Selected" width={100} height={300} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
