import request from 'supertest-graphql';
import gql from 'graphql-tag';

import { INestApplication } from '@nestjs/common';
import { setupTestApplication } from './mocks/test.util';
import { UsersData } from '../src/app/seed/data/users.data';

const QUERY_ME = gql`
  query Me {
    me {
      id
      email
      displayName
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      email
      displayName
    }
  }
`;

const UPDATE_USER_VARIABLES = {
  updateUserInput: {
    displayName: 'update displayName',
  },
};

describe('Users (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await setupTestApplication();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('Query Me', () => {
    it('Not authenticated user should get "Unauthorized" error', async () => {
      const { errors } = await request(app.getHttpServer()).query(QUERY_ME);

      expect(errors).toHaveLength(1);
      expect(errors[0].message).toBe('Unauthorized');
    });

    it('Authenticated user should get the own user data returned', async () => {
      const { data } = await request(app.getHttpServer())
        .auth(`${UsersData.sessionOwner1.id}`, { type: 'bearer' })
        .query(QUERY_ME)
        .expectNoErrors();

      expect(data).toMatchSnapshot();
    });
  });

  describe('Update User', () => {
    it('Not authenticated user should get "Unauthorized" error', async () => {
      const { errors } = await request(app.getHttpServer()).mutate(UPDATE_USER).variables(UPDATE_USER_VARIABLES);

      expect(errors).toHaveLength(1);
      expect(errors[0].message).toBe('Unauthorized');
    });

    it('Authenticated user can update own user data', async () => {
      const { data } = await request(app.getHttpServer())
        .auth(`${UsersData.sessionOwner1.id}`, { type: 'bearer' })
        .mutate(UPDATE_USER)
        .variables(UPDATE_USER_VARIABLES)
        .expectNoErrors();

      expect(data).toMatchSnapshot();
    });

    it('Authenticated user can only update the right fields', async () => {
      const { data } = await request(app.getHttpServer())
        .auth(`${UsersData.sessionOwner1.id}`, { type: 'bearer' })
        .mutate(UPDATE_USER)
        .variables({
          ...UPDATE_USER_VARIABLES,
          email: 'email-cannot-be-updated@test.com',
          id: 2,
        })
        .expectNoErrors();

      expect(data).toMatchSnapshot();
    });
  });
});
