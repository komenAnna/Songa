import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import ImageUploader from '../../Elements/Forms/ImageUploader';
import Image from 'next/image';

export default function Upload() {
  const [idImage, setIdImage] = useState<File | null>(null);
  const [licenseImage, setLicenseImage] = useState<File | null>(null);

  const [idImageUrl, setIdImageUrl] = useState<string>('');
  const [licenseImageUrl, setLicenseImageUrl] = useState<string>('');



  const handleIdImageUpload = (imageData: File) => {
    setIdImage(imageData);
    // console.log(imageData)

  };

  const handleLicenseImageUpload = (imageData: File) => {
    setLicenseImage(imageData);
  };

  useEffect(() => {
    if (idImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setIdImageUrl(reader.result as string);
      };
      reader.readAsDataURL(idImage);
    }

    if (licenseImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setLicenseImageUrl(reader.result as string);
      };
      reader.readAsDataURL(licenseImage);
    }
  }, [idImage, licenseImage])

  return (
    <FormWrapper title="Documents Upload">
      <div className=''>
        <h2 className="font-semibold">Identification Card (ID)</h2>
        <div className="flex h-48 border my-3 rounded-lg items-center justify-center">
          {idImage ? (
            <Image src={idImageUrl} alt="ID" width={100} />
          ) : (
            <ImageUploader onImageUpload={handleIdImageUpload} />
          )}
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Driving License</h2>
        <div className="flex h-48 border my-3 rounded-lg items-center justify-center">
          {licenseImage ? (
            <Image src={licenseImageUrl} alt="License" width={100} />
          ) : (
            <ImageUploader onImageUpload={handleLicenseImageUpload} />
          )}
        </div>
      </div>
    </FormWrapper>
  );
}
