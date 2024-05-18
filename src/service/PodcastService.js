import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';

const podcasts = [
    {
        id: 1,
        name: 'podcast Title 1',
        // date: '20 APRIL 2024',
        location: 'Crooze Musings #1',
        ticketsAvailable: 0,
        image: image1,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 2,
        name: 'podcast Title 2',
        //date: '28 APRIL 2024',
        location: 'Crooze Musings #2',
        ticketsAvailable: 0,
        image: image2,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 3,
        name: 'podcast Title 3',
        //date: '12 MEI 2024',
        location: 'Crooze Musings #3',
        ticketsAvailable: 0,
        image: image3,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 4,
        name: 'podcast Title 4',
        //date: '20 MEI 2024',
        location: 'Crooze Musings #4',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 5,
        name: 'podcast Title 5',
        //date: '20 MEI 2024',
        location: 'Crooze Musings #5',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 6,
        name: 'podcast Title 6',
        //date: '20 MEI 2024',
        location: 'Crooze Musings #6',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
    {
        id: 7,
        name: 'podcast Title 7',
        //date: '20 MEI 2024',
        location: 'Crooze Musings #7',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Kom genieten van de beste kikale jazz-muziek tijdens dit Crooze-podcast!',
        link: 'https://example.com'
    },
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const PodcastService = {
    getPodcastSmall() {
        return delay(1000).then(() => podcasts.slice(0, 9));
    },
    getPodcastLarge() {
        return delay(1500).then(() => podcasts);
    }
};

export default PodcastService;
