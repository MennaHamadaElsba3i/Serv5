const fs = require('fs');
const path = require('path');
const os = require('os');

const chromeDir = path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data');
const profiles = ['Default', 'Profile 1', 'Profile 2', 'Profile 3'];

for (const prof of profiles) {
  const pPath = path.join(chromeDir, prof);
  console.log('=== Checking profile:', prof);
  const sessDir = path.join(pPath, 'Sessions');
  if (fs.existsSync(sessDir)) {
    const files = fs.readdirSync(sessDir).map(f => ({
      name: f,
      time: fs.statSync(path.join(sessDir, f)).mtimeMs
    })).sort((a,b) => b.time - a.time);

    for (const f of files.slice(0, 4)) {
      try {
        const fullPath = path.join(sessDir, f.name);
        const buf = fs.readFileSync(fullPath);
        const str = buf.toString('latin1');
        const matches = str.match(/https?:\/\/[a-zA-Z0-9\.\-_~:/?#\[\]@!$&'()*+,;=%]+/g);
        if (matches) {
          const unique = [...new Set(matches)].filter(u => 
            !u.includes('google.com') && 
            !u.includes('gstatic.com') && 
            !u.includes('googleapis.com') &&
            !u.includes('cloudflare.com')
          );
          if (unique.length > 0) {
            console.log('-- File: ' + f.name + ' (' + new Date(f.time).toISOString() + ')');
            unique.forEach(u => console.log('   ', u));
          }
        }
      } catch (e) {}
    }
  }
}

