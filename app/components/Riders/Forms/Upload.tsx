import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import ImageUploader from '../../Elements/Forms/ImageUploader';
import Image from 'next/image';

export default function Upload() {
  const [idImage, setIdImage] = useState<File | null>(null);
  const [licenseImage, setLicenseImage] = useState<File | null>(null);

  const [idImageUrl, setIdImageUrl] = useState<string | null>(null);
  const [licenseImageUrl, setLicenseImageUrl] = useState<string | null>(null);



  const handleIdImageUpload = (imageData: string) => {
    setIdImage(imageData?.base64);
    // console.log(imageData)

  };

  const handleLicenseImageUpload = (imageData: string) => {
    setLicenseImage(imageData?.base64);
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
      <div>
        <h2 className="font-semibold">Identification Card (ID)</h2>
        <div className="h-48 border my-3 rounded-lg items-center">
          {idImage ? (
            <Image src={idImageUrl} alt="ID" width={100} />
          ) : (
            <ImageUploader onImageUpload={handleIdImageUpload} />
          )}
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Driving License</h2>
        <div className="h-48 border my-3">
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
