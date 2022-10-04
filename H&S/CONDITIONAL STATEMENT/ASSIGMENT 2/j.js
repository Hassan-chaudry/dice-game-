var num1=prompt("Enter your Quiz marks")
var num2=prompt("Enter your mid-term marks")
var num3=prompt("Enter your Final  marks")
let average;
let sum=num1+num2+num3;
average=sum/3
if(average>90){
    average=num1+num2+num3;
    alert("The Grade is A");
}
else if (average>70 && average<90){
    average=num1+num2+num3;
    alert("The Grade is B");

}
else if (average>=50 && average<70){
    average=num1+num2+num3;
    alert("The Grade is C");

}
else{
    alert("The Grade is F");
}
