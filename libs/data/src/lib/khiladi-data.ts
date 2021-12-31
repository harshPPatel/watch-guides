import { IData } from './interfaces/data.interface';

export const KhiladiData: IData = {
  title: 'Khiladi Franchise',
  description:
    'Khiladi is an Indian media franchise created by Akshay Kumar and Abbas–Mustan, consisting of a Bollywood action film series and an Indian stunt television series starring Akshay Kumar. Other than starring Akshay Kumar and the word "Khiladi" ("daredevil" or literally "Player" in Hindi) in the title, the films and television series have little in common, with the producers, directors and stories being different. The Khiladi film series was notable for its action scenes and stunt sequences performed by Akshay Kumar, including some of Indian cinema\'s most dangerous stunts, drawing comparisons to Hong Kong action cinema\'s Jackie Chan.',
  content: [
    {
      title: 'Khiladi',
      description:
        'Two friends wage bets for money and fun. There comes a time where they race to win the biggest bet, for they know that their lives depend on it.',
      imdbID: 'tt0104605',
      db: { id: '161436-khiladi', name: 'TMDB' },
      type: 'Movie',
      length: '2h 37m',
      releaseDate: 'June 5, 1992',
      revenue: -1,
      year: 1992,
      posterUrl:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/s8cqV9JSpbzJkWAN9E8xWU6jJ76.jpg',
    },
  ],
  referenceLinks: [
    {
      title: 'Wikipedia: Khiladi (Franchise)',
      url: 'https://en.wikipedia.org/wiki/Khiladi_(franchise)',
    },
    {
      title: 'Hero Image',
      url: 'https://wallpapercave.com/w/wp8178746',
    },
    {
      title: 'Logo',
      url: 'https://www.roku.com/en-ca/whats-on/movies/khiladi?id=d17842d1326e51fb9b8496c6514c5a66',
    },
    {
      title: 'TMDB Logo',
      url: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg',
    },
  ],
  // Reference links array
  // Make sure to add reference links to the image sources
  // We can add metadata as well
  //  like: theme color, theme image URL (from cloudinary), etc.
};
