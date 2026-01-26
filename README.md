# 🌦️ Nimbus Weather App

Nimbus Weather App is a modern weather application that provides real-time weather data, forecasts, and air quality information with an elegant dark-themed interface.

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **API**: OpenWeatherMap API (Current Weather, Forecast, Air Pollution)
- **UI**: Material Icons, Nunito Sans Font
- **Styling**: Custom CSS with responsive design
- **Architecture**: Modular JavaScript with separated concerns

## ✨ Key Features

### 🌡️ Real-Time Weather Data
- Current temperature, weather conditions, and description
- Feels-like temperature and humidity levels
- Atmospheric pressure and visibility readings
- Dynamic weather icons based on conditions

### 📅 Forecast Capabilities
- 5-day weather forecast with daily maximum temperatures
- 8-hour hourly forecast for today's weather
- Wind speed and direction with visual indicators
- Sunrise and sunset timing information

### 🌫️ Air Quality Monitoring
- Air Quality Index (AQI) with color-coded levels
- Pollutant details: PM2.5, SO2, NO2, O3 measurements
- Health advisory information based on AQI levels
- Visual badge system for quick quality assessment

### 📍 Location Services
- Current location detection using Geolocation API
- Manual city search with auto-complete suggestions
- Reverse geocoding for location names
- Multiple location support

### 📱 Responsive Design
- Mobile-first responsive layout
- Dark theme interface with accessibility features
- Touch-friendly controls and navigation
- Cross-browser compatibility

## ⚡ Quick Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access

### Getting Started
1. Clone or download the repository
2. Open `index.html` in your web browser
3. The app will automatically detect your current location
4. Alternatively, use the search bar to find weather for any city

### API Configuration
The application uses OpenWeatherMap API with a pre-configured API key. To use your own API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. Update the API key in `assets/js/api.js`:
   ```javascript
   const api_key = "your_api_key_here";
   ```

## 🚀 Usage

- **Current Location**: Click "Current Location" button to get weather for your area
- **Search Cities**: Use the search icon to find weather for any city worldwide
- **View Details**: Browse current conditions, forecasts, and air quality data
- **Responsive**: Works seamlessly on mobile, tablet, and desktop devices

## 🏗️ Project Structure

```
Nimbus-Weather-App/
├── index.html              # Main application structure
├── assets/
│   ├── css/
│   │   └── style.css      # Styling and responsive design
│   ├── js/
│   │   ├── app.js         # Main application logic
│   │   ├── api.js         # API integration and data fetching
│   │   ├── module.js      # Utility functions and date formatting
│   │   └── route.js       # Routing and location handling
│   ├── images/
│   │   ├── weather_icons/ # Weather condition icons
│   │   ├── Nimbus_logo.png # App logo
│   │   └── openweather.png # Powered by OpenWeather attribution
│   └── font/
│       └── material-symbol-rounded.woff2 # Material Icons font
├── favicon_io/            # Favicon files
└── README.md
```

## 🔧 Features Breakdown

### Weather Data Sources
- **Current Weather**: Real-time conditions including temperature, humidity, pressure
- **Forecast**: 5-day prediction with 3-hour intervals
- **Air Pollution**: Real-time air quality index and pollutant levels
- **Geocoding**: City search and reverse location lookup

### User Interface
- **Dark Theme**: Eye-friendly dark interface suitable for all lighting conditions
- **Material Design**: Clean, modern interface with intuitive navigation
- **Animations**: Smooth transitions and loading states
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests for:
- Bug fixes
- Feature enhancements
- UI/UX improvements
- Performance optimizations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions, please contact:
- Developer: Melwyn Titus
- Email: m.works.gd@gmail.com

---

⭐ **Star this repository if you found it useful!**  
🌤️ **Stay updated with current weather conditions!**