var goodDrivingRecord = true
var age = 26

if (goodDrivingRecord === true && age > 25) {
    console.log("Customer receives a 10% discount")
} else if (goodDrivingRecord === true || age > 25) {
    console.log("Customer must pay full price")
} if (goodDrivingRecord === false && age < 25) {
    console.log("Customer must have someone else sign for the rental")
}