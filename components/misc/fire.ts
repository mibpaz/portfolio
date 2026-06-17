// FROM: https://www.4rknova.com/blog/2025/11/01/ascii-fire

const colorSchemes = {
  // Classic fire: dark red -> orange -> yellow -> white
  fire: [
    "#1a0000",
    "#3d0000",
    "#6b0000",
    "#a30000",
    "#d40000",
    "#ff3300",
    "#ff6600",
    "#ff9900",
    "#ffcc00",
    "#ffff00",
    "#ffffff",
  ],

  // Green fire variant
  green: [
    "#001a00",
    "#003d00",
    "#006b00",
    "#00a300",
    "#00d400",
    "#33ff00",
    "#66ff00",
    "#99ff00",
    "#ccff00",
    "#ffff00",
    "#ffffff",
  ],
};

export const palettes = {
  // Classic ASCII progression
  classic: "     ......::::::------======++++++******######%%%%%%@@@@@@",

  // Extended character set with varied density
  extended: " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@",

  // Unicode block characters for a pixelated look
  blocks: "      ░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓████████████",

  // Dot-based progression using Unicode bullets
  dots: "            ··················••••••••••••••••●●●●●●●●●●●●●●●●",
};

export const createBuffer = (width: number, height: number) => {
  // The heat buffer: a 1D array representing a 2D grid.
  // Layout: buffer[y * width + x] gives the heat at position (x, y).
  return new Uint8Array(width * height + 1);
};

export const stepFire = (
  buffer: Uint8Array,
  width: number,
  height: number,
  intensity: number,
  palSize: number,
  cooling: number,
) => {
  // Seed bottom row with random hot spots.
  // The number of spots is proportional to width * intensity.
  for (let i = 0; i < Math.floor(width * intensity); i++) {
    // Pick a random column
    const x = Math.floor(Math.random() * width);
    // Calculate index in the 1D buffer (bottom row)
    const bottomRowIndex = x + width * (height - 1);
    // Assign a random heat value from 0 to palSize
    buffer[bottomRowIndex] = Math.floor(Math.random() * palSize);
  }

  // Add cooling spots to create gaps in the fire.
  // More cooling spots = shorter, more separated flames.
  for (let i = 0; i < Math.floor(width * cooling); i++) {
    // Pick a random column
    const x = Math.floor(Math.random() * width);
    // Calculate index in the 1D buffer (bottom row)
    const bottomRowIndex = x + width * (height - 1);
    // Set to zero (cold) to create a gap
    buffer[bottomRowIndex] = 0;
  }

  // Process all rows except the bottom (which is the heat source).
  // We iterate top-to-bottom, left-to-right.
  for (let i = 0; i < width * (height - 1); i++) {
    // Average this cell with its neighbors below.
    // This creates upward heat flow with natural diffusion.
    const average: number =
      (buffer[i] + // Current cell
        buffer[i + 1] + // Cell to the right
        buffer[i + width] + // Cell directly below
        buffer[i + width + 1]) /
      4; // Cell below-right
    // Floor truncates fractional values, providing natural cooling.
    // Heat is gradually lost as it rises through the grid.
    buffer[i] = Math.floor(average);
  }
};

export const fireBuffer = (
  width: number,
  height: number,
  intensity: number,
  palSize: number,
  cooling: number,
) => {
  const buffer = createBuffer(width, height);
  stepFire(buffer, width, height, intensity, palSize, cooling);

  return buffer;
};

function getColorForIndex(
  index: number,
  palSize: number,
  colorScheme: keyof typeof colorSchemes,
) {
  // Get the active color scheme array
  const scheme = colorSchemes[colorScheme];
  // Normalize heat index to [0, 1] range
  const ratio = index / palSize;
  // Map to color scheme index, clamped to valid range
  const colorIndex = Math.min(
    Math.floor(ratio * (scheme.length - 1)),
    scheme.length - 1,
  );
  // Return the hex color string
  return scheme[colorIndex];
}

export const renderFireText = (
  buffer: Uint8Array,
  width: number,
  height: number,
  palSize: number,
  palette: string[],
) => {
  let screen = "";

  for (let i = 0; i < width * (height - 1); i++) {
    const charIndex = buffer[i] > palSize ? palSize : buffer[i];
    screen += palette[charIndex];

    if ((i + 1) % width === 0) {
      screen += "\n";
    }
  }

  return screen;
};

export const renderFire = (
  buffer: Uint8Array,
  width: number,
  height: number,
  palSize: number,
  palette: string[],
  colorScheme: keyof typeof colorSchemes,
) => {
  // Build HTML string for the entire fire grid
  let screenHtml = "";

  for (let i = 0; i < width * (height - 1); i++) {
    // Clamp heat value to valid palette range
    const charIndex = buffer[i] > palSize ? palSize : buffer[i];
    // Look up character and color for this heat value
    const char = palette[charIndex];
    const color = getColorForIndex(
      charIndex,
      palSize,
      colorScheme as keyof typeof colorSchemes,
    );

    // Render the cell
    if (char === " ") {
      // Spaces need no styling
      screenHtml += " ";
    } else {
      // Wrap non-space characters in colored span
      screenHtml += `<span style="color:${color}">${char}</span>`;
    }

    // Add newline at end of each row
    if ((i + 1) % width === 0) {
      screenHtml += "\n";
    }
  }

  // Update the DOM with the rendered fire
  return screenHtml;
};
