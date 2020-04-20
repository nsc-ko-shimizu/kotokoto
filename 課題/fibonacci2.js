function fibLoop(x) {
    let list = []
    let num = 0
    for (let i = 0; i < x; i++){
        if(i<2){
            num = 1;
        }else{
            num=list[i-1]+list[i-2]
        }
        list.push(num);
    }
    return list
}

function name(x){
    s=fibLoop(x)
    s.forEach(element => {
        console.log(element)
    });
}

name(10)