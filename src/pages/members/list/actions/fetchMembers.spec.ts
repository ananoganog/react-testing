import { fetchMembers } from './fetchMembers';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { Member } from '../../../../rest-api/model';
import * as apiMember from '../../../../rest-api/api/member';
import { actionIds } from './actionIds';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('pages/members/list/actions/fetchMembers spec', () => {
  describe('fetchMembers', () => {
    it('should call fetchMembers', (done) => {
      // Arrange
      const stub = jest.spyOn(apiMember, 'fetchMembers').mockResolvedValue([]);

      // Act
      const store = getMockStore();
      store.dispatch<any>(fetchMembers())
        .then(() => {
          // Assert
          expect(stub).toHaveBeenCalled();
          done();
        });
    });

    it(`should dispatch action with type UPDATE_MEMBERS and payload with members when it fetch members from fetchMemebers`, (done) => {
      // Arrange
      const member: Member = {
        id: 0,
        login: 'someone',
        avatar_url: 'someone\'s avatar url',
      };
      const stub = jest.spyOn(apiMember, 'fetchMembers').mockResolvedValue([member]);


      // Act
      const store = getMockStore();

      store.dispatch<any>(fetchMembers())
        .then(() => {
          // Assert
          const expectedAction = store.getActions()[0];
          expect(expectedAction.type).toEqual(actionIds.UPDATE_MEMBERS);
          expect(expectedAction.payload).toEqual([
            {
              id: 0,
              login: 'someone',
              avatar_url: 'someone\'s avatar url',
            }]);
          done();
        });
    });

    it(`should call console.log when fetchMembers fails`, (done) => {
      // Arrange
      const stub = jest.spyOn(apiMember, 'fetchMembers').mockRejectedValue('fetching error');
      const logStub = jest.spyOn(window.console, 'log');


      // Act
      const store = getMockStore();

      store.dispatch<any>(fetchMembers())
        .then(() => {
          // Assert
          expect(logStub).toHaveBeenCalledWith('fetching error')
          done();
        });
    });
  });

});

