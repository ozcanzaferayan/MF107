export const formatSeconds = (seconds: number) => {
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  // 123 => 2:3
  // 123 => 02:03 çıkmasını istiyoruz
  // 3 => 00:03 çıkmasını istiyoruz
  const strMinutes = mm.toString().padStart(2, '0');
  const strSeconds = ss.toString().padStart(2, '0');
  return `${strMinutes}:${strSeconds}`;
};
