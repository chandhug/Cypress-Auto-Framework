
export function randomPassword(length){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$';
    const characterLength = characters.length;
    for(let i = 0; i <= length; i++){
        result +=  `${characters.charAt(
            Math.floor(Math.random() * characterLength),
            )}*1`;

    };
    return result;
};


export function randomText(length){
    let randomString = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const characterLength = characters.length;
    for(let i = 0; i <= length; i++){
        randomString +=   `${characters.charAt(
            Math.floor(Math.random() * characterLength),
            )}`;

    };
    return randomString;
};

export function randomNumber(max){

    let result = Math.floor(Math.random() * max);

    return result;
};


export function greetingMessage(max){

    const currentHour = new Date().getHours;
    if(currentHour >= 4 && currentHour <= 12) return 'Good Morning';
    if(currentHour >= 12 && currentHour <= 16) return 'Good AfterNoon';
    if(currentHour >= 16 && currentHour <= 4) return 'Good Evening';

    return 'Good Day!';
};