import React from 'react';

const referralParams = 'utm_source=test-driven-carousel&utm_medium=referral';

const getUsernameUrl = (username) => `https://unsplash.com/@${username}?${referralParams}`;

const getAttribution = ({ name, username }) => (
  <>
    Photo by
    {' '}
    <a href={getUsernameUrl(username)}>{name}</a>
    {' '}
    on
    {' '}
    <a href={`https://unsplash.com/?${referralParams}`}>Unsplash</a>
  </>
);

export default [
  {
    description: 'Village',
    attribution: getAttribution({ name: 'Sheng Li', username: 'parachutel_' }),
    imgUrl: 'https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1'
      + '&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80',
  },
  {
    description: 'Beach',
    attribution: getAttribution({ name: 'Tyler Nix', username: 'jtylernix' }),
    imgUrl: 'https://images.unsplash.com/photo-1528150230181-99bbf7b22162?ixlib=rb-1.2.1'
      + '&auto=format&fit=crop&w=1800&q=80',
  },
  {
    description: 'Gold Coast',
    attribution: getAttribution({ name: 'City of Gold Coast', username: 'cityofgoldcoast' }),
    imgUrl: 'https://images.unsplash.com/photo-1582761370596-77a6a42350d7?ixlib=rb-1.2.1'
      + '&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80',
  },
  {
    description: 'Greece',
    attribution: getAttribution({ name: 'Alex Azabache', username: 'alexazabache' }),
    imgUrl: 'https://images.unsplash.com/photo-1571406252241-db0280bd36cd?ixlib=rb-1.2.1'
      + '&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80',
  },
  {
    description: 'Boat House',
    attribution: getAttribution({ name: 'Karsten Würth', username: 'karsten_wuerth' }),
    imgUrl: 'https://images.unsplash.com/photo-1485038101637-2d4833df1b35?ixlib=rb-1.2.1'
      + '&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80',
  },
];
