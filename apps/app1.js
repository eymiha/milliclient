document.getElementById('main-content').textContent += "App1 is loaded.";

export function bootstrap() {
  return new Promise((resolve, reject) => {
    document.getElementById('main-content').textContent += "App1 is bootstrapped.";
    resolve();
  });
}

export function mount() {
  return new Promise((resolve, reject) => {
    document.getElementById('main-content').textContent += "App1 is mounted!";
    resolve();
  });
}

export function unmount() {
  return new Promise((resolve, reject) => {
    document.getElementById('main-content').textContent = "";
    resolve();
  });
}
