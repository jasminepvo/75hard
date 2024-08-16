"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "@/lib/server/appwrite";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const login = async () => {
        try {
            await account.createEmailSession(email, password);
            router.push("/account"); // Redirect to account page upon successful login
        } catch (error) {
            setError("Login failed. Please check your credentials.");
        }
    };

    const redirectToSignup = () => {
        router.push("/signup");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="w-full p-2 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="w-full p-2 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex space-x-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={login}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-green-500 text-white rounded"
                        onClick={redirectToSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}