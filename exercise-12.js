function konversiMenit(menit) {
    var _menit;
    var _detik;
    _menit = Math.floor(menit / 60);
    _detikCalc = menit % 60;
    _detik = _detikCalc + "";
    while (_detik.length < 2) {_detik = "0" + _detikCalc};
    return _menit + ':' + _detik;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00