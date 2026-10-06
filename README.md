<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <img alt="Sahil Pathak. Everything here is in production." src="assets/header-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://portfolio-q38w.vercel.app"><b>Portfolio</b></a>&ensp;/&ensp;
  <a href="https://portfolio-q38w.vercel.app/cv">Resume</a>&ensp;/&ensp;
  <a href="mailto:sahilpathak2005@gmail.com">sahilpathak2005@gmail.com</a>&ensp;/&ensp;
  <a href="https://www.linkedin.com/in/sahil-pathak-98a523202">LinkedIn</a>
</p>

I build the surface and the thing underneath it, and I stay on afterwards. Final year of a B.Tech in computer science, with a BSc (Hons) in data science and AI at IIT Guwahati alongside it. Open to AI/ML and full-stack roles, based in Pune.

## In production

<!-- status:start -->
| | Live site | What it is | Last answer |
|:-:|---|---|--:|
| <img src="assets/up.svg" width="14" alt="up"> | [desitotes.com](https://desitotes.com) | Client, commerce. Razorpay, INR and USD | 489 ms |
| <img src="assets/up.svg" width="14" alt="up"> | [amgprojectsllp.com](https://amgprojectsllp.com) | Client, construction. The site and the APIs behind it | 1286 ms |
| <img src="assets/up.svg" width="14" alt="up"> | [NeuraCraft](https://ai-compiler-eta.vercel.app) | Browser editor that suggests ML code as you type | 2794 ms |
| <img src="assets/up.svg" width="14" alt="up"> | [AI Terminal](https://ai-chat-bot-gcar.vercel.app) | A terminal front end for a language model | 564 ms |
| <img src="assets/up.svg" width="14" alt="up"> | [Portfolio Quest](https://gamifyport.vercel.app) | My portfolio as a pixel-art game | 1145 ms |

<sub>5 of 5 answering. Fetched and timed from GitHub Actions every 6 hours; last run 2026-10-06 18:28 UTC.</sub>
<!-- status:end -->

## The work

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://desitotes.com"><img src="assets/desi.webp" alt="The Desi Totes storefront"></a>
      <p><b><a href="https://desitotes.com">Desi Totes</a></b><br>Client project, commerce</p>
      <p>Cotton canvas, cut and printed after the order arrives. Cards through Razorpay, INR and USD switched in place, and a bag that survives a refresh.</p>
      <sub>React, Vite, Tailwind over Node, Express, MongoDB</sub>
    </td>
    <td width="50%" valign="top">
      <a href="https://amgprojectsllp.com"><img src="assets/amg.webp" alt="The AMG Turnkey Projects site"></a>
      <p><b><a href="https://amgprojectsllp.com">AMG Turnkey Projects</a></b><br>Software developer, January to June 2025</p>
      <p>The site, plus the civil accounting modules and REST APIs the operations team runs projects on. Found where the app was slow and cut load time by 50 to 80%.</p>
      <sub>React, Vite, Tailwind, GSAP over Node, Express, MongoDB</sub>
    </td>
  </tr>
</table>

**Also live.** No client, no brief; built to find out whether I could, and left running.

- **[NeuraCraft](https://ai-compiler-eta.vercel.app)**: a code editor in the browser that suggests machine learning code as you type. A scikit-learn model I trained works out which library you are in, served from FastAPI.
- **[AI Terminal](https://ai-chat-bot-gcar.vercel.app)**: a terminal-style front end for a language model. Chat, pull a URL apart, run commands.
- **[Portfolio Quest](https://gamifyport.vercel.app)**: my portfolio as a pixel-art game. Walk the town, challenge the gym leader for the resume.

## Research

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/ppemdd-dark.svg">
  <img alt="PPEMDD: text, EEG, wearables and audio or video fused by a dynamic gate into three answers" src="assets/ppemdd-light.svg" width="100%">
</picture>

**[PPEMDD](https://github.com/sahil454521/depression_detection-research)** screens for depression from text, EEG, wearables and audio or video together, and answers three questions in one pass. A dynamic gate weights each signal by whether it is there and how far to trust it, and multi-head cross-attention lets every signal read the others, so the model still answers when a signal drops out. Built end to end as a research intern at VIT, May to July 2026, and written up as an IEEE-format paper.

| Accuracy | Recall | F1 | Held-out test |
|:-:|:-:|:-:|:-:|
| **91.24%** | **79.23%** | **0.7809** | 2,250 samples, Reddit and WU3D |

## Stack, by layer

| | |
|---|---|
| **Interface** | React, Next.js, Vite, Tailwind, GSAP, Three.js |
| **Service** | Node and Express, FastAPI, Flask, MongoDB, MySQL, Firestore, Convex, Razorpay |
| **Models** | PyTorch, TensorFlow, Hugging Face, scikit-learn, LangChain |
| **Running** | Vercel, Render, AWS, CI on every push |
| **Languages** | Python, JavaScript, TypeScript, C++, C |

<sub>Experience: research intern at VIT (2026); software developer at AMG Turnkey Projects (2025). Recognition: Smart India Hackathon, top 15 in the college round; SharkIndia, prize for an AI solution.</sub>

---

<p align="center">
  <sub>
    <a href="https://instagram.com/Sahilpathak.21">Instagram</a>&ensp;/&ensp;<a href="https://discord.gg/ShunLeviz">Discord</a>&ensp;/&ensp;<a href="https://bsky.app/profile/shunleviz.bsky.social">Bluesky</a>
    <br>This README checks its own claims: <a href=".github/workflows/status.yml">a GitHub Action</a> fetches every site above every 6 hours and rewrites the board.
  </sub>
</p>
