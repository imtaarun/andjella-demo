document.addEventListener('DOMContentLoaded', function () {
    const weatherTable = document.getElementById('weather-data');
    const data = [
        {
            'country': 'Porto, Portugal',
            'weather': $.ajax(get('POR')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Porto, Portugal</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                document.getElementById('last-updated-time').textContent = response.current.time.toLocaleString(
                    'en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
                return response
            })
        }, {
            'country': 'Bern, Switzerland',
            'weather': $.ajax(get('SWT')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Bern, Switzerland</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Florence, Italy',
            'weather': $.ajax(get('ITA')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Florence, Italy</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Bruges, Belgium',
            'weather': $.ajax(get('BEL')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Bruges, Belgium</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Budapest, Hungary',
            'weather': $.ajax(get('HUN')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Budapest, Hungary</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Edinburgh, Scotland',
            'weather': $.ajax(get('SCO')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Edinburgh, Scotland</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Innsbruck, Austria',
            'weather': $.ajax(get('AUS')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Innsbruck, Austria}</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Bergen, Norway',
            'weather': $.ajax(get('NOR')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Bergen, Norway</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Paris, France',
            'weather': $.ajax(get('FRA')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Paris, France</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        }, {
            'country': 'Istanbul, Turkey',
            'weather': $.ajax(get('TUR')).done(function (response) {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>Istanbul, Turkey</td>
                <td>${response.current.temperature_2m}</td>
                <td>${response.current.wind_speed_10m}</td>
            `;
                weatherTable.appendChild(row);
                return response
            })
        },
    ];

    function get(country) {
        lat = 0; lon = 0;
        switch (country) {
            case 'FRA':
                lat = 46.22;
                lon = 2.21;
                break;
            case 'POR':
                lat = 39.50;
                lon = 8.00;
                break;
            case 'SWT':
                lat = 46.82;
                lon = 8.22;
                break;
            case 'ITA':
                lat = 41.87;
                lon = 12.56;
                break;
            case 'BEL':
                lat = 50.50;
                lon = 4.46;
                break;
            case 'HUN':
                lat = 47;
                lon = 20;
                break;
            case 'SCO':
                lat = 56.49;
                lon = -4.20;
                break;
            case 'AUS':
                lat = 47.33;
                lon = 14.55;
                break;
            case 'NOR':
                lat = 62;
                lon = 10;
                break;
            case 'TUR':
                lat = 39;
                lon = 35;
                break;
        }
        return {
            async: true,
            crossDomain: true,
            url: 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&current=temperature_2m,wind_speed_10m',
            method: 'GET',
            crossDomain: true
        }
    }
});