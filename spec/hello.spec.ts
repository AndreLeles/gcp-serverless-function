import { expect, it } from 'vitest';

import { hello } from '../src/handler';

it('hello function should return a valid response', async (context) => {
  const event = {
    Records: [
      // Your sample record object here
    ],
  };

  const result = await hello(event);

  expect(result.statusCode).equal(200)

  const parsedBody = JSON.parse(result.body);

  expect(parsedBody.message).equal('OLA MUNDO');

});

