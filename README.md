🌤️ Weather App
A responsive weather application built with React and Vite that provides real-time weather information for any city worldwide using the OpenWeatherMap API.

🚀 Live Demo
[weather-appln.vercel.app](https://weather-appln-52lcqgw0v-ruqayya29s-projects.vercel.app/)

✨ Features

🔍 Search weather by city name
🌡️ Displays current temperature in Celsius
💧 Shows humidity percentage
💨 Shows wind speed in m/s
🌥️ Dynamic weather icons based on conditions
⌨️ Press Enter to search
❌ Clear results with delete button

🛠️ Tech Stack

React — UI library
Vite — Build tool
Axios — API requests
OpenWeatherMap API — Weather data
Vercel — Deployment

📦 Installation
bash# Clone the repository
git clone https://github.com/ruqayya29/weather-appln.git

# Navigate into the project
cd weather-appln

# Install dependencies
npm install

# Start the development server
npm run dev
🔑 API Key
This project uses the OpenWeatherMap API. To use your own key:

Sign up at openweathermap.org
Get your free API key
Replace the key in Weather.jsx:

js`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`


