"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account, getLoggedInUser } from "@/lib/server/appwrite";
import Progress from "../../components/Progress";
import Track from "../../components/Track";
import Community from "../../components/Community";

export default function HomePage() {
    const [activeTab, setActiveTab] = useState('track');
    const [user, setUser] = useState(null);
    const [completedDays, setCompletedDays] = useState(Array(75).fill(false)); // Initialize all days as incomplete
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
            await account.deleteSession("current");
            setUser(null);
            router.push("/");
        } catch (error) {
            console.error("Sign out failed:", error);
        }
    };

    const updateCompletedDay = (dayIndex, isCompleted) => {
        const updatedCompletedDays = [...completedDays];
        updatedCompletedDays[dayIndex] = isCompleted;
        setCompletedDays(updatedCompletedDays);
    };

    if (!user) return null;

    const renderContent = () => {
        switch (activeTab) {
            case 'progress':
                return <Progress completedDays={completedDays} />;
            case 'track':
                return <Track updateCompletedDay={updateCompletedDay} completedDays={completedDays} />;
            case 'community':
                return <Community />;
            default:
                return <Track />;
        }
    };

    return (
        <div className="flex flex-col justify-between h-screen bg-softBeige text-earthyBrown">
            <div className="text-center m-4 text-strongTeal">
                <h1 className="text-xl">
                    Welcome back <strong className="">{user.name}!</strong>
                </h1>
                <button
                    onClick={handleSignOut}
                    className="text-strongTeal mt-2 underline font-light text-xs"
                >
                    Sign out
                </button>
            </div>

            <div className="flex-grow flex items-top justify-center">
                {renderContent()}
            </div>

            <nav className="flex justify-around py-4 border-t">
                <button
                    onClick={() => setActiveTab('progress')}
                    className={`uppercase flex-1 text-center px-4 py-2 ${activeTab === 'progress' ? 'font-bold border-b-2 border-earthyBrown' : ''}`}
                >
                    Progress
                </button>
                <button
                    onClick={() => setActiveTab('track')}
                    className={`uppercase flex-1 text-center px-4 py-2 ${activeTab === 'track' ? 'font-bold border-b-2 border-earthyBrown' : ''}`}
                >
                    Track
                </button>
                <button
                    onClick={() => setActiveTab('community')}
                    className={`uppercase flex-1 text-center px-4 py-2 ${activeTab === 'community' ? 'font-bold border-b-2 border-earthyBrown' : ''}`}
                >
                    Community
                </button>
            </nav>
        </div>
    );
}