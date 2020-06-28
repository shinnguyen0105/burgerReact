import React from 'react';
import { configure, shallow } from 'enzyme';
import Apdapter from 'enzyme-adapter-react-16';
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  it('should return  in the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
  it('shout store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: null,
          authRedirectPath: '/',
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'some token',
          userId: 'some user id',
        }
      )
    ).toEqual({
      token: 'some token',
      userId: 'some user id',
      error: null,
      loading: null,
      authRedirectPath: '/',
    });
  });
});
