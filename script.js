//your JS code here. If required.
let count=0;
document.getElementById("incrementBtn").addEventListener("click", function(){
	 count++;
	 document.getElementById("counter").textContent=count;
	alert(count);
})
