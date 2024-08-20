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

// src/components/Progress.js
export default function Progress({ completedDays }) { // Receive completedDays as a prop
    const days = Array.from({ length: 75 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold font-subheading mb-4">Your Progress</h2>
            <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => (
                    <div
                        key={day}
                        className={`w-8 h-8 border border-strongTeal rounded-md ${completedDays[index] ? 'bg-earthyBrown' : ''}`}
                    >
                        {/* Filled style applied conditionally */}
                    </div>
                ))}
            </div>
        </div>
    );
}