let number = +prompt("Enter a number to be converted to binary!", "");



function binary(decimal) { 
    if (decimal == 0) { 
        return 0;
    }
    else { 
        let array = factors(decimal); 
        let result = getBinary(array); 
        return result;
    }
}






function factors(decimal) {
    let array = [];
    array.unshift(decimal);
    while (Math.floor(decimal) != 1) {
        decimal = decimal / 2;
        array.unshift(Math.floor(decimal));
    }
    return array;
}

function getBinary(array) {
    let modifiedArray = array.map((items) =>
        (items % 2 == 0) ? 0 : 1
    );

    let binaryStr = String(modifiedArray.join(''));
    return binaryStr;
}

alert(binary(number));