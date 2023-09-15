import {usersArray} from "./users";
import {usersInfoArray} from "./userInfo";
import {IUser} from "./interfaces/user";
import {IUserInfo, IUserJobPositions} from "./interfaces/userInfo";


function getUsersJobPositions(usersArray: IUser[]): IUserJobPositions[] {
    const newUserArray: IUserJobPositions[] = [];

    if (Array.isArray(usersArray)) {
        usersArray.forEach((elUser)=> {
            const userInfo = usersInfoArray.find(el => el.userId === elUser.userId);
            if (userInfo) {
                const newUserObject: IUserJobPositions = {
                    name:userInfo.name,
                    position: userInfo.organization.position,
                    age: userInfo.age,
                    gender: 'woman'
                }
                newUserArray.push(newUserObject);
            }
        })
    }
    return newUserArray;
}

const newUserArray = getUsersJobPositions(usersArray);
console.log('newUserArray', newUserArray)




