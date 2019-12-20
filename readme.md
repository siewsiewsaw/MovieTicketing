### GET /movies/seating

List all the movies and the seating sold

**Query Params**

`movieID` - number
`seatNo` - number

**Sample Response** 

```json
[
    {
        "id": 0001,
        "movieName": "Spiderman",
        "seatNo": ["A1","K2","B5","F6"]
    }
]
```