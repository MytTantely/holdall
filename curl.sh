curl -X GET "http://localhost:3000/api/houses" 
ab -k -c 20 -n 250 "http://localhost:3000/api/houses"

ab -k -c 20 -n 250 "http://localhost:3000/api/houses"