import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "cinema-online-223b7.firebaseapp.com",
      projectId: "cinema-online-223b7",
      storageBucket: "cinema-online-223b7.appspot.com",
      messagingSenderId: "437104596653",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
