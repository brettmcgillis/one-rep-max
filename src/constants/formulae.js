const formulae = [
    {
        name: 'Brzycki',
        description: '1RM = weight lifted x (36 / (37 - reps))',
        equation: (weight, reps) => weight * (36 / (37 - reps)), 
    },
    {
        name: 'Epley',
        description: '1RM = weight lifted x (1 + (reps/30))',
        equation: (weight, reps) => weight * (1 + (reps/30)), 
    },
    {
        name: 'Lombardi',
        description: '1RM = weight lifted x reps^0.10',
        equation: (weight, reps) => weight * (reps**0.10), 
    },
];

export default formulae;
