"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use client-side routing
import { getLoggedInUser } from "@/lib/server/appwrite";
import Progress from "../../components/Progress";
import Track from "../../components/Track";
import Community from "../..//components/Community";

// A client-side function to handle sign-out
async function handleSignOut() {
    const response = await fetch("/api/signout", {
        method: "POST",
    });

    if (response.ok) {
        window.location.href = "/signup";
    } else {
        console.error("Sign out failed");
    }
}

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

    if (!user) return null; // Prevent rendering before user is fetched

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
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <ul>
                    <li>
                        <strong>Email:</strong> {user.email}
                    </li>
                    <li>
                        <strong>Name:</strong> {user.name}
                    </li>
                    <li>
                        <strong>ID:</strong> {user.$id}
                    </li>
                </ul>
                <button
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Sign out
                </button>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex justify-around mb-6">
                <button
                    onClick={() => setActiveTab('progress')}
                    className={`px-4 py-2 ${activeTab === 'progress' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Progress
                </button>
                <button
                    onClick={() => setActiveTab('track')}
                    className={`px-4 py-2 ${activeTab === 'track' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Track
                </button>
                <button
                    onClick={() => setActiveTab('community')}
                    className={`px-4 py-2 ${activeTab === 'community' ? 'font-bold border-b-2 border-blue-500' : ''}`}
                >
                    Community
                </button>
            </nav>

            {/* Render the content based on the active tab */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {renderContent()}
            </div>
        </div>
    );
}