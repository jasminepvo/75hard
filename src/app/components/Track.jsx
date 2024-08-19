// src/components/Track.js

export default function Track() {
    const tasks = [
        "45 min workout",
        "45 min workout outdoor",
        "Drink water",
        "Follow diet, no cheating",
        "Read 10 pages",
        "Take progress photo",
    ];

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-6xl font-extrabold font-subheading m-8">Day 11/75</h2>
            <ul className="space-y-2">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-5 w-5" />
                        <span className="text-lg">{task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}