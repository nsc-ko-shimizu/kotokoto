//オリンピックが初めて開催された年
let startYear = 1896;

function gameYears(year) {
    //startYear　からyearまでのオリンピック開催年を
    //console.logを使って表示する。
    for (let olympicYear = startYear; olympicYear <= year; olympicYear =olympicYear + 4) {
        console.log(olympicYear);
     }

}

gameYears(2020);