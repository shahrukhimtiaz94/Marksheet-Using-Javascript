var name= prompt("Enter Your Full Name");
var rollNum= prompt("Enter Your Roll Number");
var mathsMarks = +prompt("Enter Your Maths Marks");
var englishMarks = +prompt("Enter Your English Marks");
var islamiatMarks = +prompt("Enter Your Islamiat Marks");
var physicsMarks = +prompt("Enter Your Physics Marks");
var urduMarks = +prompt("Enter Your Urdu Marks");

var totalMarks = 500;
var obtainMarks;
var percentage;
let Grade= " ";
var subjectTotalMarks = 100;
let scholar =" ";
obtainMarks = mathsMarks + englishMarks + islamiatMarks + physicsMarks + urduMarks ;
percentage= obtainMarks/totalMarks*100;
// console.log(percentage)

if (percentage > 90) {
    Grade = "A1";
    scholar = "You Can Avail 100% Scholarship.";
    }
    else if(percentage>80 && percentage<90 ){
    Grade="A+"
    scholar="You Can Avail 80% Scholarship."
    }
    else if(percentage>70 && percentage<80  ){
        Grade="A"
        scholar="You Can Avail 50% Scholarship. "
    }
    else if(percentage>60 && percentage<70 ){
        Grade="B"
        scholar="You are not Eligible For Scholarship";
    }
    else if(percentage>50 && percentage<60 ){
        Grade="C"
        scholar="You are not Eligible For Scholarship";
    }
    else if(percentage>40 && percentage<50 ){
        Grade="D"
        scholar="You are not Eligible For Scholarship";
    }
else{
    Grade="F"
    scholar="You are not Eligible For Scholarship";
}
console.log(percentage)
console.log(Grade)

var marksheetDiv= document.getElementById("marksheet")
var mainDIv= document.getElementById("main");
var bioDiv=document.getElementById("bio")
var nameLabel=document.createElement("span")
var rollNumLabel=document.createElement("span");

var candidate= document.createElement("span");
var rollNumElement= document.createElement("span");
rollNumElement.innerText=rollNum;
nameLabel.innerText="Name: ";
rollNumLabel.innerText="\nRoll Number: ";
candidate.innerText=name;
bioDiv.appendChild(nameLabel); 
bioDiv.appendChild(candidate); 
bioDiv.appendChild(rollNumLabel); 
bioDiv.appendChild(rollNumElement); 
console.log(rollNumElement)
tabel = document.createElement("table")
var tr1;
var td1;
var td2;
var td3;
var tr0= document.createElement("tr");
var th1= document.createElement("th");
var th2= document.createElement("th");
var th3= document.createElement("th");

th1.innerText="Subjects";
th2.innerText="Total Marks";
th3.innerText="Obtained Marks";

tr0.appendChild(th1)
tr0.appendChild(th2)
tr0.appendChild(th3)
tabel.appendChild(tr0)
marksheetDiv.appendChild(tabel)


  var  tr1=document.createElement("tr");
  var  td1=document.createElement("td");
  var  td2=document.createElement("td");
  var   td3=document.createElement("td");
    td1.innerText="Maths";
    td2.innerText=mathsMarks;
    td3.innerText=subjectTotalMarks;
    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr1.appendChild(td3)
    tabel.appendChild(tr1)
    marksheetDiv.appendChild(tabel)

    trEng=document.createElement("tr");
    td1Eng=document.createElement("td");
    td2Eng=document.createElement("td");
    td3Eng=document.createElement("td");
    td1Eng.innerText="English";
    td2Eng.innerText=englishMarks;
    td3Eng.innerText=subjectTotalMarks;
    trEng.appendChild(td1Eng)
    trEng.appendChild(td2Eng)
    trEng.appendChild(td3Eng)
    tabel.appendChild(trEng)
    marksheetDiv.appendChild(tabel)
  
    trIsl=document.createElement("tr");
    td1Isl=document.createElement("td");
    td2Isl=document.createElement("td");
    td3Isl=document.createElement("td");
    td1Isl.innerText="Islamiat";
    td2Isl.innerText=islamiatMarks;
    td3Isl.innerText=subjectTotalMarks;
    trIsl.appendChild(td1Isl)
    trIsl.appendChild(td2Isl)
    trIsl.appendChild(td3Isl)
    tabel.appendChild(trIsl)
    marksheetDiv.appendChild(tabel)
  
    trPhy=document.createElement("tr");
    td1Phy=document.createElement("td");
    td2Phy=document.createElement("td");
    td3Phy=document.createElement("td");
    td1Phy.innerText="Physics";
    td2Phy.innerText=physicsMarks;
    td3Phy.innerText=subjectTotalMarks;
    trPhy.appendChild(td1Phy)
    trPhy.appendChild(td2Phy)
    trPhy.appendChild(td3Phy)
    tabel.appendChild(trPhy)
    marksheetDiv.appendChild(tabel)
  
    trUrdu=document.createElement("tr");
    td1Urdu=document.createElement("td");
    td2Urdu=document.createElement("td");
    td3Urdu=document.createElement("td");
    td1Urdu.innerText="Urdu";
    td2Urdu.innerText=urduMarks;
    td3Urdu.innerText=subjectTotalMarks;
    trUrdu.appendChild(td1Urdu)
    trUrdu.appendChild(td2Urdu)
    trUrdu.appendChild(td3Urdu)
    tabel.appendChild(trUrdu)
    marksheetDiv.appendChild(tabel)

    
    trGrade=document.createElement("tr");
    trGrade.setAttribute('class','total-tr')
    td1obtain=document.createElement("td");
    td2Grade=document.createElement("td");
    td3Per=document.createElement("td");
    td1obtain.innerText="Obtain Marks: "+ obtainMarks;
    td2Grade.innerText="Grade: "+ Grade;
    td3Per.innerText="Percentage: "+ Math.round(percentage)+"%";
    trGrade.appendChild(td1obtain)
    trGrade.appendChild(td2Grade)
    trGrade.appendChild(td3Per)
    tabel.appendChild(trGrade)
    marksheetDiv.appendChild(tabel)

    trcholar=document.createElement("tr");
    trcholar.setAttribute('class','total-tr')
    tdSchol=document.createElement("td");
    tdSchol.innerText="Scholarship: "+ scholar;
    tdSchol.setAttribute('colspan', '3')
    trcholar.appendChild(tdSchol)
    tabel.appendChild(trcholar)
    marksheetDiv.appendChild(tabel)

console.log(tabel)