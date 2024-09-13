## Damon-Salvatore WHATSAPP MD BOT
</p>
<p align="center">
  <a href="https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD">
    <img alt=Support height="300" src="https://telegra.ph/file/6e28b5b9cc330466b1f05.jpg"> 
    </p>
<h1 align="center">    Damon-Salvatore-MD 
</h1>
<p align="center"> 
  
<p align="center"> A Whatsapp Bot done by Akashi sasaki 
 
  </a>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=50&pause=1000&color=1BAFBAFF&center=true&width=910&height=100&lines=THANKS FOR CHOOSING+Damon-Salvatore-MD;MULTI+DEVICE+WHATSAPP+BOT;CREATED+BY+亗𝑆𝐴𝑆𝐴𝐾𝐼 𝐹𝐴𝑀𝐼𝐿𝑌 亗" alt="Typing SVG" /></a>

  
<p align="center">
<a href="https://github.com/AKASHI-SASAKI"><img title="Author" src="https://img.shields.io/badge/SASAKI Bot-black?style=for-the-badge&logo=whatsApp"></a>
<p/>
<p align="center">
<a href="https://github.com/AKASHI-SASAKI?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/AKASHI-SASAKI?label=Followers&style=social"></a>
<a href="https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/AKASHI-SASAKI/AKASHI-bicho-BOT?&style=social"></a>
<a href="https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD/network/members"><img title="Fork" src="https://img.shields.io/github/forks/AKASHI-SASAKI/AKASHI-bicho-BOT?style=social"></a>
<a href="https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/AKASHI-SASAKI/Damon-Salvatore-MD?label=Watching&style=social"></a>
</p>

<h3 align="center">𝐷𝑎𝑚𝑜𝑛-𝑠𝑎𝑙𝑣𝑎𝑡𝑜𝑟𝑒-𝑀𝐷</h3>
<p align="center">
<a href="#"><img title="Creator" src="https://img.shields.io/badge/Creator-亗𝑆𝐴𝑆𝐴𝐾𝐼 𝐹𝐴𝑀𝐼𝐿𝑌 亗-red.svg?style=for-the-badge&logo=github"></a>
</a>
</p>
<p align="center">
<a href="https://github.com/AKASHI-SASAKI"><img title="Author" src="https://img.shields.io/badge/Damon-Salvatore-MD-black?style=for-the-badge&logo=Github"></a> <a href="https://chat.whatsapp.com/IdB2EfQiNlKBekQrigN9m9"><img title="Author" src="https://img.shields.io/badge/CHANNEL-black?style=for-the-badge&logo=whatsapp"></a> <a href="https://wa.me/242067274660"><img title="Author" src="https://img.shields.io/badge/CHAT US-black?style=for-the-badge&logo=whatsapp">
<p/>
  
### 1. FORK THIS REPO

<a href='https://github.com/AKASHI-SASAKI/Damon-Salvatore-MD/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/Fork This Repo-blue?style=for-the-badge&logo=git&logoColor=white'/></a>
<p align="center">

### 2. GET SESSION_ID BY TEAMS SASAKI

### PAIRING CODE.
<a href='https://damon-salvatore-session.onrender.com/' target="_blank"><img alt='https://telegra.ph/file/6deb3281f66b574e3264e.jpg' src='https://img.shields.io/badge/PAIRING-CODE-Red?style=for-the-badge&logo=git&logoColor=white'/></a>
<p align="center">

---
• Create a new file [`.github/workflows/deploye.yml`] After created, copy this code👇🏽and paste it there
```yml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */24 * * *'  # Relance toutes les 6 heures

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.18.0]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 50590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

## Développeur 💀

<a href="https://github.com/AKASHI-SASAKI">
  <img src="https://github.com/AKASHI-SASAKI.png" width="60" height="100" alt="AKASHI-SASAKI"/>
</a>
<p align="center"><strong>AKASHI-SASAKI</strong></p>



