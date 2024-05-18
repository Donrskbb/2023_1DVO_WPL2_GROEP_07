import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';

const events = [
    {
        id: 1,
        name: 'Event Title 1',
        date: '20 APRIL 2024',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image1,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 2,
        name: 'Event Title 2',
        date: '28 APRIL 2024',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image2,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 3,
        name: 'Event Title 3',
        date: '12 MEI 2024',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image3,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 4,
        name: 'Event Title 4',
        date: '20 MEI 2024',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 5,
        name: 'Event Title 4',
        date: '20 MEI 2024',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 6,
        name: 'Event Title 4',
        date: '20 MEI 2024',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 7,
        name: 'Event Title 4',
        date: '20 MEI 2024',
        location: 'ANTWERPEN',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
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
