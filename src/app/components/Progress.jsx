// src/components/Progress.js
const motivationalQuotes = [
    "Keep going.",
    "I believe in you.",
    "You got this!",
    "Every day counts.",
    "Stay strong.",
    "Make today count.",
    "Nothing changes if nothing changes."
];

// Choose a random quote for the Progress tab
const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];


export default function Progress() {
    const days = Array.from({ length: 75 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">{randomQuote}</h2>
            <div className="grid grid-cols-7 gap-2">
                {days.map((day) => (
                    <div key={day} className="w-8 h-8 border border-gray-400 rounded-md">
                        {/* Add a filled style here if the day is completed */}
                    </div>
                ))}
            </div>
        </div>
    );
}