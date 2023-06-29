var key = '64f2ee2a8261daa4d9f780f5b365f275';
var city = "Miami"


//Retrieves current date and time
var date = moment().format('dddd, MMMM Do YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

var cityHist = [];
//Following will save the text value as an  array and store it in local storage.
$('.search').on("click", function (event) {
	event.preventDefault();
	city = $(this).parent('.btnPar').siblings('.textVal').val().trim();
	if (city === "") {
		return;
	};
	cityHist.push(city);

	localStorage.setItem('city', JSON.stringify(cityHist));
	fiveForecastEl.empty();
	getHistory();
	getWeatherToday();
});