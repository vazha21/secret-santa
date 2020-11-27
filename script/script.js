const randomize = (names) => { // syntax: randomize([names]) -> returns  object.
    for (i of names) { 
        let randomGuy = names[Math.floor(Math.random() * names.length)];
        while (randomGuy === i) {
            randomGuy = names[Math.floor(Math.random() * names.length)];
        }
        // amorcheuls vshli arraydan ro sxvasac ar amouvides.
        names = names.filter((element) => element !== randomGuy)
        let email = getMail(i);
        let kid = getName(randomGuy);  // visac chuqnian
        emailSend(email,kid)
        
        
    }
}

const getName = (randomName) => { //syntax: getName(randomnumber) -> returns name
    let arr = [
        'vazha',
        'rostika',
        'gio',
        'gvrito',
        'luka',
        'zura',
        'koba',
        'kote',
        'koka',
        'nika',
    ]
    return arr[randomName];
}

const getMail = (name) => { // syntax: getMail(randomnumber) -> returns mail@mail.com
    let arr = [
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
        'vazha.abdushelishvili.1@btu.edu.ge',
    ]
    return arr[name];
}

const emailSend = (mail,randomName) => { // syntax : emailSend("mimgebis maili", "random saxeli")
    Email.send({
        SecureToken : '5819ab7a-23cf-4a87-ad50-4f3d75a998ca',
        To : mail,
        From : 'cikvisanta2020@gmail.com',
        Subject : 'Secret Santa',
        Body : `You are santa of ${randomName}`
    }).then(
        message => alert(message))
}

const arrayOf = (number) => {
    let arr = [];
    for (let i = 0; i<number; i++) {
        arr[i] = i;
    }
    return arr;
}

let arr = arrayOf(10);

randomize(arr);





// Password : '6990C2BB6621EF250B1B8E64C80730256E92',
