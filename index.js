
// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
  
// ]
// function superbowlWin(arr){
//    if (arr.find(w => w === "W"){
//      return `${arr.year} a win!`
//    }else{
//     return "undifine"
//    }
     
// }

function superbowlWin(arr) {
	const foundObj = arr.find(function(ele) {
		return ele['result'] === 'W';
	});
	if (foundObj) {
		return foundObj['year'];
	}
}