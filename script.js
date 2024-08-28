function numbers(...n) {
    let organized = n.sort((a, b) => a - b);
    console.log(organized);
    let reversed = organized.reverse();
    console.log(reversed);
    return;
}

numbers(3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25);



                    // Appunto per la Q&A 
// come fare se volessi stampare in console la frase: "la versione capovolta dell'array è" seguita dall'array



