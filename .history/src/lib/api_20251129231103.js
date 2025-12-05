const apiUrl = import.meta.env.VITE_API_URL;

export async function encrypt(plaintext, key) {
  return await fetch(`${apiUrl}/encrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plaintext, key }),
  });
}
export async function decrypt(ciphertext_hex, key) {
  return await fetch(`${apiUrl}/decrypt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ciphertext_hex, key }),
  });
}
