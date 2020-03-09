export function createRandomString(length = 10) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function createRandomInteger(min = 0, max = 999999) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
