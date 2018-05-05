var data = [
{"date":"mon","hour":"0","value":"12"},
{"date":"mon","hour":"1","value":"12"},
{"date":"mon","hour":"2","value":"12"},
{"date":"mon","hour":"3","value":"12"},
{"date":"mon","hour":"4","value":"12"},
{"date":"mon","hour":"5","value":"12"},
{"date":"mon","hour":"6","value":"12"},
{"date":"mon","hour":"7","value":"12"},
{"date":"mon","hour":"8","value":"12"},
{"date":"mon","hour":"9","value":"23"},
{"date":"mon","hour":"10","value":"2"},
{"date":"mon","hour":"11","value":"13"},
{"date":"mon","hour":"12","value":"13"},
{"date":"mon","hour":"13","value":"13"},
{"date":"mon","hour":"14","value":"13"},
{"date":"mon","hour":"15","value":"13"},
{"date":"mon","hour":"16","value":"13"},
{"date":"mon","hour":"17","value":"13"},
{"date":"mon","hour":"18","value":"13"},
{"date":"mon","hour":"19","value":"13"},
{"date":"mon","hour":"20","value":"13"},
{"date":"mon","hour":"21","value":"13"},
{"date":"mon","hour":"22","value":"13"},
{"date":"mon","hour":"23","value":"13"},
{"date":"tue","hour":"0","value":"2"},
{"date":"tue","hour":"1","value":"3"},
{"date":"tue","hour":"2","value":"4"},
{"date":"tue","hour":"3","value":"5"},
{"date":"tue","hour":"4","value":"6"},
{"date":"tue","hour":"5","value":"7"},
{"date":"tue","hour":"6","value":"8"},
{"date":"tue","hour":"7","value":"9"},
{"date":"tue","hour":"8","value":"10"},
{"date":"tue","hour":"9","value":"11"},
{"date":"tue","hour":"10","value":"12"},
{"date":"tue","hour":"11","value":"13"},
{"date":"tue","hour":"12","value":"14"},
{"date":"tue","hour":"13","value":"15"},
{"date":"tue","hour":"14","value":"16"},
{"date":"tue","hour":"15","value":"17"},
{"date":"tue","hour":"16","value":"18"},
{"date":"tue","hour":"17","value":"19"},
{"date":"tue","hour":"18","value":"20"},
{"date":"tue","hour":"19","value":"21"},
{"date":"tue","hour":"20","value":"22"},
{"date":"tue","hour":"21","value":"23"},
{"date":"tue","hour":"22","value":"24"},
{"date":"tue","hour":"23","value":"25"},
]
function setYdata (data){
  var list = [];
  for (var i = 0; i < data.length; i++) {
    for ( key in data[i] ) {
      if (key == 'hour') {
          list.push(data[i][key]);
      }
    }
  }
  var obj = {};
  var arr = [];
  var array = list;
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    if (obj[ele] == undefined) {
      obj[ele] = 'stored';
      arr.push(ele)
    }
  }
  return arr
}
console.log(setYdata(data));
