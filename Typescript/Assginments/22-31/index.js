//! 1
// Do Not Edit The Code Below
var user = {
    // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName: function () {
        // 'getName' does not exist in type 'Member'
        return this.username;
    },
};
user.id = 200;
user.id = "200"; // Type 'string' is not assignable to type 'number'
user.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
var client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10,
    getPrice: function (price) {
        return price - this.discount;
    },
};
console.log("Client Id Is ".concat(client.id));
console.log("Client Name Is ".concat(client.username));
console.log("Client Has Dicount ".concat(client.discount));
console.log("Client Product After Discount Is ".concat(client.getPrice(200)));
var creature = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton",
};
//! 4
// Create Class Here
var Player = /** @class */ (function () {
    function Player(name, type, lvl, vip) {
        this.name = name;
        this.type = type;
        this.lvl = lvl;
        this.vip = vip;
    }
    Player.prototype.details = function () {
        return "".concat(this.vip ? "VIP" : "", " ").concat(this.name, ", Type Is ").concat(this.type, " Level Is ").concat(this.lvl);
    };
    return Player;
}());
// Do Not Edit The Code Below
var player1 = new Player("Osama", "Mage", 90, true);
var player2 = new Player("Shady", "Archer", "85", false);
var player3 = new Player("Amr", "Fighter", 50, true);
var player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
// //! 5
// class Shorten {
//   id: number;
//   username: string;
//   #title: string;
//   constructor(id: number, username: string, title: string) {
//     this.id = id;
//     this.username = username;
//     this.#title = title;
//   }
// }
// let tester = new Shorten(100, "Elzero", "Developer");
// console.log(tester.id);
// console.log(tester.username);
//! 6
var Show = /** @class */ (function () {
    function Show(_title) {
        this._title = _title;
    }
    Show.prototype.getTitle = function () {
        return this._title;
    };
    Show.prototype.setTitle = function (t) {
        this._title = t;
    };
    return Show;
}());
var tester = new Show("Elzero");
console.log(tester.getTitle()); // Property 'title' does not exist on type 'Show'
tester.setTitle("Osama"); // Property 'title' does not exist on type 'Show'
console.log(tester.getTitle()); // Property 'title' does not exist on type 'Show'
