# Function 1

## Overview

This Azure Function is a serverless function triggered by an HTTP request. 
It accepts log entries via HTTP requests with specific query parameters or body fields, validates the inputs, and returns a JSON response with the provided information.

## Features

- Accepts `id`, `dateTime`, and `severity` via query parameters or request body.
- Returns the provided data in a structured JSON response.
- Validates that all the required fields are provided.
- Handles and logs errors gracefully. 

## Prerequisites

Before using this project, ensure that the following prerequisites are met: 

- **Node.js** installed on your system.
- **Azure Functions Core Tools** installed to test functions locally.
- **Azure Subscription** to deploy the function to the cloud (optional for local testing).

Look at this tutorial for more information: https://amirmustafaofficial.medium.com/azure-functions-creating-azure-functions-using-node-js-e3cddb5ec7c7 

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DivsLukG20/Function-1.git
   cd Function-1
   ```

## Usage

1. Start the application:

   ```bash
   func start
   ```

2. Access the API endpoint to get the most recent log entries:

   ```bash
   http://localhost:7071/api/HttpTrigger1?id=1&dateTime=2024-09-2912:00:00&severity=high
   ```

3. The response will return a JSON array of the log entry.

   ```bash
   {
    "id": "1",
    "dateTime": "2024-09-2912:00:00",
    "severity": "high",
    "message": "ID: 123, Date and Time: 2024-09-2912:00:00 and Severity: high"
   }
   ```

   ![Screenshot 2024-09-30 122219](https://github.com/user-attachments/assets/cdbce60e-c982-4602-8c65-33f5b1cca87e)


## Error Handling

- If any of the required parameters (`id`, `dateTime`, and `severity`) are missing, the function will return a `400 Bad Request` error.
- In case of any unexpected server errors, a `500 Internal Server Error` status will be returned.

## Deployment

I realized that deploying to Azure could lead to expenses, especially since I don't qualify for the free subscription. But I did read up on deploying and here is what I found. 

1. You can navigate to the Azure tools tab in VS Code and then navigate to **"Workspace"** which is on your left (Ariyarathna, 2024)
2. Then you should click on **"Deploy to Function App"** (Ariyarathna, 2024).
3. Then you have to select the correct function app that you created previously (Ariyarathna, 2024).
4. After confirming, it will deploy your backend to the Azure Function App (Ariyarathna, 2024).

Here's a YouTube tutorial on how to deploy as well: https://www.youtube.com/watch?v=RD3vUCdRf8o

## References

Ariyarathna, I. 2024. A Comprehensive Guide to Azure Functions with Node.js, 26 March 2024. [Online]. Available at: https://medium.com/@isuruariyarathna2k00/a-comprehensive-guide-to-azure-functions-with-node-js-3ebfbd2d0341 [Accessed 30 September 2024].  

