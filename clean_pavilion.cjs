const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, 'public/images/serv5-architectural-pavilion.jpg');
const output = path.join(__dirname, 'public/images/serv5-architectural-pavilion-clean.jpg');

const patchSvg = Buffer.from(`
<svg width="1536" height="750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#141518" stop-opacity="0.95" />
      <stop offset="60%" stop-color="#0c0d10" stop-opacity="0.98" />
      <stop offset="100%" stop-color="#07080a" stop-opacity="1" />
    </linearGradient>
  </defs>
  <!-- Clean dark water patch covering the bottom Behance popup -->
  <rect x="250" y="550" width="1036" height="190" fill="url(#waterGrad)" />
</svg>
`);

sharp(input)
  .composite([{ input: patchSvg, top: 0, left: 0 }])
  .jpeg({ quality: 95 })
  .toFile(output)
  .then(info => console.log('Cleaned backdrop created successfully:', info))
  .catch(err => console.error(err));
