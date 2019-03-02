import React from 'react';
import { shallow } from 'enzyme';
import { Row } from './row';
import { Member } from '../viewModel';


describe('pages/members/list/components spec', () => {
  describe('Row', () => {
    it('should render a row with 3 td when passing a member', () => {
      // Arrange
      const member: Member = {
        id: 0,
        name: 'someone',
        avatarUrl: 'someone\'s avatar url',
      };

      // Act
      const component = shallow(<Row member={member} />)

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
});
