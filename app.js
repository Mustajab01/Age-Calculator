let sd = document.getElementById("start-day");
let sm = document.getElementById("start-month");
let sy = document.getElementById("start-year");

let ed = document.getElementById("end-day");
let em = document.getElementById("end-month");
let ey = document.getElementById("end-year");

// let months_31 = Array(1,3,5,7,8,10,12);
// let months_30 = Array(2,4,6,9,11); 

// function leapYear(year){
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }
function calculate(){
    let fd,fm,fy;

    fy = (ey.value) - (sy.value);
    fm = (em.value) - (sm.value);
    fd = (ed.value) - (sd.value);


    // //FOR FINDING TOTAL DAYS: (CALCULATION MISTAKE. NOT INCLUDING LEAP DAYS)
    // let remaining_days=0,extra_days=0,total_days=0,remaining_months=0,remaining_years=0, yearly_days = 365;
    // remaining_years = fy;
    // remaining_months = 12 - sm.value; 

    // remaining_days = (30 - sd.value) + (remaining_months*30);
    // extra_days = ((em.value-1) *30) + (ed.value -0);  
    // total_days = (remaining_days + extra_days + 5);

    // total_days += (remaining_years-1) * 365;

    // document.getElementById("heading").textContent = total_days;

    if(fd < 0){
        fm--;
        fd = 30 + fd;
    }

    if (fm < 0){
        fy--;
        fm = 12 + fm;
    } 

    document.querySelector("#answer-day").textContent = fd;
    document.querySelector("#answer-month").textContent = fm;
    document.querySelector("#answer-year").textContent = fy;
}

function reset(){
    document.querySelector("#answer-day").textContent = 00;
    document.querySelector("#answer-month").textContent = 00;
    document.querySelector("#answer-year").textContent = 00;

    sd.placeholder = 1;
    sm.placeholder = 1;
    sy.placeholder = 2001;
    ed.placeholder = 1;
    em.placeholder = 1;
    ey.placeholder = 2023;
}