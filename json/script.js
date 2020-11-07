// // json.stringify mengubah object javascript menjadi json
// // json.parse me-request file json lalu mengubahnya menjadi object

// let data = {
//     anjing : "hewan",
//     pisang : "buah",
//     batu : "benda mati"
// }

// JSON.parse() menggunakan XMLHttpRequest

// console.log(JSON.stringify(data));
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function ()  {
//     if (xhr.readyState == 4 && xhr.status ==200) {
//         let mahasiswa = this.responseText;
//         console.log(mahasiswa);
//     }

// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();

// menggunakan Jquery
$.getJSON('coba.json', function (data){
    console.log(data);
});