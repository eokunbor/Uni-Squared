import { Client, Account, Avatars, Databases, ID } from 'react-native-appwrite';

const client = new Client();

client
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
  .setPlatform('dev.eokunbor.unisquared');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export { ID }; 

export default client;