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

### GET /snacks/earning

List all orderID, can be searched or sorted

**Query Params**

`OrderID` - int, will match exactly
`FoodType` - string
`Qty` - int
`Date` - date
`Price` - decimal

**Sample Response** 

```
[
    {
        "OrderId": 001,
        "FoodType": "Popcorn",
        "Qty": "5"
        "Date": "20/12/2019",
        "Price": "9.9"
    }
]
```