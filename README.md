# 🌐 Madhumitha | Developer Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)

A modern, responsive, and containerized developer portfolio website showcasing full-stack capabilities, academic projects, technical skills, and contact channels. Built with vanilla web standards and packaged with **Docker** and **Nginx** for fast, portable deployment.

---

## ✨ Features

- **🎨 Modern Dark Glassmorphism UI:** Tailored dark color palette (`#070b13`) with frosted glass components, glowing accents, and smooth hover elevation.
- **⚡ Typing Text Animation:** Dynamic hero section cycling through developer specialties and interests.
- **📱 100% Mobile Responsive:** Optimized grid layouts and custom sliding mobile navigation drawer.
- **📂 Categorized Skill Showcase:** Interactive pills organizing Frontend, Backend, Databases, and DevOps competencies.
- **🚀 Featured Projects:** Dedicated cards with tech tags and links to source code repositories.
- **📬 Interactive Contact Module:** Quick email copy button (`madhumithamitha458@gmail.com`) with instant feedback and direct mail composer.
- **🐳 Docker & Nginx Containerization:** Production-ready container image powered by Alpine Linux for minimal footprint and maximum speed.

---

## 📁 Project Structure

```text
my-portfolio/
├── Dockerfile            # Alpine Nginx container build definition
├── .dockerignore         # Excludes non-runtime files from Docker build
├── docker-compose.yml    # Single-command local container orchestration
├── index.html            # Main semantic webpage markup
├── style.css             # Glassmorphism design system & responsive styling
├── script.js             # Typing effects, navigation spy & clipboard interactions
└── README.md             # Project documentation and setup guide
```

---

## 🚀 Quick Start Guide

### Option 1: Run in Browser Directly
Simply open `index.html` in any modern web browser:
```powershell
Start-Process index.html
```

Or start a local test server using Python:
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

### Option 2: Run with Docker Compose (Recommended)

Make sure **Docker Desktop** is open and running, then execute:

```powershell
# Build and run container in detached mode
docker compose up -d --build
```

Access the application at:
👉 **`http://localhost:8080`**

To stop the container:
```powershell
docker compose down
```

---

### Option 3: Manual Docker Build & Run

```powershell
# 1. Build the Docker image
docker build -t madhumitha-portfolio .

# 2. Run container mapped to port 8080
docker run -d -p 8080:80 --name my-portfolio-app madhumitha-portfolio
```

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Typography:** Google Fonts (Outfit & Inter)
- **Deployment & Server:** Docker, Docker Compose, Nginx (Alpine)
- **Version Control:** Git, GitHub

---

## 📬 Contact & Connect

- **Author:** Madhumitha
- **GitHub:** [@madhumithamitha458-bot](https://github.com/madhumithamitha458-bot)
- **Email:** [madhumithamitha458@gmail.com](mailto:madhumithamitha458@gmail.com)

---

⭐ *If you like this project, feel free to give it a star on GitHub!*
