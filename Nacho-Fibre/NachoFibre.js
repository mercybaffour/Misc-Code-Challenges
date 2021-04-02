
class NachoFibre{

    fibonacci(n){
        /* 1. Have a starting array with first two terms.
            2. Loop through array to add subsequent element based on calculation of two previous terms.
            3. End loop on input n.
            4. Return value of the array value at index n.
        */
        let sequence = [0, 1];
        for(let i=1; i<=n; i++){
        //Calculation: After these first two elements, each subsequent element is equal to the sum of the previous two elements.
           sequence.push(sequence[i-1]+ sequence[i]);
        }
        return sequence[n];
    }

    kaleb(n){
          /* 1. Have a starting array with first two terms.
            2. Loop through array to add subsequent element based on calculation of two previous terms.
            3. End loop on input n.
            4. Return value of the array value at index n.
        */
        let sequence = [2, -1];
        for(let i=1; i<=n; i++){
        //Calculation: After these first two elements, each subsequent element is equal to twice the previous previous term minus the previous term.
           sequence.push((2 *sequence[i-1]) - sequence[i]);
        }
        return sequence[n];
    }

}

module.exports = NachoFibre;
