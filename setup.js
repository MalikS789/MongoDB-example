//ensure any previous instances are removed
db.Staff.remove({})
db.Cab.remove({})
db.Booking.remove({})
//Create staff,cab and booking table
db.Staff.insert({Name: "test",Address:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Username:"",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Driver",ContractType:"Fixed Rate"})
var driverid = db.Staff.find({}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str})
db.Cab.insert({RegNumber: "000 0000",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid})
var cabid = db.Cab.find({}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2009-07-31"),Time:ISODate("2009-07-31T16:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
// Add records to all three collections
db.Staff.insertMany([
   {Name: "Operator 1",Address:{"Address line 1":"56 fewf eas ","Address line 2":"3rd fsdfdsg","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 1",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 2",Address:{"Address line 1":"324 erfsdfa","Address line 2":"ds agds g","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 2",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 3",Address:{"Address line 1":"3254 dfsdfasdfa","Address line 2":"dsgsdgsd","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 3",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 4",Address:{"Address line 1":"2535 drfwefwe","Address line 2":"dsgdsgdsg","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 4",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 5",Address:{"Address line 1":"32523 efasdfatg","Address line 2":"sdgsdgsdgsd","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 5",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 6",Address:{"Address line 1":"35","Address line 2":"sdgdsgsd gdsg","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 6",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 7",Address:{"Address line 1":"ew we fwe f","Address line 2":"sdgsdgsdgsdgsd","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 7",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"},
 {Name: "Operator 8",Address:{"Address line 1":"35235 wdf","Address line 2":"sdgsdgsdgsdg","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Operator 8",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Operator",ContractType:"Fixed Rate"}, 
{Name: "Driver 1",Address:{"Address line 1":"3523rt edwfas f","Address line 2":"dsgsdgsdgsd","Town":"London","County":"England","Postcode":"CE E3E"},Username:"Driver 1",Password:"",Email:"test@test.com",Phnumber:075823457903,Role:"Driver",ContractType:"Fixed Rate"}
])
var driverid = db.Staff.find({}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str})
db.Cab.insertMany([
{RegNumber: "000 0001",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid},
{RegNumber: "000 0002",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Needs Servicing",Owner:driverid},
{RegNumber: "000 0003",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid},
{RegNumber: "000 0004",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid},
{RegNumber: "000 0005",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid},
{RegNumber: "000 0006",Age:1,MOTDate:ISODate("2009-07-31"),Condition:"Good",Owner:driverid}
])
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T08:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T13:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T16:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T19:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T22:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
db.Booking.insert({Client: {"ClientType":"private"},CabID:cabid,DriverID:driverid,Payment:{"DriverCost":0.00, "CoverCost":0.00},Date:ISODate("2019-07-31"),Time:ISODate("2019-07-31T23:00:00"),Destination:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"},Pickup:{"Address line 1":"","Address line 2":"","Town":"London","County":"England","Postcode":"CE E3E"}})
//seperate
//1) Show all bookings for a particular driver
var driverid = db.Staff.find({"Name":"Driver 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});
db.Booking.find({"DriverID":driverid})
//2) Show all bookings assigned to a particular cab
var cabid = db.Cab.find({"RegNumber":"000 0000"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});
db.Booking.find({"CabID":cabid})
//3) Show all cabs assigned to a driver
var driverid = db.Staff.find({"Name":"Driver 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});
db.Cab.find({"Owner":driverid})
//4) Show all bookings on a particular day
db.Booking.find({"Date":ISODate("2019-07-31")})
//5) Show the postcode of the address for a staff member
db.Staff.find({"Name":"Operator 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc.Address.Postcode})
