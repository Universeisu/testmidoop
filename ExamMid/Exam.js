class Account {
    username = "";
    password = "";
    status = "";
    constructor(username,password,status){
        this.username = username;
        this.password = password;
        this.status = status;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    getstatus(){
        return this.status;
    }
}
class Person {
  Account = null;
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  getName() {
    return this.name;
  }
  getAdress() {
    return this.address;
  }
  getEmail() {
    return this.email;
  }
  getPhone() {
    return this.phone;
  }
  getAcoountType() {
    return this.accountType;
  }
  setAccount(Account) {
    this.Account = Account;
  }
  toString() {
    return `Guest[name = ${this.name},address = ${this.address},email = ${this.email},phone=${this.phone}, accountType = ${this.accountType}]`;
  }
}
class Guest extends Person {

    RoomBooking = null;
    setRoomBooking (RoomBooking){
        this.RoomBooking = RoomBooking
    }
  toString() {
    return `Person[name = ${this.name},address = ${this.address},email = ${this.email},phone=${this.phone}, accountType = ${this.accountType}]`;
  }
}


class Recaptionist extends Person {
  toString() {
    return `Person[name = ${this.name},address = ${this.address},email = ${this.email},phone=${this.phone}, accountType = ${this.accountType}]`;
  }
}

class Hotel {
    Room = null;
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getName() {
    return this.name;
  }
  getLocation() {
    return this.location;
  }
  setRoom(Room) {
    this.Room = Room;
  }
  toString() {
    return `Hotel[name = ${this.name},location = ${this.location}]`;
  }
}
class Room {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = "";
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  getRoomNumber() {
    return this.roomNumber;
  }
  getStyle() {
    return this.style;
  }
  getStatus() {
    return this.status;
  }
  getRoomPrice() {
    return this.roomPrice;
  }
  toString() {
    return `Room[roomNumber = ${this.roomNumber},style = ${this.style},status = ${this.status},roomPrice=${this.roomPrice}]`;
  }
}
class RoomBooking {
  reservationNumber = "";
  startDate = "";
  durationDay = "";
  status = "";
  createBy = "";
  style = "";
  Recaptionist = null;
  Room = null;
  constructor(reservationNumber, startDate, durationDay, status, createBy,style) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDay = durationDay;
    this.status = status;
    this.createBy = createBy;
    this.style = style;
  }
  getReservationNumber() {
    return this.reservationNumber;
  }
  getStartDate() {
    return this.startDate;
  }
  getDurationDay() {
    return this.durationDay;
  }
  getStatus() {
    return this.status;
  }
  getCreateBy() {
    return this.createBy;
  }
  setRecaptionist(Recaptionist){
    this.Recaptionist = Recaptionist;
  }
  setRoom(Room){
    this.Room = Room;
  }
  getRoom(){
    return this.Room;
  }

  toString() {
    return `RoomBooking[reservationNumber = ${this.reservationNumber},startDate = ${this.startDate},durationDay = ${this.durationDay},status = ${this.status},createBy=${this.createBy}],Room[Style = ${this.style}]`;
  }
}

const main = () => {
  const Guest1 = new Person("Alice", "Thailand","Alice@gmail.com","0800012365","Guest");
  const Guest2 = new Person("Bob","Korea","Bobe@gmail.com","0800782723","Guest");
  console.log(Guest1.toString());
  console.log(Guest2.toString());
 

  const Recaptionist1 = new Recaptionist("Catherine","Thailand","catty@gmail.com","0805012365","Recaptionist");
  const Recaptionist2 = new Recaptionist("David","Thailand","Davide@gmail.com","0806012365","Recaptionist");
  console.log(Recaptionist1.toString());
  console.log(Recaptionist2.toString());

  const Hotel1 = new Hotel ("Lovely Hotal","Thailand")
  console.log(Hotel1.toString());

  const Room1 = new Room ("01","Doucle bed Sea view","ว่าง","800");
  const Room2 = new Room("02", "Twin bed pool view", "ว่าง", "500");
  const Room3 = new Room("03", "Twin bed Sea view", "ว่าง", "1000");
  const Room4 = new Room("04", "Doucle bed pool view", "ว่าง", "700");
 // const authorsNames = Book1.getAuthorsName();
 console.log(Room1.toString());
 console.log(Room2.toString());
 console.log(Room3.toString());
 console.log(Room4.toString());

 const RoomBooking1 = new RoomBooking(
   "001",
   "16/03/2024",
   " 19/03/2024",
   "David",
   "Double bed Sea view"
 );
 
 console.log(RoomBooking1.toString());





};

main();
