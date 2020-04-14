

//コンソールに「奇数です」と表示される
checkNumber(5);　


function checkNumber(number) {
    if ((number % 2) != 0 ){
        console.log("奇数です");
    }else{
        console.log("偶数です");
    }  
}




//コンソールに「偶数です」と表示される
checkNumber(2);

//問題８

function splitEvenOddArray(array) {

    //偶数
    let even = [];

    //奇数
    let odd = [];

    array.forEach(item => {
        
        if(item % 2) {
            odd.push(item);
        }else {
            even.push(item);
        }
    });

    console.log(`元のarray : ${array}`);
    console.log(`偶数 : ${even}`);
    console.log(`奇数 : ${odd}`);

}

splitEvenOddArray([1,2,3,4,5,6]);
