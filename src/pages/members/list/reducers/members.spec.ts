import { membersReducer, MembersState } from './members';
import { actionIds } from '../actions/actionIds';


describe('pages/members/list/reducers/members spec', () => {
  describe('membersReducer', () => {
    it('should should return empty array of members when passing undefined state and some action type', () => {
      // Arrange
      const state: MembersState = undefined;
      const action = {type: 'some type'}

      // Act
      const nextState = membersReducer(state, action);

      // Assert
      expect(nextState).toEqual([]);
    });

    it('should return same state when passing some state and a non recognized action', () => {
      // Arrange
      const membersArray: MembersState = [{
        id: 1,
        login: 'somebody',
        avatar_url: 'somebody\'s avatar url',
      }];
      const state: MembersState = membersArray;
      const action = {type: 'some type'}

      // Act
      const nextState = membersReducer(state, action);

      // Assert
      expect(nextState).toEqual(membersArray);
    });

    it('should return updated state when passing STATE, UPDATE_MEMBERS action type and members payload ', () => {
      // Arrange
      const state: MembersState= [{
        id: 1,
        login: 'somebody',
        avatar_url: 'somebody\'s avatar url',
      }];
      const membersPayload: MembersState = [{
        id: 0,
        login: 'someone',
        avatar_url: 'someone\'s avatar url',
      },
      {
        id: 1,
        login: 'another',
        avatar_url: 'another\'s avatar url',
      }];
      const action = {
        type: actionIds.UPDATE_MEMBERS,
        payload: membersPayload,
      }

      // Act
      const nextState = membersReducer(state, action);

      // Assert
      expect(nextState).toEqual(membersPayload);
    });
  });
});
