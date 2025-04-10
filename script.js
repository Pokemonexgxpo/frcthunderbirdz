
// Add interactive features
document.addEventListener('DOMContentLoaded', () => {
  // Add a welcome message
  const main = document.querySelector('main');
  const date = new Date();
  const hours = date.getHours();
  
  let greeting;
  if (hours < 12) greeting = "Good morning";
  else if (hours < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const welcomeDiv = document.createElement('div');
  welcomeDiv.textContent = `${greeting}, welcome to Thunderbirdz!`;
  welcomeDiv.style.marginTop = '20px';
  main.appendChild(welcomeDiv);
});
