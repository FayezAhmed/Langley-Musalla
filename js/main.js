fetch('https://salahhour.com/index.php/api/prayer_times?country=CA&zipcode=V3A&time_format=0')
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        document.querySelector("#fajr").innerText = data.results.Fajr
        document.querySelector("#dhuhr").innerText = data.results.Dhuhr
        document.querySelector("#asr").innerText = data.results.Asr
        document.querySelector("#maghrib").innerText = data.results.Maghrib
        document.querySelector("#isha").innerText = data.results.Isha
    })
    .catch(error => console.log('ERROR'))
