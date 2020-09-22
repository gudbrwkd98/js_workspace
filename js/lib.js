   //절대값 Math 함수 이용
   //a,b 에 값을 넣어 절대값 반환 
function getAbs(a,b){//함수를 호출한 실행부가 결과를 가지고 

    return Math.abs(a - b);  //호출한곳으로 되돌아감 

} 

//랜덤 구하는 함수 

// n 을 넣으면  0 ~ n 까지의 포함하여 랜덤한 수를 반환  
function getRandom(n){
    var r = Math.random(); //1보다 작은 실수 0.000
    return Math.floor((n+1)*r); //소수점을 버린다 
   
}

/*
랜덤 구하는 함수 II
ex) 7과 23 사이의 랜덤값을 변환
a:7;
b:23;
*/

function getbetweenRandom(a,b){
    var k = Math.random();
    var r = Math.floor((k*(b+1-a)+a));
    return r ;
}
// 숫자에 0을 붙인 날짜처리 
// 매개변수 즉 인수로 전달하면 함수내에서 0을 붙여줌 
// (두자리 한자리 판단마져도 여기에서 알아서해줌)


function getZeroDate(n){
    if(n < 10){
        n = "0" + n;
    }

    return n;
}