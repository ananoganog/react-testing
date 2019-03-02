import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './header';

describe('pages/members/list/components spec', () => {
  describe('Header', () => {
    it('should render a header without need passing anithing', () => {
      // Arrange

      // Act
      const component = shallow(<Header />)

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
});