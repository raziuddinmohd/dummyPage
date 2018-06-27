let checkLogin=(email,password,allUsers)=>{
	let isUserFound=false;
	let passwordCorrect=false;      
	
	
	

	for (const currentUser in allUsers) {
		console.log(currentUser);

		if (allUsers[currentUser]['email']=== email) {
			if(allUsers[currentUser]['password']=== password){
				isUserFound=true;
				passwordCorrect=true;
				break;
			}
			else{
				isUserFound=true;
				passwordCorrect=false;
				break;
			}
		}
		else{
			isUserFound=false;
		}
	}// end for loop 
	if(isUserFound=== true&& passwordCorrect=== true){
		alert(`welcome`+ ${email}+` you are logged in`);
	}else if(isUserFound=== true && passwordCorrect=== false){
		alert(`you have provided incorrect password`);
	}else{
		alert(`no user with this email found`);
	}
}//end check login funciton

const bubble_sort=(...a){
	let swapp;
	let n=a.length-1;
	let x=a;
	do{
		swapp=false;
		for(index in a){
			if(x[index]<x[index+1]){
			var temp=x[index];
			x[index]=x[index+1];
			x[index+1]=temp;
			swapp=true;
			}
		}
	}while(swapp);
return x;
}
// calling bubble sort function with numbers as arguments
bubble_sort(5,8,4,6,2,8,9,125,12,7);



