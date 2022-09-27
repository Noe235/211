const est = -5;
const pst = -8;
const jst = +9;
const utc = 0;


function calcTime(city, offset) {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  // create new Date object for different city
  // using supplied offset
  const esttime = new Date(utc + (3600000 * offset));
  return esttime.toLocaleTimeString("en-US");

}





setInterval(() => {

  document.getElementById("est").innerHTML = "EST " + calcTime('est', est);
  document.getElementById("pst").innerHTML = "PST " + calcTime('pst', pst)
  document.getElementById("jst").innerHTML = "JST " + calcTime('jst', jst)
  document.getElementById("utc").innerHTML = "UTC " + calcTime('utc', utc)
}, 1000);