const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var re = /11/gi;
    var re1 = /10/gi;
    var resStr= '';
    let str = '';

  
    for (var i =0; i<(expr.length/10) ;i++){
        str = expr.slice(i*10,((i+1)*10));
    
        str= str.replace(re1, '.');
     
        str = str.replace(re, '-');
        str = str.replace(/0/gi, '');
        str = str.replace(/\*/gi, '');
     
        resStr+= (str ==='')? ' ': MORSE_TABLE[str];
       
    }

    return resStr;
}

module.exports = {
    decode
}