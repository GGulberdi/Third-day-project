function fibonacci(n){
let a = 0n, b = 1n
for (let i =0; i<n; i++){
     [a,b] = [b,a+b]
    if(n=== 0){
        return 1
    }
    
    }	
    return a.toString()
    
}


console.log(fibonacci(20));