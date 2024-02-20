

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-2' }); // Set your AWS region

const ses = new AWS.SES();

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    // Parse the body from the event
    const body = JSON.parse(event.body);
    
    // Construct the email parameters
    const emailParams = {
        Source: 'alexander.makarov62@gmail.com', // Your verified email in SES
        Destination: {
            ToAddresses: ['alexander.makarov62@gmail.com'],
        },
        Message: {
            Subject: {
                Data: 'Portfolio: Contact Form Submission by ' + body.name,
            },
            Body: {
                Text: {
                    Data: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
                },
            },
        },
    };

    try {
        // Send the email
        await ses.sendEmail(emailParams).promise();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Email sent successfully'),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Failed to send email'),
        };
    }
};
