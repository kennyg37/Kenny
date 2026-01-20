export interface BlogPost {
    id: number;
    title: string;
    date: string;
    abstract: string;
    shape: string; // Placeholder for shape type (circle, square, triangle)
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Death of the Hamburger Menu",
        date: "Oct 24, 2024",
        abstract: "Why hidden navigation patterns are hurting user retention and what to use instead.",
        shape: "circle"
    },
    {
        id: 2,
        title: "Brutalism in the Age of AI",
        date: "Sep 12, 2024",
        abstract: "How raw, unfiltered design is becoming the new premium in a world of generated perfection.",
        shape: "square"
    },
    {
        id: 3,
        title: "React Server Components: A Retrospective",
        date: "Aug 05, 2024",
        abstract: "Looking back at the shift in mental models required for modern React architecture.",
        shape: "triangle"
    }
];
