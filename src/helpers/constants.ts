export const dialogFields = [
  {
    type: 'hidden', name: 'id',
  },
  {
    type: 'text', name: 'title', label: 'Title', placeholder: 'Title here',
  },
  {
    type: 'date', name: 'release_date', label: 'Release date', placeholder: 'Select Date',
  },
  {
    type: 'text', name: 'poster_path', label: 'Movie URL', placeholder: 'Movie URL here',
  },
  {
    type: 'select',
    name: 'genres',
    label: 'Genre',
    placeholder: 'Genre here',
    options: [
      'Comedy',
      'Drama',
      'Romance',
    ],
  },
  {
    type: 'text', name: 'overview', label: 'Overview', placeholder: 'Overview here',
  },
  {
    type: 'number', name: 'runtime', label: 'Runtime', placeholder: 'Runtime here',
  },
];

export const moviesTypes = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
