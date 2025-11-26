$(function() {
    const isSunday = new Date().getDay() === 0; // getDay() returns 0 for Sunday

    $('h1').html(isSunday ? "It is Sunday" : "It is not Sunday").css("color", isSunday ? "green" : "blue");
});
