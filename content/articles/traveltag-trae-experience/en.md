---
title: "TravelTag & TRAE: My Development Experience"
excerpt: "A look back at developing TravelTag with TRAE AI, the IDE that transformed my coding approach."
date: "2024-09-10"
author: "Baptiste LECHAT"
tags: ["React", "TypeScript", "TRAE AI", "Development", "Experience"]
coverImage: "/articles/traveltag-trae-experience/Capture_1.png"
---

# TravelTag & TRAE: A technological adventure

Developing **TravelTag** was my first real experience with an AI-assisted IDE. Thanks to **TRAE IDE**, I discovered a new way of coding that was more fluid and motivating, which truly changed my way of working.

## 🧳 The TravelTag project

**TravelTag** is a web application for generating QR Codes containing personal information to print and stick on luggage, backpacks, children's belongings, etc. Initially designed for personal use, it aims to become a simple, **offline** and reassuring tool for everyone.

![Traveling](/articles/traveltag-trae-experience/traveling.svg "Traveling|400|400")

### 📘 Context & Problem

I went on vacation this summer and hadn't flown in 16 years. I was afraid my luggage would get lost during a journey of more than 6000 km with multiple stages (car, shuttle, plane, taxi, boat). The idea for TravelTag was born to create a **quick and simple** solution in the time I had left before departure (~2 weeks).

The QR Code was chosen to **avoid developing a specific reader**, since the majority of smartphones have a native reader.

I first looked for existing solutions: most were paid, potentially stored data on external servers, and required manual entry of everything, with the risk of forgetting crucial information in case of loss. TravelTag addresses this need for **reliability, simplicity, and confidentiality**.

The project is aimed at **regular or occasional travelers**, **families** (easily stressed by transporting numerous pieces of luggage), and **children** (for school trips or personal belongings). The use cases are numerous and adaptable.

![Globe](/articles/traveltag-trae-experience/globe.svg "Globe|400|400")

### 📂 Technical stack used

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State Management**: Zustand
- **Validation**: Zod with TypeScript schemas
- **QR Code**: react-qr-code
- **Export**: html-to-image for PNG
- **Data**: JSON for airports, stations, and countries

### ❓ Why Vite + React?

| Criterion          | Vite                        | Next.js                                  |
| ------------------ | --------------------------- | ---------------------------------------- |
| Project type       | Light SPA, rapid prototype  | Fullstack, SSR/SSG                       |
| Startup & build    | Ultra fast 🚀               | Slower, native SSR                       |
| Routing            | Manually managed            | Automatic via filesystem                 |
| Offline            | Simple, no SSR              | More complex                             |
| Final performance  | Very performant for SPA     | Optimized for static/dynamic sites       |

💡 **Tip**: for light SPA apps, Vite is perfect. Next.js becomes relevant if SEO or SSR is necessary.

### 📄 Data management

- **LocalStorage**: selected language for i18n
- **JSON**: airport data (NPM package [airport-iata-codes](https://www.npmjs.com/package/airport-iata-codes)), French municipalities and stations retrieved from [data.gouv.fr](https://www.data.gouv.fr)

### 💥 Technical challenges

- PNG export and QR Code rendering: several iterations were necessary to obtain the desired layout.
- Verification of **complete offline**: all critical dependencies run locally, no external server required.

## 🎨 Design & UX

- Minimalist and functional
- Form on the left grouping 4 categories of information
- Real-time QR Code preview on the right for testing before download
- User feedback: many positive feedbacks from family and the X community

## 💻 The TRAE experience

![Trae](/articles/traveltag-trae-experience/trae.jpeg "Trae|500|500")

### 👨‍💻 What is TRAE?

TRAE (Trae AI) is an **AI assistant** specialized in development that accompanied me throughout the project. Unlike traditional assistants, TRAE understands the project context and can:

- Analyze existing architecture
- Propose coherent solutions
- Generate production-quality code
- Debug efficiently

### 🚀 Creation process with TRAE

The initial idea was a quick personal project, but I decided to make it a **complete solution** that could be shared. TRAE was chosen because:

- I lacked time to create a complete solution in a few weeks.
- I had just subscribed to TRAE Pro and wanted to test the IDE on a project **from scratch**.
- The IDE allowed me to quickly generate code and get relevant suggestions to enrich the product.

I had a basic vision: first name, last name, postal address, phone number, and departure/arrival locations. TRAE then suggested **nationality, emergency contacts, additional transport modes, and health information**.

I then added a **disclaimer**:

> You are sharing personal data that can be read by a large number of people. You are solely responsible for the data you share.

The **V1** was functional in **1 weekend**, then refined occasionally during the following week to improve PDF sheet generation and the user interface. TRAE greatly accelerated the setup and development of ideas.

### 💪 Observed advantages

#### 🚀 Increased productivity

With TRAE, I was able to:

- Reduce development time by **50%**
- Implement complex features more quickly
- Focus on business logic rather than repetitive code

#### 🔧 Problem solving

TRAE excels in:

- Rapid bug identification
- Proposing alternative solutions
- Performance optimization

## 📌 Results and learnings

### 📊 Experience feedback

Since its launch, TravelTag has attracted over 100 visitors in just one week, with an international audience spread across 18 countries. France remains the most active market with 35% of visits, followed by Brazil and the United States. In terms of engagement, about 25% of visitors generated a QR Code, showing good interest in the application from the first days. These initial feedbacks confirm that the app is intuitive and attracts a diverse audience, offering great prospects for optimizing the user experience and increasing conversions.

![Umami](/articles/traveltag-trae-experience/map.png "Umami|800|500")

### 🎓 Key learnings

- **AI as a partner**: TRAE is not a replacement but a skill amplifier
- **TRAE**: SOLO Mode to launch the project, then Classic CHAT Mode with Builder agent + MCP to iterate.
- **Modular architecture**: The importance of a clear structure to facilitate collaboration with AI
- **Dev advice**: stay on the essentials for an MVP. Use a **KANBAN** to separate V1 features (essential) and future improvements.
- **Hooks/Zustand/Zod**: organize business logic and data validation.

## 🔮 Future perspectives

### 📈 Impact and planned evolutions for TravelTag

- TravelTag was successfully used during my trip.
- Possible future features: dark mode, own visual identity, interface improvement.
- Objective: remain a personal project but easily shareable.

### 🤖 TRAE and the future of development

The experience with TRAE has convinced me that the future of development lies in human-AI collaboration. Developers who know how to leverage these tools will have a significant competitive advantage.

## 🎯 Conclusion

Developing TravelTag with TRAE was a first experience and a successful test. This collaboration not only accelerated development but also significantly improved the quality of my final code.

**Recommendations for developers**:

- Experiment with AI assistants
- Maintain a clear architecture
- Continue to learn and adapt

---

_Want to know more about TravelTag or TRAE? Don't hesitate to contact me!_

**🔗 Useful links:**

- [TravelTag Demo](https://traveltag.vercel.app)
- [Source code](https://github.com/baptistelechat/traveltag)
- [TRAE Documentation](https://trae.ai/docs)