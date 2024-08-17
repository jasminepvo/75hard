"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use client-side routing
import { account, getLoggedInUser } from "@/lib/server/appwrite";
import Progress from "../../components/Progress";
import Track from "../../components/Track";
import Community from "../..//components/Community";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('track'); // Default tab is Track
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const loggedInUser = await getLoggedInUser();
            if (!loggedInUser) {
                router.push("/signup");
            } else {
                setUser(loggedInUser);
            }
        };

        fetchUser();
    }, []);

    const handleSignOut = async () => {
        try {
            await account.deleteSession("current"); // Sign out the user
            setUser(null); // Clear the user state
            router.push("/"); // Redirect to the home page after sign out
        } catch (error) {
            console.error("Sign out failed:", error);
        }
    };

    if (!user) return null; // Don't render the page until user state is resolved

    const renderContent = () => {
        switch (activeTab) {
            case 'progress':
                return <Progress />;
            case 'track':
                return <Track />;
            case 'community':
                return <Community />;
            default:
                return <Track />;
        }
    };

    return (
        <div className="flex flex-col justify-between h-screen">
            <div className="text-center m-4">
                <h1 className="text-xl">
                    Welcome back <strong>{user.name}!</strong>
                </h1>
                <button
                    onClick={handleSignOut}
                    className="text-red-500 mt-2 underline font-light text-xs"
                >
                    Sign out
                </button>
            </div>

            {/* Render the content based on the active tab */}
            <div className="flex-grow flex items-top justify-center">
                {renderContent()}
            </div>

            {/* Navigation Tabs */}
            <nav className="flex justify-around py-4 border-t">
                <button
                    onClick={() => setActiveTab('progress')}
                    className={`flex-1 text-center px-4 py-2 ${activeTab === 'progress' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Progress
                </button>
                <button
                    onClick={() => setActiveTab('track')}
                    className={`flex-1 text-center px-4 py-2 ${activeTab === 'track' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Track
                </button>
                <button
                    onClick={() => setActiveTab('community')}
                    className={`flex-1 text-center px-4 py-2 ${activeTab === 'community' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Community
                </button>
            </nav>
        </div>
    );
}