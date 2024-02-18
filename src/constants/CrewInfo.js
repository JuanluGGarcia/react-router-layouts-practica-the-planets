import { v4 } from "uuid";

const COMMANDER = {
    id: v4(),
    image: '/assets/crew/image-douglas-hurley.webp',
    post: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
};

const SPECIALIST = {
    id: v4(),
    image: '/assets/crew/image-mark-shuttleworth.webp',
    post: 'SPECIALIST',
    name: 'MARK SHUTTLEWORTH',
    text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
};

const PILOT = {
    id: v4(),
    image: '/assets/crew/image-victor-glover.webp',
    post: 'PILOT',
    name: 'VICTOR GLOVER',
    text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'

};

const ENGINEER = {
    id: v4(),
    image: '/assets/crew/image-anousheh-ansari.webp',
    post: 'ENGINEER',
    name: 'ANOUSHEH ANSARI',
    text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'

};

export const CREW_INFO = [
    COMMANDER,
    SPECIALIST,
    PILOT,
    ENGINEER
];