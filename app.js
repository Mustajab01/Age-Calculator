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

    // Check for leap years
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Adjust February days for leap years
    let daysInFebStart = isLeapYear(sy) ? 29 : 28;
    let daysInFebEnd = isLeapYear(ey) ? 29 : 28;

    // Validate February days
    if (sm === 2 && sd > daysInFebStart) {
        alert("Invalid start date for February. Please enter a valid date.");
        return;
    }

    if (em === 2 && ed > daysInFebEnd) {
        alert("Invalid end date for February. Please enter a valid date.");
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
        ed += daysInFebEnd; // Use the correct number of days in February
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
