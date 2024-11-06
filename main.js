// JavaScript to toggle the active class on the profile pic
document.addEventListener("DOMContentLoaded", function () {
  const profilePic = document.getElementById("profile-pic");

  profilePic.addEventListener("mouseenter", function () {
    profilePic.classList.add("animate-image");
  });

  profilePic.addEventListener("mouseleave", function () {
    profilePic.classList.remove("animate-image");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if the current page is the main page
  if (document.body.classList.contains("main-page")) {
    const bubbleCount = 20;
    const maxTimeBetweenBubbles = 1600;
    let timeBetweenBubbles = maxTimeBetweenBubbles;
    let count = 0;

    createBubble();

    const interval = setInterval(() => {
      createBubble();
      count++;

      if (count === bubbleCount) {
        clearInterval(interval);
      }

      timeBetweenBubbles = Math.random() * maxTimeBetweenBubbles
    }, timeBetweenBubbles);

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Set initial random properties
      bubble.style.width = `${Math.random() * 60 + 20}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 90}%`;
      bubble.style.bottom = `${Math.random() * 20}px`;
      bubble.style.animationDuration = `${Math.random() * 30 + 30}s`;
      document.body.appendChild(bubble);
    }
  }
});








