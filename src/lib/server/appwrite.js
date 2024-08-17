// src/lib/server/appwrite.js
import { Client, Account } from "appwrite";

// Create a new Client
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT); // Your project ID

// Create a new Account instance
export const account = new Account(client);

export async function createSessionClient() {
  const sessionCookie = cookies().get("my-custom-session");
  if (!sessionCookie) {
    console.error("No session cookie found");
    throw new Error("No session found");
  }

  client.setJWT(sessionCookie.value);
  return { account };
}

// Function to get the logged-in user
export async function getLoggedInUser() {
  try {
    const user = await account.get(); // Fetch user account details
    return user;
  } catch (error) {
    return null; // Return null if no user is logged in or if there's an error
  }
}
