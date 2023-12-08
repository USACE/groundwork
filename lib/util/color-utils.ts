function hex2rgba(hexCode: string, opacity: number = 1): string {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
}

// Version 4.1
// modified from https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

interface PSBCArgs {
  p: number;
  c0: string;
  c1?: string;
  l: boolean;
}

const pSBC = ({ p, c0, c1, l }: PSBCArgs): string | null => {
  const m = Math.round,
    a = !!c1 && c1 != "c";
  let r, g, b, P, f: Color | null, t, h, alpha: number, hasA: boolean;
  if (
    typeof p != "number" ||
    p < -1 ||
    p > 1 ||
    typeof c0 != "string" ||
    (c0[0] != "r" && c0[0] != "#") ||
    (c1 && !a)
  )
    return null;
  (h = c0.length > 9),
    (h = a && c1 ? (c1.length > 9 ? true : c1 == "c" ? !h : false) : h),
    (f = pSBC.pSBCr(c0)),
    (P = p < 0),
    (t =
      c1 && c1 != "c"
        ? pSBC.pSBCr(c1)
        : P
        ? { r: 0, g: 0, b: 0, a: -1 }
        : { r: 255, g: 255, b: 255, a: -1 }),
    (p = P ? p * -1 : p),
    (P = 1 - p);
  if (!f || !t) return null;
  if (l)
    (r = m(P * f.r + p * t.r)),
      (g = m(P * f.g + p * t.g)),
      (b = m(P * f.b + p * t.b));
  else
    (r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5)),
      (g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5)),
      (b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5));
  (alpha = f.a),
    (t = t.a),
    (hasA = alpha >= 0 || t >= 0),
    (alpha = hasA ? (alpha < 0 ? t : t < 0 ? alpha : alpha * P + t * p) : 0);
  if (h)
    return (
      "rgb" +
      (hasA ? "a(" : "(") +
      r +
      "," +
      g +
      "," +
      b +
      (hasA ? "," + m(alpha * 1000) / 1000 : "") +
      ")"
    );
  else
    return (
      "#" +
      (
        4294967296 +
        r * 16777216 +
        g * 65536 +
        b * 256 +
        (hasA ? m(alpha * 255) : 0)
      )
        .toString(16)
        .slice(1, hasA ? undefined : -2)
    );
};

pSBC.pSBCr = (d: string): Color | null => {
  const i = parseInt,
    x: Color = { r: 0, g: 0, b: 0, a: -1 };
  let n = d.length,
    d2: string[],
    d3: number;
  if (n > 9) {
    const [r, g, b, a] = (d2 = d.split(","));
    n = d2.length;
    if (n < 3 || n > 4) return null;
    (x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4))),
      (x.g = i(g)),
      (x.b = i(b)),
      (x.a = a ? parseFloat(a) : -1);
  } else {
    if (n == 8 || n == 6 || n < 4) return null;
    if (n < 6)
      d =
        "#" +
        d[1] +
        d[1] +
        d[2] +
        d[2] +
        d[3] +
        d[3] +
        (n > 4 ? d[4] + d[4] : "");
    d3 = i(d.slice(1), 16);
    if (n == 9 || n == 5)
      (x.r = (d3 >> 24) & 255),
        (x.g = (d3 >> 16) & 255),
        (x.b = (d3 >> 8) & 255),
        (x.a = Math.round((d3 & 255) / 0.255) / 1000);
    else
      (x.r = d3 >> 16), (x.g = (d3 >> 8) & 255), (x.b = d3 & 255), (x.a = -1);
  }
  return x;
};

const lighten = (color: string, percent: number): string | null =>
  pSBC({ p: percent, c0: color, l: true });

const darken = (color: string, percent: number): string | null =>
  pSBC({ p: percent * -1, c0: color, l: true });

function isColorDark(color: string): boolean {
  let hex: string = color;

  // Check if the color is in RGB or RGBA format
  if (color.startsWith("rgb") || color.startsWith("hsl")) {
    const rgba = color.match(/[\d.]+/g);
    if (rgba) {
      const [r, g, b] = rgba.slice(0, 3).map(Number);

      // Calculate relative luminance using the formula for sRGB colors
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      // Check if the luminance is above a certain threshold (adjust if needed)
      const threshold = 128;
      return luminance < threshold;
    }
  } else if (color.startsWith("#")) {
    hex = color.slice(1);
  }

  // Convert hex to RGB
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate relative luminance using the formula for sRGB colors
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Check if the luminance is above a certain threshold (adjust if needed)
  const threshold = 128;
  return luminance < threshold;
}

// // Test the function
// const hexColor = "#FFCC00";
// const rgbColor = "rgb(255, 204, 0)";
// const rgbaColor = "rgba(255, 204, 0, 0.5)";

// console.log(`${hexColor} is ${isColorDark(hexColor) ? "dark" : "light"}`);
// console.log(`${rgbColor} is ${isColorDark(rgbColor) ? "dark" : "light"}`);
// console.log(`${rgbaColor} is ${isColorDark(rgbaColor) ? "dark" : "light"}`);

export { hex2rgba, pSBC, lighten, darken, isColorDark };
