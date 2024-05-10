//James Churcher
//Custom module from Exercise 10 Level 1

//Screams AAAAAH!
export default function scream(length){
    let result = "";
    for (let i=0; i<length; i++){
        result += "A";
    }

    result += "H!";

    return result;
}