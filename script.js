// Externalized script from index.html

// Workout and Meal Plan Data
const workoutPlans = {
    1: {
        title: "Chest + Triceps",
        exercises: [
            "Push-ups – 3 × 15",
            "Bench Press / Dumbbell Press – 3 × 10",
            "Incline Dumbbell Press – 3 × 10",
            "Chest Fly (machine/dumbbell) – 3 × 12",
            "Triceps Dips – 3 × 10",
            "Triceps Pushdown – 3 × 12",
            "Finish: 10 min brisk walking / cycling"
        ]
    },
    2: {
        title: "Back + Biceps",
        exercises: [
            "Pull-ups / Lat Pulldown – 3 × 8–10",
            "Seated Row – 3 × 12",
            "Deadlift (light–moderate) – 3 × 8",
            "Dumbbell Curl – 3 × 12",
            "Hammer Curl – 3 × 10",
            "Finish: 10 min skipping / treadmill"
        ]
    },
    3: {
        title: "Cardio + Core",
        exercises: [
            "Brisk walking / Jogging – 25–30 min",
            "Plank – 3 × 30–45 sec",
            "Leg Raises – 3 × 12",
            "Russian Twists – 3 × 20",
            "Mountain Climbers – 3 × 20"
        ]
    },
    4: {
        title: "Legs + Shoulders",
        exercises: [
            "Squats – 3 × 12",
            "Lunges – 3 × 10 (each leg)",
            "Leg Press – 3 × 12",
            "Shoulder Press – 3 × 10",
            "Lateral Raises – 3 × 12",
            "Shrugs – 3 × 12"
        ]
    },
    5: {
        title: "Full Body / Functional",
        exercises: [
            "Burpees – 3 × 10",
            "Push-ups – 3 × 15",
            "Kettlebell Swings / Dumbbell Swings – 3 × 15",
            "Jump Squats – 3 × 12",
            "Plank Hold – 1 min × 3"
        ]
    },
    6: {
        title: "Yoga / Stretching",
        exercises: [
            "Recovery Day",
            "Yoga Session – 20–30 min",
            "Full Body Stretching",
            "Light Mobility Work"
        ]
    },
    7: {
        title: "Rest Day",
        exercises: [
            "Complete Rest",
            "Stay Hydrated",
            "Light Walking (Optional)",
            "Focus on Recovery"
        ]
    }
};

const mealPlans = {
    1: [
        { time: "EARLY MORNING", items: "Warm water + 5 soaked almonds" },
        { time: "BREAKFAST", items: "2 idli + sambar<br>2 boiled eggs" },
        { time: "MID-MORNING", items: "Papaya bowl" },
        { time: "LUNCH", items: "1 cup rice<br>Sardine fish curry<br>Cabbage thoran + curd" },
        { time: "EVENING SNACK", items: "Roasted peanuts (1 handful)" },
        { time: "DINNER", items: "2 chapati<br>Chicken curry" }
    ],
    2: [
        { time: "EARLY MORNING", items: "Warm water + banana" },
        { time: "BREAKFAST", items: "2 dosa (less oil)<br>Egg curry (2 eggs)" },
        { time: "MID-MORNING", items: "Tender coconut water" },
        { time: "LUNCH", items: "Rice (1 cup)<br>Mackerel fish fry (small piece)<br>Beans thoran + moru" },
        { time: "EVENING SNACK", items: "Boiled kadala" },
        { time: "DINNER", items: "Vegetable omelette (3 eggs)" }
    ],
    3: [
        { time: "EARLY MORNING", items: "Warm water + 5 almonds" },
        { time: "BREAKFAST", items: "Oats (1 cup)<br>1 apple" },
        { time: "MID-MORNING", items: "Orange / guava" },
        { time: "LUNCH", items: "Rice<br>Chicken curry<br>Carrot-beans thoran" },
        { time: "EVENING SNACK", items: "1 boiled egg" },
        { time: "DINNER", items: "2 chapati<br>Veg curry" }
    ],
    4: [
        { time: "EARLY MORNING", items: "Warm water + banana" },
        { time: "BREAKFAST", items: "2 idli<br>Sambar + 2 eggs" },
        { time: "MID-MORNING", items: "Coconut water" },
        { time: "LUNCH", items: "Rice<br>Fish curry<br>Spinach thoran + curd" },
        { time: "EVENING SNACK", items: "Roasted peanuts" },
        { time: "DINNER", items: "Egg curry<br>Small portion rice / 2 chapati" }
    ],
    5: [
        { time: "EARLY MORNING", items: "Warm water + soaked almonds" },
        { time: "BREAKFAST", items: "2 dosa<br>Peanut chutney + boiled egg" },
        { time: "MID-MORNING", items: "Fruit bowl" },
        { time: "LUNCH", items: "Rice<br>Chicken roast (small portion)<br>Veg thoran + moru" },
        { time: "EVENING SNACK", items: "Boiled green gram" },
        { time: "DINNER", items: "2 chapati<br>Chicken curry" }
    ],
    6: [
        { time: "EARLY MORNING", items: "Warm water" },
        { time: "BREAKFAST", items: "Upma / oats upma<br>2 boiled eggs" },
        { time: "MID-MORNING", items: "Apple / papaya" },
        { time: "LUNCH", items: "Rice<br>Fish curry<br>Beetroot thoran" },
        { time: "EVENING SNACK", items: "Black tea + kadala" },
        { time: "DINNER", items: "Vegetable omelette (3 eggs)" }
    ],
    7: [
        { time: "EARLY MORNING", items: "Warm water + banana" },
        { time: "BREAKFAST", items: "Puttu (small)<br>Kadala curry + 1 egg" },
        { time: "MID-MORNING", items: "Coconut water" },
        { time: "LUNCH", items: "Rice (controlled)<br>Fish / chicken curry<br>Any vegetable thoran" },
        { time: "EVENING SNACK", items: "Fruit + nuts" },
        { time: "DINNER", items: "Rice kanji (small bowl)<br>Fish / egg" }
    ]
};

// Calculate current day (starting from Jan 13, 2026)
function getCurrentDay() {
    const startDate = new Date('2026-01-13');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return (diffDays % 7) + 1; // Returns 1-7
}

// Update the page with current day data
function updateDailyTracker() {
    const currentDay = getCurrentDay();
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Update date and day number
    document.getElementById('currentDate').textContent = today.toLocaleDateString('en-US', options);
    document.getElementById('dayNumber').textContent = currentDay;

    // Update workout
    const workout = workoutPlans[currentDay];
    const workoutList = document.getElementById('workoutList');
    workoutList.innerHTML = workout.exercises.map(function(exercise) {
        const parts = exercise.split('–');
        if (parts.length > 1) {
            return '<li><strong>' + parts[0].trim() + '</strong> – ' + parts[1].trim() + '</li>';
        }
        return '<li>' + exercise + '</li>';
    }).join('');

    // Update meal plan
    if (typeof currentMealDayShown === 'undefined') currentMealDayShown = currentDay;
    renderMealPlanFor(currentMealDayShown);
}

// State for meal plan day shown (today or tomorrow)
let currentMealDayShown;

function getNextDayNumber(day) {
    return day === 7 ? 1 : day + 1;
}

function renderMealPlanFor(day) {
    const meals = mealPlans[day];
    const mealPlan = document.getElementById('mealPlan');
    const header = document.getElementById('mealPlanHeader');
    const btn = document.getElementById('btnViewNext');

    // small fade animation
    mealPlan.style.transition = 'opacity 0.25s';
    mealPlan.style.opacity = '0';
    setTimeout(() => {
        mealPlan.innerHTML = meals.map(function(meal) {
            return '<li><div class="meal-time">' + meal.time + '</div><div class="meal-items">' + meal.items + '</div></li>';
        }).join('');
        mealPlan.style.opacity = '1';
    }, 200);

    const todayNum = getCurrentDay();
    if (day === todayNum) {
        header.textContent = '🍽️ Today\'s Meal Plan';
        btn.textContent = 'View Next Day';
        btn.setAttribute('aria-pressed', 'false');
    } else {
        header.textContent = '🍽️ Tomorrow\'s Meal Plan';
        btn.textContent = 'View Today';
        btn.setAttribute('aria-pressed', 'true');
    }
}

// Toggle button click handler
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btnViewNext') {
        const todayNum = getCurrentDay();
        if (currentMealDayShown === todayNum) {
            currentMealDayShown = getNextDayNumber(todayNum);
        } else {
            currentMealDayShown = todayNum;
        }
        renderMealPlanFor(currentMealDayShown);
    }
});

// Initialize on page load
updateDailyTracker();

// Add interactivity
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Navigation clicked:', e.target.textContent);
    });
});

document.querySelector('.btn-bookmarks').addEventListener('click', () => {
    alert('My Bookmarks feature coming soon!');
});

document.querySelector('.btn-donate').addEventListener('click', () => {
    alert('Thank you for considering a donation!');
});

// Smooth animations on load
window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});
