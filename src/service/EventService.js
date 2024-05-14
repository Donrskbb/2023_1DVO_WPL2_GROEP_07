import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';

const events = [
    {
        id: 1,
        name: 'Event Title 1',
        date: '2024-04-20',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image1
    },
    {
        id: 2,
        name: 'Event Title 2',
        date: '2024-05-07',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image2
    },
    {
        id: 3,
        name: 'Event Title 3',
        date: '2024-04-20',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image3
    },
    {
        id: 4,
        name: 'Event Title 4',
        date: '2024-05-07',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image4
    },
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const EventService = {
    getEventsSmall() {
        return delay(1000).then(() => events.slice(0, 9));
    },
    getEventsLarge() {
        return delay(1500).then(() => events);
    }
};

export default EventService;
