'use strict';

const fs = require('fs');

fs.readFile('2020_jizhuan.json', (err, data) => {
    if (err) throw err;
    let points = JSON.parse(data);
    let newpoints = [];
    var tmpid = points.length;
    var length = points.length;
	console.log(length);
    for (var i = 0; i < length; i++){
	    for (var j=0; j < 100; j++){
      let tmp_la = (parseFloat(points[i].la) + Math.random()/10).toFixed(6);
      let tmp_lo = (parseFloat(points[i].lo) + Math.random()/10).toFixed(6);
      //let tmp_coname = points[Math.floor(Math.random() * 10)].co_name;
     // let tmp_coname =  tmpid;
      //let tmp_addr = points[Math.floor(Math.random() * 10)].addr;
      //let tmp_addr = points[Math.floor(Math.random() * 10)].addr;
      //let tmp_powater = points[Math.floor(Math.random() * 10)].po_water;
      //let tmp_poair = points[Math.floor(Math.random() * 10)].po_air;
      //let tmp_quan = points[Math.floor(Math.random() * 10)].quantity;
      tmpid++;
      newpoints.push({
        "id": tmpid,
      //  "co_name": tmp_coname,
      //  "addr": tmp_addr,
      //  "po_water": tmp_powater,
      //  "po_air": tmp_poair,
        "lo": tmp_lo,
        "la": tmp_la,
      //  "quantity": tmp_quan,
      });
	    }
    }
    fs.writeFileSync('points-2.json', JSON.stringify(newpoints));
});

console.log('This is after the read call');
