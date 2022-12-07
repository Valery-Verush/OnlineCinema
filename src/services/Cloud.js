import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-99bce.firebaseapp.com",
      projectId: "online-cinema-99bce",
      storageBucket: "online-cinema-99bce.appspot.com",
      messagingSenderId: "1051990373",
      appId: process.env.APP_ID,
      measurementId: "G-QH3V0D9BNR",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
