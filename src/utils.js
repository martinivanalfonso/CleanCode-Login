export default async function login({username, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user123" && password === "password123") {
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
}
