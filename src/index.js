module.exports = function toReadable (number) {
    let x = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    }

    let y = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'twenty',
    }

    let z = {
    	1: 'ten',
    	2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    if (number>=0 && number<=10 ){
        return x[number];
    }

    if (number > 10 && number < 21){
    	return y[number.toString()[1]];
    }

    if (number > 20 && number < 100){
    	if (number.toString()[1] == "0"){
    		return z[number.toString()[0]];
    	} else {
    		return z[number.toString()[0]] + " " + x[number.toString()[1]];
    	}
    }

    if (number > 99 && number < 1000){
    	if (number.toString()[1] == "0" && number.toString()[2] == "0")
    		return x[number.toString()[0]] + " hundred";
    	else if (number.toString()[1] == "0")
            return x[number.toString()[0]] + " hundred " + x[number.toString()[2]];
        else if (number.toString()[1] == "1" && number.toString()[2] == 0) 
            return x[number.toString()[0]] + " hundred ten";
        else if (number.toString()[1] == "1") 
            return x[number.toString()[0]] + " hundred " + y[number.toString()[2]]
    	else if(number.toString()[2] == "0")
    		return x[number.toString()[0]] + " hundred " + z[number.toString()[1]];    
    	else 
    		return x[number.toString()[0]] + " hundred " + z[number.toString()[1]] + " " + x[number.toString()[2]];
        
    }
}