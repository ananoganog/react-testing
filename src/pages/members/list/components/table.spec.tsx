import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../components';
import { Member } from '../viewModel';

describe('pages/members/list/components spec', () => {
  describe('Table', () => {
    it('should render a table when passing an empty array of members', () => {
      // Arrange
      const members: Member[] = [];


      // Act
      const component = shallow(<Table members={members} />)

      // Assert
      expect(component.contains('Row')).toBeFalsy();
    });


    it('should render a table component when passing members property not empty', () => {
      // Arrange
      const members: Member[] = [{
        id: 0,
        name: 'someone',
        avatarUrl: 'someone\'s avatar url',
      }];

      // Act
      const component = shallow(<Table members={members} />)

      // Assert
      expect(component).toMatchSnapshot();
    });
  });
});