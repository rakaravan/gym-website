import { SiOpenaigym } from 'react-icons/si';
import Testimonials from './components/Testimonials';


export const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Gallery',
        path: '/gallery'
    },
    {
        name: 'Plans',
        path: '/plans'
    },
    {
        name: 'Trainers',
        path: '/trainers'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
];



export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: 'Program One',
        info: 'This is the day that the lord has made. We will rejoice!',
        path: '/programs/111'
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: 'Program Two',
        info: 'This is the day that the lord has made. We will rejoice!',
        path: '/programs/222'
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: 'Program Three',
        info: 'This is the day that the lord has made. We will rejoice!',
        path: '/programs/333'
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: 'Program Four',
        info: 'This is the day that the lord has made. We will rejoice!',
        path: '/programs/444'
    }
];



export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: 'Value One',
        desc: "this is the value we get from doing gym for hours for no hope of success.!"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: 'Value Two',
        desc: "this is the value we get from doing gym for hours for no hope of success.!"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: 'Value Three',
        desc: "this is the value we get from doing gym for hours for no hope of success.!"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: 'Value Four',
        desc: "this is the value we get from doing gym for hours for no hope of success.!"
    }
];



export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    },
    {
        id: 2,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    },
    {
        id: 3,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    },
    {
        id: 4,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    },
    {
        id: 5,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    },
    {
        id: 6,
        question: "How often should I exercise?",
        answer: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,"
    }
];



export const testimonials = [
    {
        id: 1,
        name: 'Diana Choff',
        quote: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        job: 'Student',
        avatar: require("./images/p1.jpg")    //require is used for importing external modules 
    },
    {
        id: 2,
        name: 'Starlet Wisle',
        quote: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        job: 'Student',
        avatar: require("./images/p2.jpg")    //require is used for importing external modules 
    },
    {
        id: 3,
        name: 'Micky Cohen',
        quote: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        job: 'Student',
        avatar: require("./images/p3.jpg")    //require is used for importing external modules 
    },
    {
        id: 4,
        name: 'Max Erups',
        quote: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        job: 'Student',
        avatar: require("./images/p4.jpg")    //require is used for importing external modules 
    },
    {
        id: 5,
        name: 'Kirsten Jorden',
        quote: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like',
        job: 'Student',
        avatar: require("./images/p5.jpeg")    //require is used for importing external modules 
    }

];



export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false}
        ]
    },

    {
        id: 1,
        name: 'Gold Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 59.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false}
        ]
    },

    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 99.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true}
        ]
    }
];




const trainer1 = require('./images/trainer1.jpg');
const trainer2 = require('./images/trainer2.jpg');
const trainer3 = require('./images/trainer3.jpg');
const trainer4 = require('./images/trainer4.jpg');
const trainer5 = require('./images/trainer5.jpg');

export const trainers = [
    {
        id: 1,
        image: trainer1,
        name: 'Caramel Aoud',
        job: 'Weightlifter Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: trainer2,
        name: 'Caramel Aoud',
        job: 'Weightlifter Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: trainer3,
        name: 'Caramel Aoud',
        job: 'Weightlifter Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: trainer4,
        name: 'Caramel Aoud',
        job: 'Weightlifter Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: trainer5,
        name: 'Caramel Aoud',
        job: 'Weightlifter Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
];