import React from 'react';
import { shallow } from 'enzyme';
import { Body } from './body';
import { Member } from '../viewModel';


describe('pages/members/list/components spec', () => {
  describe('Body', () => {
    it('should render a body component without rows when passing an empty array of members', () => {
      // Arrange
      const members: Member[] = [];


      // Act
      const component = shallow(<Body members={members} />)

      // Assert
      expect(component.contains('Row')).toBeFalsy();
    });


    it('should render a body component when passing members property', () => {
      // Arrange
      const members: Member[] = [{
        id: 0,
        name: 'someone',
        avatarUrl: 'someone\'s avatar url',
      }];

      // Act
      const component = shallow(<Body members={members} />)

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
});