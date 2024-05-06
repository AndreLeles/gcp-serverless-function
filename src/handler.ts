'use strict';

export const hello = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'OLA MUNDO',
        input: event,
      },
      null,
      2
    ),
  };
};

