
fnameID = document.getElementById("fnameId")
lnameID = document.getElementById("lnameId")
fname = document.getElementById("fname")
lname = document.getElementById("lname")
managersId = document.getElementById("managersId")

class User {
    users = []

    constructor() {
    }

    addUser = (fName, lName) => {
        this.users.push({ fName, lName })
        console.log(this.users);
    }
}



class Manager {
    // user = new User();

    constructor(User) {  // constructor injection (كدا بقول متعملش اوبجكت من اليوزر غير لما الكلاس المانجر يتنفذ في الرن تايم)
        this.user = User

    }

    addManager = () => {
        this.user.addUser(fnameID.value, lnameID.value)
    }

    showManager = () => {
        managersId.innerHTML = ""
        this.user.users.map((user) => {
            const li = document.createElement("li");
            const textnode = document.createTextNode(`${user.fName}  ${user.lName} `);
            li.appendChild(textnode);
            managersId.appendChild(li)

        })

    }

}

