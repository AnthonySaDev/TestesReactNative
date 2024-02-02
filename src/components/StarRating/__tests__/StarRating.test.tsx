import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('Se eu passar a nota', () => {
    it('mostrar a nota', () => {
      const {getByText} = render(<StarRating rating={{average: 5}} />);

      expect(getByText('5')).toBeTruthy();
    });
    it('mostrar o icone', () => {
      const {getByTestId} = render(<StarRating rating={{average: 5}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('Se eu não passar a nota', () => {
    it('mostrar nada', ()=>{
      const { UNSAFE_root: root } = render(<StarRating />);
      expect(root.children.length).toEqual(0); 
    } )
  })
});
