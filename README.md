# Langley Musalla Website

![Langley Musalla](https://github.com/FayezAhmed/Langley-Musalla/blob/main/screenshots/sc1.png?raw=true)

Welcome to the official repository for the Langley Musalla website! This project is a responsive website built using HTML, CSS, and JavaScript. It utilizes flexbox for layout and incorporates JavaScript to call an API and display a daily schedule. The purpose of this website is to provide information about the Langley Musalla and its prayer schedule.

## Features

- Responsive layout that adapts to different screen sizes
- Utilizes flexbox for flexible and dynamic page layout
- Displays the daily prayer schedule fetched from an API
- Updates the prayer schedule automatically on a daily basis

## Screenshots

![Screenshot 1](https://github.com/FayezAhmed/Langley-Musalla/blob/main/screenshots/sc2.png?raw=true)
![Screenshot 2](https://github.com/FayezAhmed/Langley-Musalla/blob/main/screenshots/sc3.png?raw=true)


## API Integration

The website relies on an API to fetch the daily prayer schedule. The JavaScript code responsible for fetching and displaying the schedule can be found in the `main.js` file under the `js` directory. 

Here's an example of the code used to fetch the API and update the prayer schedule on the page:

```javascript
fetch('https://salahhour.com/index.php/api/prayer_times?country=CA&zipcode=V3A&time_format=0')
  .then(res => res.json())
  .then(data => {
    console.log(data.results);
    document.querySelector("#fajr").innerText = data.results.Fajr;
    document.querySelector("#dhuhr").innerText = data.results.Dhuhr;
    document.querySelector("#asr").innerText = data.results.Asr;
    document.querySelector("#maghrib").innerText = data.results.Maghrib;
    document.querySelector("#isha").innerText = data.results.Isha;
  })
  .catch(error => console.log('ERROR'));
```

The above code fetches the prayer schedule from the provided API endpoint and updates the corresponding elements on the page with the fetched data.

Please note that you will need to modify the API endpoint `https://salahhour.com/index.php/api/prayer_times?country=CA&zipcode=V3A&time_format=0` with your country code and zip code if you would like to use it on your website.

## Acknowledgements

- The API service provider for the prayer schedule data.
