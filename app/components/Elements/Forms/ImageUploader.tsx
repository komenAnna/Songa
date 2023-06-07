import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Perform additional checks/validation on the selected file if needed

      // Read the file and set it as the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {selectedImage && (
        <div>
          <h3>Selected Image:</h3>
          <Image src={selectedImage} alt="Selected" width={100} height={100} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
