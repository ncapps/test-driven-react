import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../Carousel';
import slides from '../slides';

storiesOf('Carousel', module).add('default', () => (
    <Carousel slides={slides} />
));