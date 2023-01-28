let array = Array.from({ length: 6 }, () => Math.floor(Math.random() * 50) + 1);
console.log("-- 1. Array keseluruhan adalah : --");
console.log(array);

let genap = array.filter(arrayGenap);
function arrayGenap(value, index) {
  return index % 2 == 0;
}
console.log("-- 2. Array index genap adalah : --");
console.log(genap);

let ganjil = array.filter(arrayGanjil);
function arrayGanjil(value, index) {
  return index % 2 == 1;
}
console.log("-- 3. Array index ganjil adalah : --");
console.log(ganjil);

console.log("-- 4. Detail setiap array adalah : --");
// function
function min(jenis) {
  if (jenis == "genap") {
    let minGenap = genap[0];
    for (let i = 1; i < genap.length; ++i) {
      if (genap[i] < minGenap) {
        minGenap = genap[i];
      }
    }
    return minGenap;
  } else if (jenis == "ganjil") {
    let minGanjil = ganjil[0];
    for (let i = 1; i < ganjil.length; ++i) {
      if (ganjil[i] < minGanjil) {
        minGanjil = ganjil[i];
      }
    }
    return minGanjil;
  }
}
function max(jenis) {
  if (jenis == "genap") {
    let maxGenap = genap[0];
    for (let i = 1; i < genap.length; ++i) {
      if (genap[i] > maxGenap) {
        maxGenap = genap[i];
      }
    }
    return maxGenap;
  } else if (jenis == "ganjil") {
    let maxGanjil = ganjil[0];
    for (let i = 1; i < ganjil.length; ++i) {
      if (ganjil[i] > maxGanjil) {
        maxGanjil = ganjil[i];
      }
    }
    return maxGanjil;
  }
}
function sum(jenis) {
  if (jenis == "genap") {
    let sumGenap = genap[0];
    for (let i = 1; i < genap.length; ++i) {
      sumGenap += genap[i];
    }
    return sumGenap;
  } else if (jenis == "ganjil") {
    let sumGanjil = ganjil[0];
    for (let i = 1; i < ganjil.length; ++i) {
      sumGanjil += ganjil[i];
    }
    return sumGanjil;
  }
}
function avg(jenis) {
  if (jenis == "genap") {
    let avgGenap = sum("genap") / genap.length;
    return avgGenap;
  } else if (jenis == "ganjil") {
    let avgGanjil = sum("ganjil") / ganjil.length;
    return avgGanjil;
  }
}
// end of function
console.log(" -- A. Genap : --");
console.log("genap paling kecil  : " + min("genap"));
console.log("genap paling besar  : " + max("genap"));
console.log("jumlah array genap  : " + sum("genap"));
console.log("rata rata genap     : " + avg("genap"));
console.log(" -- B. Ganjil : --");
console.log("ganjil paling kecil : " + min("ganjil"));
console.log("ganjil paling besar : " + max("ganjil"));
console.log("jumlah array ganjil : " + sum("ganjil"));
console.log("rata rata ganjil    : " + avg("ganjil"));

console.log("-- 5. Perbandingan --");
function cek(kondisi1, kondisi2, k3, k4) {
  return kondisi1 > kondisi2 ? "index " + k3 + " lebih besar daripada " + k4 : kondisi2 > kondisi1 ? "index " + k4 + " lebih besar daripada " + k3 : "nilai " + k3 + " sama dengan " + k4;
}
console.log(" -- a. Nilai Min --");
console.log(cek(min("genap"), min("ganjil"), "genap", "ganjil"));
console.log(" -- b. Nilai Max --");
console.log(cek(max("genap"), max("ganjil"), "genap", "ganjil"));
console.log(" -- c. Nilai Total --");
console.log(cek(sum("genap"), sum("ganjil"), "genap", "ganjil"));
console.log(" -- d. Nilai Rata-Rata --");
console.log(cek(avg("genap"), avg("ganjil"), "genap", "ganjil"));
