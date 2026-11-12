// scratch/perfect-jigsaw.js
function generateEdge(x1, y1, x2, y2, type) {
  if (type === 'flat') {
    return `L ${x2} ${y2}`;
  }

  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);

  // Unit vector along edge
  const ux = dx / len;
  const uy = dy / len;

  // Clockwise outward normal is to the LEFT of vector (dx, dy):
  // (dx, dy) = (1, 0) => outward is (0, -1) [up]
  // (dx, dy) = (0, 1) => outward is (1, 0) [right] ... wait!
  // If (ux, uy) = (0, 1), then (-uy, ux) is (-1, 0), which is LEFT (inward)!
  // So standard 2D left-normal is (-uy, ux).
  // Clockwise polygon interior is on the right, exterior is on the left:
  // Along top: (0,0)->(1,0), normal is (0, -1) = up (exterior).
  // Along right: (1,0)->(1,1), left is (1, 0) ? Wait: (-uy, ux) = (-1, 0) which is LEFT (interior)!
  // Ah! Because in SVG screen coordinates, Y increases DOWNWARDS!
  // Let us check carefully for SVG screen coordinates:
  // Top edge: moving left-to-right (x increases, y is 30).
  // Exterior is UP (smaller y). Vector (1, 0) -> exterior (0, -1).
  // Right edge: moving top-to-bottom (x is 350, y increases).
  // Exterior is RIGHT (larger x). Vector (0, 1) -> exterior (1, 0).
  // Bottom edge: moving right-to-left (x decreases, y is 430).
  // Exterior is DOWN (larger y). Vector (-1, 0) -> exterior (0, 1).
  // Left edge: moving bottom-to-top (x is 30, y decreases).
  // Exterior is LEFT (smaller x). Vector (0, -1) -> exterior (-1, 0).

  // Notice the exact formula for exterior unit normal:
  // For (ux, uy):
  // If (1, 0)  -> (0, -1)
  // If (0, 1)  -> (1, 0)
  // If (-1, 0) -> (0, 1)
  // If (0, -1) -> (-1, 0)
  // Formula: nx = uy, ny = -ux !
  // Let's verify:
  // (1, 0): nx = 0, ny = -1 (Correct: UP)
  // (0, 1): nx = 1, ny = 0 (Correct: RIGHT)
  // (-1, 0): nx = 0, ny = 1 (Correct: DOWN)
  // (0, -1): nx = -1, ny = 0 (Correct: LEFT)
  // PERFECT!

  const nx = uy;
  const ny = -ux;

  // For tab: protrudes outwards (+normal)
  // For slot: indents inwards (-normal)
  const sign = type === 'tab' ? 1 : -1;

  const mid = len / 2;

  function pt(s, n) {
    const px = x1 + ux * s + nx * (n * sign);
    const py = y1 + uy * s + ny * (n * sign);
    return `${px.toFixed(1)} ${py.toFixed(1)}`;
  }

  // Classic circular bulb jigsaw proportions:
  // Neck starts at mid - 26, constricts at mid - 14 by n = -2 (pinched neck)
  // Bulb flares out at mid - 28 by n = 18
  // Bulb crest at mid by n = 28
  // Bulb right flare at mid + 28 by n = 18
  // Neck right constricts at mid + 14 by n = -2
  // Neck ends at mid + 26
  
  const p_neck_start = pt(mid - 26, 0);
  const c1a = pt(mid - 18, -2);
  const c1b = pt(mid - 24, 10);
  const p1  = pt(mid - 26, 18);

  const c2a = pt(mid - 24, 26);
  const c2b = pt(mid - 14, 28);
  const p_crest = pt(mid, 28);

  const c3a = pt(mid + 14, 28);
  const c3b = pt(mid + 24, 26);
  const p3  = pt(mid + 26, 18);

  const c4a = pt(mid + 24, 10);
  const c4b = pt(mid + 18, -2);
  const p_neck_end = pt(mid + 26, 0);

  return `L ${p_neck_start} C ${c1a}, ${c1b}, ${p1} C ${c2a}, ${c2b}, ${p_crest} C ${c3a}, ${c3b}, ${p3} C ${c4a}, ${c4b}, ${p_neck_end} L ${x2} ${y2}`;
}

function makePiece({ top, right, bottom, left }) {
  let d = `M 46 30 `;
  d += generateEdge(46, 30, 334, 30, top) + ' ';
  d += `A 16 16 0 0 1 350 46 `;
  d += generateEdge(350, 46, 350, 414, right) + ' ';
  d += `A 16 16 0 0 1 334 430 `;
  d += generateEdge(334, 430, 46, 430, bottom) + ' ';
  d += `A 16 16 0 0 1 30 414 `;
  d += generateEdge(30, 414, 30, 46, left) + ' ';
  d += `A 16 16 0 0 1 46 30 Z`;
  return d;
}

const pieces = [
  makePiece({ top: 'flat', right: 'slot', bottom: 'slot', left: 'flat' }),
  makePiece({ top: 'flat', right: 'slot', bottom: 'slot', left: 'tab' }),
  makePiece({ top: 'flat', right: 'flat', bottom: 'slot', left: 'tab' }),
  makePiece({ top: 'tab', right: 'slot', bottom: 'flat', left: 'flat' }),
  makePiece({ top: 'tab', right: 'slot', bottom: 'flat', left: 'tab' }),
  makePiece({ top: 'tab', right: 'flat', bottom: 'flat', left: 'tab' }),
];

console.log(JSON.stringify(pieces, null, 2));
