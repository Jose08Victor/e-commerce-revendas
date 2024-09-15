import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from "../firebase-config.js";
import sharp from 'sharp';

export const imageHandler = async (file, path) => {
    const newName = Date.now() + file.originalname;
    const imageRef = ref(storage, `${path}${newName}`);

    const processedImage = await sharp(file.buffer).resize(480).jpeg({ quality: 95 }).toBuffer();

    const metadata = {
        contentType: 'image/jpeg',
    };

    const snapshot = await uploadBytes(imageRef, processedImage, metadata);
    const url = await getDownloadURL(snapshot.ref);

    return { newName, url };
};

export const deleteImage = async (imageName, path) => {
    const imageRef = ref(storage, `${path}${imageName}`);
    await deleteObject(imageRef);
};