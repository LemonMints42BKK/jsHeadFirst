
function validateNumber(value){
//varlidte the number	
	if (isNaN(value))
		alert("กรุณากรอกตัวเลขเท่านั้น");
}
function validateZIPCode(value){
//varlidte the zip code
	if (isNAN(value) || value.length != 5)
		alert("กรุณากรอกรหัสไปรษณีย์ 5 หลัก");
}
function calcPrice(){
	let maxPrince = document.getElementById("income").value * 0.4 * 150;
	alert("ราคาบ้านที่คุณสามารถซื้อได้คือ " + maxPrince + " บาท");
}
function findHouses(form){
	let bedrooms = document.getElementById("bedrooms").value;
	let zipCode = document.getElementById("zipCode").value;
	//Display a list of matcing houses from the server 
	form.submit();
}