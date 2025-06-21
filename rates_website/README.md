# 📟 Crypto Dashboard

A terminal-style cryptocurrency dashboard built with React. It fetches real-time market data from cryptorates.ai and displays it in a green-on-black, 1970s-style UI — complete with price deltas, hover tooltips, and selectable result limits.

## 🧰 Features

- Live price, market cap, volume, and rank for up to 1000 coins.
- Toggleable results: 100, 500, 1000, or all.
- "Refresh" button to re-fetch data instantly.
- Hover on 24h/7d change shows old vs new price and market cap.
- Retro green-on-black theme with monospace styling.
- Fully deployable via GitHub Pages.

## 🚀 Live Demo

**🔗 https://patrickeasy.github.io/Live_Crypto_Rates/**

## 🏁 Getting Started
### 1. **Fork or Clone the Repo**
```
git clone https://github.com/patrickeasy/Live_Crypto_Rates.git
cd Live_Crypto_Rates
```
Or fork it using GitHub’s UI and then clone your fork.

### 2. **Install Dependencies**

```npm install```

### 3. **Start the Development Server**

``` 
npm start

Then visit: http://localhost:3000
```

## ⚙️ Building and Deploying
First-Time Setup for GitHub Pages:

Install gh-pages:

```
npm install --save gh-pages
```
In your package.json, make sure you have:

```bash
"homepage": "https://patrickeasy.github.io/Live_Crypto_Rates/",
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
    }
```
Deploy with:
```
npm run deploy
```
Then in GitHub:

- Go to Settings > Pages

- Set source to the gh-pages branch, root folder

## 🛠 Updating the Live Site After Changes

Each time you change code:

```
git add .
git commit -m "Describe your change"
git push origin main
npm run deploy
```


That will rebuild and re-upload the site to GitHub Pages.
## 🔍 Tech Stack

- React (create-react-app)

- Axios (for HTTP requests)

- gh-pages (for deployment)

- cryptorates.ai API (with CORS proxy)

## 🧪 API Proxy Notes

Due to CORS restrictions, this project uses:

https://corsproxy.io/?https://cryptorates.ai/v1/coins/100

This is for dev/demo use. For production-grade apps, consider setting up your own proxy.

## 🎨 Design Philosophy

The visual theme is inspired by:

- 70s/80s monochrome CRT terminals

- Hacker culture aesthetics

- Minimalism and legibility

Colors, fonts, and hover effects are all chosen for nostalgia and clarity.

## 🤔 Why 4 Buttons?

The result count selector lets users switch between:

- Top 100, 500, 1000 coins, or
- All available entries

Changing this also updates the page heading automatically.
## 🧼 Code Quality Tips

- App.js contains all the main logic and rendering

- CSS is written in App.css with retro-friendly variables and transitions

- You can refactor into separate components if you want to scale the UI

##❓ Questions or Ideas?

Open an [issue](https://github.com/patrickeasy/Live_Crypto_Rates) or fork and improve!

## 📄 License

MIT — free to use, fork, remix, and re-style.
