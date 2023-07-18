function solution(t, p) {
    var answer = 0;

    let num = '';
    for(let i=0; i< p.length - 1; i+= 1) {
        num += t[i]
    }

    for(let i = p.length - 1 ; i < t.length ; i+=1) {
        num += t[i]
        console.log(num)
        if(+num <= +p) {
            answer += 1;
        }

        num = num.substring(1);
    }

    return answer;
}