/*
1.number;
2.string;
3.null;
4.undefine;
5.boolean;
*/ 
let arr=[];
arr.push(1);
arr.push("hero");
arr.push(null);
output=arr.includes(1);
console.log(output);
for(let i in arr){
    console.log(i); //index
}
for(let i of arr){  //values
    console.log(i);
}
