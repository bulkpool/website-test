# Sakura MedTech Website

## Tech Stack
- React.js
- CSS3
- JavaScript
- Node.js

## Project Structure
```
website/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── articles/
│   │   │   ├── hero/
│   │   │   ├── navigation/
│   │   │   ├── partners/
│   │   │   ├── stats/
│   │   │   └── video/
│   │   └── pages/
│   ├── public/
│   └── package.json
└── server/
```

## Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/sakura-medtech.git
```

2. Install dependencies
```bash
cd client
npm install
```

3. Start the development server
```bash
npm start
```

## Publish Changes to Public Website
1. Clone the public repository if not already done
```bash
git clone https://github.com/your-username/your-public-repo.git
cd your-public-repo
```

2. Add your private repository as a remote named private
```bash
git remote add private https://github.com/your-username/your-private-repo.git
```

3. Fetch the latest changes from the private repository
```bash
git fetch private
```

4. Merge the changes from the private repository into the public repository's main branch
```bash
git merge private/main
```

5. Push the changes to the public repository
```bash
git push origin main
```

6. Make sure the readme.md file on the public repository says "Copyright 2024 Sakura MedTech, Inc. All Rights Reserved."



