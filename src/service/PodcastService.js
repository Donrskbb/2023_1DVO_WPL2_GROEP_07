import image1 from '@/assets/images/1.jpg';
import image2 from '@/assets/images/2.jpg';
import image3 from '@/assets/images/3.jpg';
import image4 from '@/assets/images/4.jpg';

const podcasts = [
    {
        id: 1,
        name: 'Podcasts en Crooze?',
        // date: '20 APRIL 2024',
        location: 'Crooze Musings #1',
        ticketsAvailable: 0,
        image: image1,
        paragraph: 'Kom genieten van de allereerste Crooze Podcast!',
        link: 'https://example.com'
    },
    {
        id: 2,
        name: 'Crooze is terug',
        //date: '28 APRIL 2024',
        location: 'Crooze Musings #2',
        ticketsAvailable: 0,
        image: image2,
        paragraph: 'Welkom terug bij de tweede Podcast!',
        link: 'https://example.com'
    },
    {
        id: 3,
        name: 'Jazz is weer in',
        //date: '12 MEI 2024',
        location: 'Crooze Musings #3',
        ticketsAvailable: 0,
        image: image3,
        paragraph: 'Kom luisteren naar onze visie over Jazz muziek!',
        link: 'https://example.com'
    },
    {
        id: 4,
        name: 'Retro Crooze',
        //date: '20 MEI 2024',
        location: 'Crooze Musings #4',
        ticketsAvailable: 0,
        image: image4,
        paragraph: 'Crooze the smooth radio!',
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
