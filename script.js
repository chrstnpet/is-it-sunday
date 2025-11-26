$(function() {
    const isSunday = new Date().getDay() === 0; // getDay() returns 0 for Sunday

    $('h1').css("color", isSunday ? "green" : "blue");
});