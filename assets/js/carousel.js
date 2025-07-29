// Card data array
const cards = [
    {
        id: 1,
        title: "Daily Mindfulness",
        image: "assets/images/mindfulness.webp",
        alt: "Mindfulness",
        tasks: [
            "5 minutes of deep breathing",
            "Practice gratitude", 
            "Mindful eating",
            "Body scan meditation"
        ]
    },
    {
        id: 2,
        title: "Physical Activity",
        image: "assets/images/physical-activity.webp",
        alt: "Exercise",
        tasks: [
            "30 minutes of movement",
            "Take the stairs",
            "Stretch breaks",
            "Nature walk"
        ]
    },
    {
        id: 3,
        title: "Better Sleep",
        image: "assets/images/better-sleep.webp",
        alt: "Sleep",
        tasks: [
            "8 hours of sleep",
            "No screens before bed",
            "Consistent bedtime",
            "Relaxing routine"
        ]
    },
    {
        id: 4,
        title: "Social Connection",
        image: "assets/images/social-connection.webp",
        alt: "Social Connection",
        tasks: [
            "Call a friend",
            "Join a group activity",
            "Practice active listening",
            "Express appreciation"
        ]
    },
    {
        id: 5,
        title: "Healthy Nutrition",
        image: "assets/images/healthy-nutrition.webp",
        alt: "Nutrition",
        tasks: [
            "Eat balanced meals",
            "Stay hydrated",
            "Limit processed foods",
            "Plan healthy snacks"
        ]
    },
    {
        id: 6,
        title: "Healthy Boundaries",
        image: "assets/images/healthy-boundaries.webp",
        alt: "Boundaries",
        tasks: [
            "Learn to say no",
            "Set work-life balance",
            "Limit social media",
            "Prioritize self-care"
        ]
    },
    {
        id: 7,
        title: "Stress Management",
        image: "assets/images/stress-management.webp",
        alt: "Stress Management",
        tasks: [
            "Identify triggers",
            "Practice relaxation",
            "Time management",
            "Seek support"
        ]
    },
    {
        id: 8,
        title: "Creative Expression",
        image: "assets/images/creative-expression.webp",
        alt: "Creative Expression",
        tasks: [
            "Draw or paint",
            "Write in a journal",
            "Play music",
            "Try crafts"
        ]
    },
    {
        id: 9,
        title: "Goal Setting",
        image: "assets/images/goal-setting.webp",
        alt: "Goal Setting",
        tasks: [
            "Set SMART goals",
            "Break into small steps",
            "Track progress",
            "Celebrate achievements"
        ]
    },
    {
        id: 10,
        title: "Positive Mindset",
        image: "assets/images/positive-mindset.webp",
        alt: "Positive Mindset",
        tasks: [
            "Practice positive self-talk",
            "Focus on solutions, not problems",
            "Challenge negative thoughts",
            "Celebrate small wins"
        ]
    }
];

let currentStartIndex = 0;
const cardsPerSlide = 5;

function createCardHTML(card, index) {
    return `
        <div class="card-wrapper">
            <div class="card h-100 shadow-sm">
                <div class="card-img-container" style="width: 300px; height: 200px; overflow: hidden; border-radius: 0.375rem 0.375rem 0 0;">
                    <img src="${card.image}" class="card-img-top" alt="${card.alt}">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${card.title}</h5>
                    <div class="checklist">
                        ${card.tasks.map((task, taskIndex) => `
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="${card.title.toLowerCase().replace(/\s+/g, '')}_${index}_${taskIndex}">
                                <label class="form-check-label" for="${card.title.toLowerCase().replace(/\s+/g, '')}_${index}_${taskIndex}">${task}</label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCards() {
    const cardRow = document.getElementById('card-row');
    cardRow.innerHTML = '';
    
    for (let i = 0; i < cardsPerSlide; i++) {
        const cardIndex = (currentStartIndex + i) % cards.length;
        const card = cards[cardIndex];
        cardRow.innerHTML += createCardHTML(card, cardIndex);
    }
}

function nextSlide() {
    currentStartIndex = (currentStartIndex + 1) % cards.length;
    renderCards();
}

function previousSlide() {
    currentStartIndex = (currentStartIndex - 1 + cards.length) % cards.length;
    renderCards();
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCards();
});