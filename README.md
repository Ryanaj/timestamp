# TimeStamp

TimeStamp is a API that takes common ISO 8601 strings or Unix timestamp values that are appended to the site URL and returns a JSON object containing Unix timestamp as well as a formatted human readable example. This program has been written to satisify the freeCodeCamp API Project: [Timestamp Microservice] (https://www.freecodecamp.com/challenges/timestamp-microservice).

#### User Stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: July 5, 2010).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

##### Usage:
```
https://backend-fcc-ryanaj.c9users.io/timestamp/[ISO 8601 String Here]
https://backend-fcc-ryanaj.c9users.io/timestamp/[Unix timestamp Here]
```
##### Example Input:
```
https://backend-fcc-ryanaj.c9users.io/timestamp/july 05, 2010
https://backend-fcc-ryanaj.c9users.io/timestamp/1278288000
```
##### Example Output:
```
{"au Naturel":"July-05-2010","Unix":1278288000}
```
