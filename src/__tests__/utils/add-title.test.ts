import selectionFilter from '../../utils/add_title';

it('description testing wit filtered data', () => {
    const series = [
            {
              id: 'series-1x',
              title: 'Tiger King',
              description:
                'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
              genre: 'documentaries',
              maturity: '18',
              slug: 'tiger-king',
            }
        ];


      const films = [
        {
          id: 'film-1x',
          title: 'The Prestige',
          description: 'Great film...',
          genre: 'drama',
          maturity: '15',
          slug: 'the-prestige',
        },
      ];

      //assertions
      const slides = selectionFilter({series: series, films: films});
      expect(slides.films[0].title).toBe('Drama');
      expect(slides.films[0].data[0].description).toBe('Great film...');
      expect(slides.films[0].data[0].maturity).toBe('15');

      
      expect(slides.series[0].title).toBe('Documentaries');
      expect(slides.series[0].data[0].description).toBe('An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.');
      expect(slides.series[0].data[0].maturity).toBe('18');

      
});

test('selectionFilter with no data', () => {
    const slides = selectionFilter({series: [], films: []});
    expect(slides.series[0]?.title).toBe('Documentaries');
    expect(slides.films[0]?.title).toBe('Drama');

  });