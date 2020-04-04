export default async function login({username, password}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "martin" && password === "martin") {
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
}
