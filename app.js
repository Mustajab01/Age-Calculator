function calculate() {
    let sd = parseInt(document.getElementById("start-day").value);
    let sm = parseInt(document.getElementById("start-month").value);
    let sy = parseInt(document.getElementById("start-year").value);
    let ed = parseInt(document.getElementById("end-day").value);
    let em = parseInt(document.getElementById("end-month").value);
    let ey = parseInt(document.getElementById("end-year").value);

    // Input validation
    if (isNaN(sd) || isNaN(sm) || isNaN(sy) || isNaN(ed) || isNaN(em) || isNaN(ey)) {
        alert("Please enter valid numbers for day, month, and year.");
        return;
    }

    // Date validation
    if (sm < 1 || sm > 12 || em < 1 || em > 12 || sd < 1 || sd > 31 || ed < 1 || ed > 31) {
        alert("Invalid date input. Please enter valid dates.");
        return;
    }

    // Calculate age
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    let currentDay = currentDate.getDate();

    let years = currentYear - sy;
    let months = currentMonth - sm;
    let days = currentDay - sd;

    if (ed < sd) {
        em--;
        ed += 30; // Assuming each month has 30 days for simplicity
    }

    if (em < sm) {
        ey--;
        em += 12;
    }

    years = ey - sy;
    months = em - sm;
    days = ed - sd;

    document.querySelector("#answer-day").textContent = days < 10 ? "0" + days : days;
    document.querySelector("#answer-month").textContent = months < 10 ? "0" + months : months;
    document.querySelector("#answer-year").textContent = years < 10 ? "0" + years : years;
}

function reset() {
    document.getElementById("start-day").value = "";
    document.getElementById("start-month").value = "";
    document.getElementById("start-year").value = "";
    document.getElementById("end-day").value = "";
    document.getElementById("end-month").value = "";
    document.getElementById("end-year").value = "";
    document.querySelector("#answer-day").textContent = "00";
    document.querySelector("#answer-month").textContent = "00";
    document.querySelector("#answer-year").textContent = "00";
}
