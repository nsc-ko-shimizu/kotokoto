function fibonacci(n){

    let answer = 0;

        if(n <= 2 ){
            answer = 1;
        }else{
            answer = fibonacci(n-1) + fibonacci(n-2);
        }

        return answer;  

}

    console.log (fibonacci(6));


