//素数： 1と自分の数字（7だったら1と7）でしか割れない数字　ex)1,2,3,5,7,11...

 
   let num = 7;

   for (let i = 2; i < num; i++) {
     if(num % i == 0){
        console.log("素数じゃない");
        break;
      }else{
        console.log("素数");
      }
   }