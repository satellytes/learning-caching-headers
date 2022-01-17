"use strict";

import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const hello: APIGatewayProxyHandlerV2 = async (event) => {
    console.log('Received request!');

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v3.0! Your HTTP API function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };
};
