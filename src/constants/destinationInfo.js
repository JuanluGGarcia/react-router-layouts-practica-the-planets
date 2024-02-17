import { v4 } from "uuid";

const MOON = {
    id: v4(),
    name: 'MOON',
    image: '/assets/destination/image-moon.webp',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    stats: [
		{ name: 'AVG. DISTANCE', value: '384,400 KM' },
		{ name: 'EST. TRAVEL TIME', value: '3 DAYS' }
    ]

};

const MARS = {
    id: v4(),
    name: 'MARS',
    image: '/assets/destination/image-mars.webp',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    stats: [
		{ name: 'AVG. DISTANCE', value: '225 MIL. KM' },
		{ name: 'EST. TRAVEL TIME', value: '9 MONTHS' }
    ]

};

const EUROPA = {
    id: v4(),
    name: 'EUROPA',
    image: '/assets/destination/image-europa.webp',
    text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    stats: [
		{ name: 'AVG. DISTANCE', value: '628 MIL. KM' },
		{ name: 'EST. TRAVEL TIME', value: '3 YEARS' }
    ]

};

const TITAN = {
    id: v4(),
    name: 'TITAN',
    image: '/assets/destination/image-titan.webp',
    text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    stats: [
		{ name: 'AVG. DISTANCE', value: '1.6 BIL. KM' },
		{ name: 'EST. TRAVEL TIME', value: '7 YEARS' }
    ]

};

export const DESTINATION_INFO = [
    MOON,
    MARS,
    EUROPA,
    TITAN
];