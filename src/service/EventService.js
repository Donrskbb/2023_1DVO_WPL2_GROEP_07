import image1 from '@/assets/images/1.jfif';
import image2 from '@/assets/images/2.jfif';
import image3 from '@/assets/images/3.jfif';
import image4 from '@/assets/images/4.jfif';

const events = [
    {
        id: 1,
        name: 'Turkish Retro Night Band',
        date: 'vr 14 jun, 21:00',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image1,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 2,
        name: 'Jeugdcentrum Rondpunt 26',
        date: 'wo 6 nov, 20:15',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image2,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 3,
        name: 'MARCEL COENEN & FRIENDS@RAGNAROK LIVE',
        date: 'za 29 jun, 19:00',
        location: 'HASSELT',
        ticketsAvailable: 0,
        image: image3,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-event!',
        link: 'https://example.com'
    },
    {
        id: 4,
        name: 'Bachot Muna Concert JAZZ & DREAMS',
        date: 'zondag om 17:00',
        location: 'HASSELT',
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
