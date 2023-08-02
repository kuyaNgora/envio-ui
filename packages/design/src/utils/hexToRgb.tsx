export default function hexRgb(hex: string) {
  const s = hex.replace("#", "");
  let y = s;
  if (s.length === 3) {
    y = `${s[0]}${s[0]}${s[1]}${s[1]}${s[2]}${s[2]}`;
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(y);

  let returner = "";

  if (result) {
    const red = parseInt(result[1], 16);
    const green = parseInt(result[2], 16);
    const blue = parseInt(result[3], 16);

    returner = `${red}, ${green}, ${blue}`;
  }

  return returner;
}
