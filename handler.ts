"use strict";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const CORS_HEADERS = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
}

const formatBody = (object: any) => {
  return JSON.stringify(object, null, 2);
}

export const handleRequest: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`Received ${event.requestContext.http.method} request...`);

  const createdDate = new Date().toISOString();

  /**
   * The max age is 1 year, which is 31536000 seconds.
   *
   * https://stackoverflow.com/questions/7071763/max-value-for-cache-control-header-in-http
   */
  const browserCacheSeconds = 10;
  const cdnCacheSeconds = 60;
  const cdnStaleCacheSeconds = 30;

  return {
    statusCode: 200,
    body: formatBody(
      {
        createdDate
      },
    ),
    headers: {
      ...CORS_HEADERS,
      'Cache-Control': `max-age=${browserCacheSeconds}, s-maxage=${cdnCacheSeconds}`,
    }
  };
};
