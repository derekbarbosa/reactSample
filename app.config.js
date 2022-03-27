import 'dotenv/config';

export default {
  "expo": {
    "name": "reactSample",
    "slug": "reactSample",
    "version": "33.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "extra": {
      FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.REACT_FIREBASE_APP_AUTH,
      FIREBASE_PROJ_ID: process.env.REACT_APP_FIREBASE_PROJ_ID,
      FIREBASE_STORE_BUCKET: process.env.REACT_APP_FIREBASE_STORE_BUCKET,
      FIREBASE_MESSAGE_ID: process.env.REACT_APP_FIREBASE_MESSAGE_ID,
      FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
    }
  }
}