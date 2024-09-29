module.exports = async function (context, req) {

    // ______Code_Attribution______
// The following lines of code  was implemented from github.com
// Author: ggailey777
// Link: https://github.com/MicrosoftDocs/azure-docs/blob/main/articles/azure-functions/create-first-function-vs-code-node.md#run-the-function-locally

    try {
        context.log('JavaScript HTTP trigger function processed a request.');

        // Read incoming data
        const id = (req.query.id || (req.body && req.body.id));
        const dateTime = (req.query.dateTime || (req.body && req.body.dateTime));
        const severity = (req.query.severity || (req.body && req.body.severity));
    
        // Fail if incoming data is required
        if (!id || !dateTime || !severity) {

            context.res = {
                status: 400
            };
            return;
        }
        
        // Add or change code here
        const message = `ID: ${id} , Date and Time: ${dateTime} and Severity: ${severity}`;
    
        // Construct response
        const responseJSON = {
            "id": id,
            "dateTime": dateTime,
            "severity": severity,
            "message": message
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseJSON,
            contentType: 'application/json'
        };
    } catch(err) {
        context.res = {
            status: 500
        };
    }
    // ______end______
}
