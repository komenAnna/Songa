import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import ImageUploader from '../../Elements/Forms/ImageUploader';
import Image from 'next/image';

type RiderDetails = {
  id_front_photo: string;
  id_back_photo: string;
  dl_front_photo: string;
  dl_back_photo: string;
};

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
};

export default function Upload({ updateFields, id_front_photo, id_back_photo, dl_front_photo, dl_back_photo }: RiderDetailsProps) {
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
    updateFields({ [imageName]: renamedFile.name });
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
      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center justify-start gap-2">
          {idFrontImage ? (
            <Image src={idFrontImageUrl} alt="ID Front" width={100} height={100} />
          ) : (
            <ImageUploader onImageUpload={(file) => handleImageUpload(file, 'ID_FRONT.png', setIdFrontImage, setIdFrontImageUrl)} />
          )}
          <span>ID Front: {id_front_photo}</span>
        </div>
        <div className="flex items-center gap-2">
          {idBackImage ? (
            <Image src={idBackImageUrl} alt="ID Back" width={100} height={100} />
          ) : (
            <ImageUploader onImageUpload={(file) => handleImageUpload(file, 'ID_BACK.png', setIdBackImage, setIdBackImageUrl)} />
          )}
          <span>ID Back: {id_back_photo}</span>
        </div>

        <div className="flex items-center justify-end gap-2">
          {dlFrontImage ? (
            <Image src={dlFrontImageUrl} alt="Driving License Front" width={100} height={100} />
          ) : (
            <ImageUploader onImageUpload={(file) => handleImageUpload(file, 'DL_FRONT.png', setDlFrontImage, setDlFrontImageUrl)} />
          )}
          <span>DL Front: {dl_front_photo}</span>
        </div>
        <div className="flex items-center gap-2">
          {dlBackImage ? (
            <Image src={dlBackImageUrl} alt="DL Back" width={100} height={100} />
          ) : (
            <ImageUploader onImageUpload={(file) => handleImageUpload(file, 'DL_BACK.png', setDlBackImage, setDlBackImageUrl)} />
          )}
          <span>DL Back: {dl_back_photo}</span>
        </div>
      </div>
    </FormWrapper>
  )
}
