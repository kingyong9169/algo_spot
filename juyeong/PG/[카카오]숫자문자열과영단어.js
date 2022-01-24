function solution(s) {
    let result =[];
    result.push(s.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/g, (x)=>{
        switch(x){
            case "zero":
                return 0;
            case "one":
                return 1;
            case "two":
                return 2;
            case "three":
                return 3;
            case "four":
                return 4;
            case "five":
                return 5;
            case "six":
                return 6;
            case "seven":
                return 7;
            case "eight":
                return 8;
            case "nine":
                return 9;
        }
    }));
    return Number(result.join(''));
}