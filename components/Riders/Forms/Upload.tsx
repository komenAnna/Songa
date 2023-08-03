import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import ImageUploader from '../../Elements/Forms/ImageUploader';
import Image from 'next/image';

type RiderDetails = {
  ID_front: File;
  ID_back: File;
  license_front: File;
  license_back: File;
};

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
};

export default function Upload({ updateFields, ID_front, ID_back, license_front, license_back }: RiderDetailsProps) {
  const [idFrontImage, setIdFrontImage] = useState<File | null>(null);
  const [idBackImage, setIdBackImage] = useState<File | null>(null);
  const [dlFrontImage, setDlFrontImage] = useState<File | null>(null);
  const [dlBackImage, setDlBackImage] = useState<File | null>(null);

  const [idFrontImageUrl, setIdFrontImageUrl] = useState<string>('');
  const [idBackImageUrl, setIdBackImageUrl] = useState<string>('');
  const [dlFrontImageUrl, setDlFrontImageUrl] = useState<string>('');
  const [dlBackImageUrl, setDlBackImageUrl] = useState<string>('');

  const handleImageUpload = (imageData: File, imageName: string, setImage: React.Dispatch<React.SetStateAction<File | null>>, setImageUrl: React.Dispatch<React.SetStateAction<string>>) => {
    const renamedFile = new File([imageData], imageName, { type: imageData.type });
    setImage(renamedFile);
    setImageUrl(URL.createObjectURL(renamedFile));
    updateFields({ [imageName]: renamedFile });
  };

  useEffect(() => {
    if (idFrontImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setIdFrontImageUrl(reader.result as string);
      };
      reader.readAsDataURL(idFrontImage);
    }

    if (idBackImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setIdBackImageUrl(reader.result as string);
      };
      reader.readAsDataURL(idBackImage);
    }

    if (dlFrontImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setDlFrontImageUrl(reader.result as string);
      };
      reader.readAsDataURL(dlFrontImage);
    }

    if (dlBackImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setDlBackImageUrl(reader.result as string);
      };
      reader.readAsDataURL(dlBackImage);
    }
  }, [idFrontImage, idBackImage, dlFrontImage, dlBackImage]);

  return (
    <FormWrapper title="">
        <div className="flex items-center justify-start gap-2 bg-transparent border-[#FB4552] border-[1px] min-h-[48px] rounded-lg px-4">
          {idFrontImage ? (
            <Image src={idFrontImageUrl} alt="ID Front" width={100} height={100} />
          ) : (
            <ImageUploader require={true} onImageUpload={(file) => handleImageUpload(file, 'ID_front', setIdFrontImage, setIdFrontImageUrl)} />
          )}
          <span className='whitespace-nowrap'>ID Front: {ID_front?.name}</span>
          
        </div>

        <div className="flex items-center gap-2 bg-transparent border-[#FB4552] border-[1px] min-h-[48px] rounded-lg px-4">
          {idBackImage ? (
            <Image src={idBackImageUrl} alt="ID Back" width={100} height={100} />
          ) : (
            <ImageUploader require={true} onImageUpload={(file) => handleImageUpload(file, 'ID_back', setIdBackImage, setIdBackImageUrl)} />
          )}
          <span className='whitespace-nowrap'>ID Back: {ID_back?.name} </span>
        </div>

        <div className="flex items-center gap-2 bg-transparent border-[#FB4552] border-[1px] min-h-[48px] rounded-lg px-4">
          {dlFrontImage ? (
            <Image src={dlFrontImageUrl} alt="Driving License Front" width={100} height={100} />
          ) : (
            <ImageUploader require={false} onImageUpload={(file) => handleImageUpload(file, "license_front", setDlFrontImage, setDlFrontImageUrl)} />
          )}
          <span className='whitespace-nowrap'>DL Front: {license_front?.name}</span>
        </div>

        <div className="flex items-center gap-2 bg-transparent border-[#FB4552] border-[1px] min-h-[48px] rounded-lg px-4">
          {dlBackImage ? (
            <Image src={dlBackImageUrl} alt="DL Back" width={100} height={100} />
          ) : (
            <ImageUploader require={false} onImageUpload={(file) => handleImageUpload(file, "license_back", setDlBackImage, setDlBackImageUrl)} />
          )}
          <span className='whitespace-nowrap'>DL Back: {license_back?.name}</span>
        </div>
    </FormWrapper>
  )
}
