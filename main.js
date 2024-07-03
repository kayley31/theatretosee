document.addEventListener("DOMContentLoaded", function() {
  // Explaining the concept to the user
  let theatreQuestion;
  if (confirm("Whether you love Shakespeare or ABBA, our show generator has something for you! Please click OK if you'd like some theatre recommendations. 🎭")) {
    // Alert to user if they press OK
    alert("Yay! Let's decide which show you should see next. 💃🕺");
  } else {
    // Alert to user if they do not choose OK
    alert("Maybe you hate theatre 😢 We think there is a show for everyone, so if you'd like to try again, please refresh the page!");
  }

  // Prompt asking user to choose plays or musicals
  const userResponse = prompt("Do you prefer musicals or plays? Please type your answer below.").toLowerCase();

  // Button which will be displayed to user if they select 'plays'
  const playsButton = document.getElementById("plays-button");

  // Button which will be displayed to user if they select 'musicals'
  const musicalsButton = document.getElementById("musicals-button");

  // Button becomes visible if user answers 'plays'
  if (userResponse === "plays") {
    playsButton.style.visibility = "visible";
  }
  // Button becomes visible if user answers 'musicals'
  else if (userResponse === "musicals") {
    musicalsButton.style.visibility = "visible";
  }
  // Alert if user does not answer 'musicals' or 'plays'
  else {
    alert("Please try again");
  }

  // Array containing names of musicals
  const musicals = [
    "Wicked", "TINA - The Tina Turner Musical", "Matilda The Musical",
    "Back To The Future - The Musical", "Moulin Rouge! The Musical",
    "Les Miserables", "The Phantom Of The Opera", "Hadestown",
    "The Book Of Mormon", "Cabaret", "Disney's Frozen",
    "Disney's The Lion King", "Hamilton", "SIX"
  ];

  // Function to generate musicals list
  function generateMusicals() {
    const musicalsList = document.getElementById("musicals-list");
    musicalsList.innerHTML = "";

    // Get 3 random musicals
    const randomMusicals = getRandomMusicals(3);

    // Loop through all show names and create list items
    randomMusicals.forEach(musicalName => {
      const listItem = document.createElement("li");
      listItem.textContent = musicalName;
      musicalsList.appendChild(listItem);
    });
  }

  // Function to get random shows
  function getRandomMusicals(count) {
    const randomMusicals = [];
    const musicalsCopy = musicals.slice();

    // While loop to pick random shows from the array
    while (randomMusicals.length < count) {
      const randomIndex = Math.floor(Math.random() * musicalsCopy.length);
      const pickedMusical = musicalsCopy.splice(randomIndex, 1)[0];
      randomMusicals.push(pickedMusical);
    }
    return randomMusicals;
  }

  // Event listener when user clicks button
  musicalsButton.addEventListener("click", generateMusicals);

  // Array containing names of plays
  const plays = [
    "An Enemy Of The People", "The Play That Goes Wrong", "Stranger Things: The First Shadow",
    "My Neighbour Totoro", "The Unfriend", "Witness For The Prosecution"
  ];

  // Function to generate plays list
  function generatePlays() {
    const playsList = document.getElementById("plays-list");
    playsList.innerHTML = "";

    // Get 3 random plays
    const randomPlays = getRandomPlays(3);

    // Loop through all show names and create list items
    randomPlays.forEach(playName => {
      const listItem = document.createElement("li");
      listItem.textContent = playName;
      playsList.appendChild(listItem);
    });
  }

  // Function to get random shows
  function getRandomPlays(count) {
    const randomPlays = [];
    const playsCopy = plays.slice();

    // While loop to pick random shows from the array
    while (randomPlays.length < count) {
      const randomIndex = Math.floor(Math.random() * playsCopy.length);
      const pickedPlay = playsCopy.splice(randomIndex, 1)[0];
      randomPlays.push(pickedPlay);
    }
    return randomPlays;
  }

  // Event listener when user clicks button
  playsButton.addEventListener("click", generatePlays);

  // Fading buttons upon hover
  musicalsButton.addEventListener("mouseover", function() {
    musicalsButton.style.backgroundColor = "grey";
    musicalsButton.style.transition = ".5s";
  });

  musicalsButton.addEventListener("mouseout", function() {
    musicalsButton.style.backgroundColor = "";
  });

  playsButton.addEventListener("mouseover", function() {
    playsButton.style.backgroundColor = "grey";
    playsButton.style.transition = ".5s";
  });

  playsButton.addEventListener("mouseout", function() {
    playsButton.style.backgroundColor = "";
  });

  // Console.log with full list of musicals and plays
  console.log("In case there were any errors above, please see a full list of shows you can see here: ", musicals.concat(plays));
});
