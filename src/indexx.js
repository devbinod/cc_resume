import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({
  region: "us-east-2",
});

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { createNewCourse } from "./helper.mjs";

export const handler = async (event) => {
  const dynamodb = new DynamoDBClient({
    apiVersion: "2012-08-10",
  });

  const resource = event?.resource;
  const httpMethod = event?.httpMethod;

  if (httpMethod === "POST") {
    const body = JSON.parse(event.body);
    console.log(body);

      try {
        const courseResponse = await createNewCourse(body, dynamodb);
        const emailCommand = getEmailCommand(body);
          const emailResponse = await ses.send(getEmailCommand);
          
          return {
            statusCode: 200,
            body: JSON.stringify({
                courseResponse: courseResponse,
                emailResponse:emailResponse
            })
          };
        
      } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error
            })
        };
    }
      

  
    } 
  }
};

const getEmailCommand = (body) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [body.email],
    },
    Message: {
      Body: {
        Text: { Data: body },
      },
      Subject: { Data: body.subject },
    },
    Source: "binodpant.np@gmail.com",
  });
};
