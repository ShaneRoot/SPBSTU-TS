"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArray) {
    var newUserArray = [];
    if (Array.isArray(usersArray)) {
        usersArray.forEach(function (elUser) {
            var userInfo = userInfo_1.usersInfoArray.find(function (el) { return el.userId === elUser.userId; });
            if (userInfo) {
                var newUserObject = {
                    name: userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: 'man'
                };
                newUserArray.push(newUserObject);
            }
        });
    }
    return newUserArray;
}
var newUserArray = getUsersJobPositions(users_1.usersArray);
console.log('newUserArray', newUserArray);
