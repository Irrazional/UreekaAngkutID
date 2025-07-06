# 🚌 AngkotMap

> 🚐 *Waze for traditional public transport in Indonesia.*  
> Crowd-powered, route-aware, and built for the chaos of angkot life.

---

## 🧠 About

**AngkotMap** is a lightweight web app that maps angkot routes in Indonesian cities, crowdsources sightings, and helps commuters figure out:
- Where an angkot goes
- When it last passed nearby
- Where to catch a connecting ride

Built for students, newcomers, and anyone who’s tired of guessing where that damn route actually goes.

---

## 🚀 Features

- 🗺️ **Interactive Route Maps**  
  Visualize angkot routes on a real map with major stops highlighted.

- 🕐 **Live Sighting Feed**  
  Users can submit a ping when they see a specific angkot pass by.

- 📍 **Estimated Stop Wait Times** *(basic MVP logic)*  
  Based on recent pings and time of day.

- 🔁 **Route Connectivity Info**  
  Know where to hop off and switch to another angkot.

---

## 🧪 Tech Stack

| Layer        | Stack                          |
|--------------|---------------------------------|
| Frontend     | React + Vite + TailwindCSS     |
| Mapping      | Leaflet.js (w/ OSM) / Mapbox GL|

---

## 🧱 Data Models

### 🔄 `routes`
```json
{
  "id": "02A",
  "city": "Bogor",
  "name": "Ciawi - Baranangsiang",
  "stops": ["Terminal Ciawi", "Pasar Sukasari", "Baranangsiang"],
  "polyline": [[-6.6, 106.8], [-6.5, 106.7]]
}
