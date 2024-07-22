# zeller_node_assessment
assesment over nodejs from zeller


//API curl for checkout

curl --location 'http://localhost:4000/api/checkout' \
--header 'Content-Type: application/json' \
--data '{
    "items": [
        "atv",
        "atv",
        "atv",
        "vga"
    ]
}'

//updating the payload based on the items selected or purchased

{
    "items": [
        "atv",
        "ipd",
        "ipd",
        "atv",
        "ipd",
        "ipd",
        "ipd"
    ]
}