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
git clone https://github.com/SakuraMedTech/webiste-published.git
cd your-public-repo
```

2. Add your private repository as a remote named private
```bash
git remote add private https://github.com/SakuraMedTech/website-draft.git
```

3. Fetch the latest changes from the private repository
```bash
git fetch private
```

4. Merge the changes from the private repository into the public repository's main branch
```bash
git merge private/main
```
You may have to do the following line if there is a commit history error
```bash
git merge private/main --allow-unrelated-histories
```
You will likely have a merge commit error for the README.md file. Click the file and resolve the merge error by choosing to keep the README in the website-published repository.

5. Push the changes to the public repository
```bash
git add .
git commit -m "commit message here"
git push
```

6. Make sure the README.md file on the public repository says "Copyright 2024 Sakura MedTech, Inc. All Rights Reserved."
If it does not, make the change and push to github



