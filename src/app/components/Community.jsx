// src/components/Community.js

export default function Community() {
    const friends = [
        "Jasmine",
        "Peter",
        "Krista",
        "Zira",
        "Samantha",
        "Yesenia",
    ];

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-subheading font-bold mb-4">Cheer On Your Friends🎉</h2>
            <ul className="">
                {friends.map((friend, index) => (
                    <li key={index} className="text-lg border-b-4 py-2">
                        {friend} just finished Day 11!
                    </li>
                ))}
            </ul>
        </div>
    );
}