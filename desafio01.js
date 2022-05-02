
reverse()

function reverse() {
        for (let n = 12; n < 1000000; n++) {
            numberStr = String(n).split("");
            if (Number(numberStr[numberStr.length - 1]) != 0) {
                numberReverse = numberStr.reverse()
                reverseNumber = Number(numberReverse.join(""))
                if( n != reverseNumber) {
                    sumReverse = n +  reverseNumber
                    if(sumReverse % 2 != 0) {
                        console.log(`Valor de n: ${n} que o resultado de n + reverse(n) é Ímpar`)
                    }
                }            
            }                    
        }
        
    }
    

   




