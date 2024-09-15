import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDw3oBK-M_t7o3teQF6H3KTKmbKtgN5MOA",
    authDomain: "upload-files-73389.firebaseapp.com",
    projectId: "upload-files-73389",
    storageBucket: "upload-files-73389.appspot.com",
    messagingSenderId: "346925737997",
    appId: "1:346925737997:web:debd041e05475a41578d44"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);