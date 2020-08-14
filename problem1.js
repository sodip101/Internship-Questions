let num=21000;

function numSum(num){
	let numArray=num.toString().split('');
	let sum=0;
	for(const i of numArray){
		sum+=Number(i);
	}
	return sum;
}

console.log(numSum(num));
