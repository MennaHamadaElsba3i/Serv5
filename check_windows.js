const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Check running window titles using tasklist /v
try {
  const tasklist = execSync('tasklist /v /fo csv', { encoding: 'utf8' });
  const lines = tasklist.split('\n');
  console.log('--- RUNNING WINDOWS ---');
  lines.forEach(l => {
    if (l.includes('chrome') || l.includes('msedge') || l.includes('brave') || l.includes('firefox')) {
      console.log(l.trim());
    }
  });
} catch(e) {
  console.log('tasklist err:', e.message);
}

// Also check Edge sessions/history
const edgeDir = path.join(os.homedir(), 'AppData', 'Local', 'Microsoft', 'Edge', 'User Data');
console.log('\nEdge dir exists:', fs.existsSync(edgeDir));
if (fs.existsSync(edgeDir)) {
  const dirs = fs.readdirSync(edgeDir).filter(f => f === 'Default' || f.startsWith('Profile'));
  console.log('Edge Profiles:', dirs);
  for (const prof of dirs) {
    const sessDir = path.join(edgeDir, prof, 'Sessions');
    if (fs.existsSync(sessDir)) {
      const files = fs.readdirSync(sessDir);
      for (const f of files) {
        try {
          const buf = fs.readFileSync(path.join(sessDir, f));
          const str = buf.toString('latin1');
          const matches = str.match(/https?:\/\/[a-zA-Z0-9\.\-_~:/?#\[\]@!$&'()*+,;=%]+/g);
          if (matches) {
            const unique = [...new Set(matches)].filter(u => !u.includes('microsoft.com') && !u.includes('bing.com') && !u.includes('google.com'));
            if (unique.length > 0) {
              console.log('Edge', prof, f, 'found:', unique.length);
              unique.slice(0, 20).forEach(u => console.log('  ', u));
            }
          }
        } catch(e) {}
      }
    }
  }
}

