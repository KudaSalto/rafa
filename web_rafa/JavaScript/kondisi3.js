var nilaiFisika = prompt("masukan nilai fisika")
var nilaiMatematika = prompt("masukan nilai Matematika")
var nilaiInggris = prompt("masukan nilai Inggris")

nilaiFisika = parseFloat(nilaiFisika)
nilaiMatematika = parseFloat(nilaiMatematika)
nilaiInggris = parseFloat(nilaiInggris)

var ratarata = (nilaiFisika + nilaiMatematika + nilaiInggris)
var nilaiHuruf

if (ratarata >=90){
    nilaiHuruf = "A"
} else if(ratarata >=80){
    nilaiHuruf = "B"
} else if (ratarata >= 70){
    nilaiHuruf = "C"
} else {
    nilaiHuruf = "D"
}

document.write("rata-rata")