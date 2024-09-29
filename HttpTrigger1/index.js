// Exports an async function for handling HTTP request in an Azure Function with access to context and request details. 
module.exports = async function (context, req) {

    // ______Code_Attribution______
// The following lines of code  was implemented from github.com
// Author: ggailey777
// Link: https://github.com/MicrosoftDocs/azure-docs/blob/main/articles/azure-functions/create-first-function-vs-code-node.md#run-the-function-locally

    try {
        // Log the incoming request to the function. 
        context.log('JavaScript HTTP trigger function processed a request.');

        // Read incoming data from query parameters or request body.
        const id = (req.query.id || (req.body && req.body.id));
        const dateTime = (req.query.dateTime || (req.body && req.body.dateTime));
        const severity = (req.query.severity || (req.body && req.body.severity));
    
        // Validate that required data is provided. 
        if (!id || !dateTime || !severity) {

            context.res = {
                // Return 400 Bad Request if any required field is missing. 
                status: 400
            };
            // Exit the function early. 
            return;
        }
        
        // Construct a message for the response based on the incoming data. 
        const message = `ID: ${id} , Date and Time: ${dateTime} and Severity: ${severity}`;
    
        // Create a response object in JSON format.
        const responseJSON = {
            "id": id,
            "dateTime": dateTime,
            "severity": severity,
            "message": message // Include the constructed message in the response.
        }

        // Set the response for the HTTP request.
        context.res = {
            // Attach the JSON response body.
            body: responseJSON,
            // Set the content type to JSON. 
            contentType: 'application/json'
        };
    } catch(err) {
        // Handle any unexpected errors by returning a 500 Internal Server Error.
        context.res = {
            // Return 500 status code for server errors.
            status: 500
        };
    }
    // ______end______
}
