# RxBox

CrossFit box management platform — class reservations, athlete wellness
check-ins, injury prevention alerts, and nutrition tracking, built for a
class project.

**Live:** https://andresval185.github.io/Rx-Box/

## Features

- **Class schedule & reservations** — Wodify-style weekly schedule with live spot counts.
- **Athlete check-in** — feeling, sleep, soreness, body-map pain zones, and symptom notes, tied to each reservation.
- **Coach dashboard** — traffic-light (green/yellow/red) wellness summary per class roster.
- **Injury prevention alerts** — flags an athlete when the day's WOD stresses a body zone where they reported pain.
- **Nutrition & performance** — compares training consistency against nutrition compliance to surface under-fueling patterns.

## Tech stack

React (Vite) single-page app, in-memory mock data (no backend), plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Builds the app and publishes `dist/` to the `gh-pages` branch.
