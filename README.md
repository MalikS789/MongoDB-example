# MongoDB - Cab Service
A MongoDB database script that can create a database setup aswell as simple queries to show that the database is fully usable. 
The script will instantiate and fill the database with dummy data aswell as query said data.

### Installation

All scripts can be automatically ran using the setup.js. The command to use in MongoDB shell is load(“setup.js”) assuming the setup.js file is in the same directory as the MongoDB installation. These include the scripts for inserting/creating new collections & scripts for inserting example data into the collections.

### Entity-Relationship Diagram

Due to the nature of the database being “schemaless”, the following diagram is to be used to show relationships between entities rather then an absolute structure of the database during it’s lifecycle.

<img src="" />

### Attributes

* Booking
  *	_id is the unique identifier
  *	Client is a listCollection of all the information associated with the client. Currently this is only the ClientType (corporate or private), but this could be expanded apon to include phone number, name, and other relevant information. MonoDB supports dynamic embedded documents.
  *	CabID is a string array of _id’s of documents in the Cab collection, that are to be assigned to this booking.
  *	DriverID is a string array of _id’s of documents in the Staff collection, that are to be assigned to this booking as drivers.
  *	Payment is a listCollection that is to contain a breakdown of the total amount of money paid by the client for the booking.
  *	Date is the day of which the client expects to be picked up
  *	Time is the time of which the client expects to be picked up
  *	Destination is a listCollection that will contain the address (in typical address form format) for where to client expects to be dropped off.
  *	Pickup is a listCollection that will contain the address (in typical address form format) for where the client expects to be picked up from.
* Staff
  *	_id is the unique identifier
  *	Name is the name of the staff member
  *	Address is a listCollection that will contain the address (in typical address form format) for where the staff member lives
  *	Username is the staff members login
  *	Password is the staff members password
  *	Email is the staff members email address
  *	Phnumber is the staff members personal phone number
  *	Role is the staff members role in the company (e.g. operator or driver)
  *	ContractType is the type of contract the employee has (fixed amount of number-of-recipes if it’s a driver for example).
* Cab
  *	_id is the unique identifier
  *	RegNumber is the Registration number of the car
  * Age is the age of the car in years
  * MOTDate is the date of when the car last had its MOT
  * Condition is a textual description of the car’s condition
  * Owner is the insured owner of the car. 
  
### Queries
* Show all bookings for a particular driver
  * ```var driverid = db.Staff.find({"Name":"Driver 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});```
  * ```db.Booking.find({"DriverID":driverid});```
* Show all bookings assigned to a particular cab
  * ```var cabid = db.Cab.find({"RegNumber":"000 0000"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});```
  * ```db.Booking.find({"CabID":cabid});```
* Show all cabs assigned to a driver
  * ```var driverid = db.Staff.find({"Name":"Driver 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc._id.str});```
  * ```db.Cab.find({"Owner":driverid});```
* Show all bookings on a particular day
  * ```db.Booking.find({"Date":ISODate("2019-07-31")});```
* Show the postcode of a particular employee
  * ```db.Staff.find({"Name":"Operator 1"}).sort({_id:-1}).limit(1).map(function(doc) {return doc.Address.Postcode});```
