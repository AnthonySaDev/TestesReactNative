import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  test('o componente renderizou corretamente', () => {
   const {debug} = render(<StarRating rating={{average: 5}} />);
   debug();
  });
});
