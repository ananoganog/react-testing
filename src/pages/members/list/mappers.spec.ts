
import * as model from '../../../rest-api/model';
import * as vm from './viewModel';
import { mapMemberListModelToVM } from './mappers';

describe('pages/members/list/mappers specs', () => {
  describe('mapMemberModelToVM', () => {
    it('should return empty array when passing members equals emtpy array', () => {
      // Arrange
      const members: model.Member[] = [];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when passing undefined', () => {
      // Arrange
      const members: model.Member[] = undefined;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when passing null', () => {
      // Arrange
      const members: model.Member[] = null;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return an array with length 1 when passing members as an array of length 1', () => {
      // Arrange
      const members: model.Member[] = [{
        id: 0,
        login: 'someone',
        avatar_url: 'someone\'s avatar url',
      }];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toHaveLength(1);
    });

    it('should return an array with Member elements when passing members as an array Member models', () => {
      // Arrange
      const members: model.Member[] = [
        {
          id: 0,
          login: 'someone',
          avatar_url: 'someone\'s avatar url',
        },
        {
          id: 1,
          login: 'another',
          avatar_url: 'another\'s avatar url',
        },
      ];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      const expectedResult : vm.Member[] = [
        {
          id: 0,
          name: 'someone',
          avatarUrl: 'someone\'s avatar url',
        },
        {
          id: 1,
          name: 'another',
          avatarUrl: 'another\'s avatar url',
        },
      ];
      expect(result).toEqual(expectedResult);
    });
  });
});