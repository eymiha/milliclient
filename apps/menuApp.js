document.getElementById('menu').textContent += "Menu is loaded\n";

export function bootstrap() {
  return new Promise((resolve, reject) => {
    document.getElementById('menu').textContent += "Menu is bootstrapped\n";
    resolve();
  });
}

export function mount() {
  return new Promise((resolve, reject) => {
    document.getElementById('menu').textContent += "Menu is mounted\n";
    resolve();
  });
}

export function unmount() {
  return new Promise((resolve, reject) => {
    document.getElementById('menu').textContent = "";
    resolve();
  });
}
