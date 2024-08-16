// src/components/Progress.js

export default function Progress() {
    const days = Array.from({ length: 75 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">Progress</h2>
            <div className="grid grid-cols-10 gap-2">
                {days.map((day) => (
                    <div key={day} className="w-8 h-8 border border-gray-400 rounded-md">
                        {/* Add a filled style here if the day is completed */}
                    </div>
                ))}
            </div>
        </div>
    );
}