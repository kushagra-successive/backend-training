## HTTP Error Status Codes

HTTP status codes are standard response codes returned by web servers to indicate the success or failure of a client's request. These codes are grouped into different classes, each representing a different category of responses. This document provides a detailed description of common HTTP error status codes.

1xx Informational Responses
100 - Continue
The server has received the initial part of the request and will continue to process it.

101 - Switching Protocols
The server is switching protocols as specified in the Upgrade header sent by the client.

2xx Success
200 - OK
The request has succeeded. The response depends on the method used in the request.

201 - Created
The request has been fulfilled, resulting in the creation of a new resource.

204 - No Content
The server successfully processed the request but does not need to return any content.

3xx Redirection
301 - Moved Permanently
The requested resource has been permanently moved to a new location.

302 - Found (Previously "Moved Temporarily")
The requested resource temporarily resides under a different URL.

304 - Not Modified
The client's cached copy of the requested resource is still valid, and the server has not modified it.

4xx Client Errors
400 - Bad Request
The server cannot process the request due to a client error, such as malformed syntax.

401 - Unauthorized
The request requires authentication, and the client needs to provide valid credentials.

403 - Forbidden
The server understood the request but refuses to authorize it.

404 - Not Found
The server cannot find the requested resource.

405 - Method Not Allowed
The request method is not supported for the requested resource.

408 - Request Timeout
The server timed out waiting for the request from the client.

429 - Too Many Requests
The client has sent too many requests within a given time frame.

5xx Server Errors
500 - Internal Server Error
The server encountered an unexpected condition that prevented it from fulfilling the request.

501 - Not Implemented
The server does not support the functionality required to fulfill the request.

502 - Bad Gateway
The server, while acting as a gateway or proxy, received an invalid response from the upstream server.

503 - Service Unavailable
The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

504 - Gateway Timeout
The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.

505 - HTTP Version Not Supported
The server does not support the HTTP protocol version used in the request.
