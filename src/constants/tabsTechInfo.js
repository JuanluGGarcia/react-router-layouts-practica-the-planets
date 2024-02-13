import { v4 } from "uuid";

const ONE = {
    id: v4(),
    image: '/assets/technology/image-launch-vehicle-landscape.jpg',
    title: 'LAUNCH VEHICLE',
    text: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!'
};

const TWO = {
    id: v4(),
    image: '/assets/technology/image-spaceport-landscape.jpg',
    title: 'SPACEPORT',
    text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
};

const THREE = {
    id: v4(),
    image: '/assets/technology/image-space-capsule-landscape.jpg',
    title: 'SPACE CAPSULE',
    text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where youll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
};

export const TECH_INFO = [
    ONE,
    TWO,
    THREE
];