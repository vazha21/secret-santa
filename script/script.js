
const getName = (randomName) => { //syntax: getName(randomnumber) -> returns name
    let arr = [
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
        'saxeli',
    ]
    return arr[randomName];
}

const getMail = (name) => { // syntax: getMail(randomnumber) -> returns mail@mail.com
    let arr = [
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
        'maili',
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







// Password : '6990C2BB6621EF250B1B8E64C80730256E92',
