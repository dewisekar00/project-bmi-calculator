

document.getElementById('calculateBtn').addEventListener('click', function() {


    let beratkg =  parseFloat(document.getElementById('kg').value);
    let tinggiCm =  parseFloat(document.getElementById('cm').value);
    //Buat perkondisia jika user belum memasukan angka munculin pesan warning 
    if (beratkg === 0 || tinggiCm === 0 || isNaN(beratkg) || isNaN(tinggiCm)) {
        let warning = document.getElementById("warning");
        warning.innerHTML = "Yuk Isi dulu angkanya";
    }
    else{
       warning.style.display = "none";
        let tinggiMeter = tinggiCm / 100; 
        let resultBmi = beratkg / (tinggiMeter * tinggiMeter);
        let roundedBmi = resultBmi.toFixed(1); 
        // MENAMPILKAN KE HALAMAN WEB
        let resultHtml = document.getElementById('result-num');
        resultHtml.innerHTML = roundedBmi;
        

// membuat perkondisian untuk setiap hasil bmi
    const resultTxt = (roundedBmi)=> {

        if (roundedBmi < 18.5) {
            return "Underweight";
        } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {  
            return "Normal Weight";  
        } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
            return "Overweight";
        } else {
            return "Obesity";
        }
    
    
    
    }
// munculin pesan bmi
    let resulttext = document.getElementById('result-text');
resulttext.innerHTML =  resultTxt(roundedBmi);
document.querySelector('.result-bmi').style.display = 'block';
    }
   

});
