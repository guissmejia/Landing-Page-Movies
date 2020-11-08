//The container of each slide and the individual slide are instantiated, in turn, a variable is created that will save the width of each item for its movement, which will be executed in intervals of 3.5 seconds

const imageGallery = () => {
  let slideList = document.querySelector(".Slide--list");

  let slideItem = document.querySelectorAll(".Slide__card");

  let counter = 1;

  let sizeItem = slideItem[0].clientWidth;
  console.log(sizeItem)

  let interval = 3500;

  window.addEventListener("resize", () => {
    let sizeItem = slideItem[0].clientWidth;
    console.log(sizeItem)
  });

  setInterval(() => {
    slide();
  }, interval);

  const slide = () => {
    slideList.style.transform = "translate(" + -sizeItem * counter + "px)";
    slideList.style.transition = "all .8s";

    counter++;

    if (counter == slideItem.length) {
      setTimeout(() => {
        slideList.style.transform = "translate(0px)";
        slideList.style.transition = "all .5s";
        counter = 1;
      }, interval);
    }
  };
};

imageGallery();

//The function that makes the request to a local api is created that will show the user the information of the existing movies

const moviesData = () => {
  const moviesDataUrl = "./data/moviesData.json";

  fetch(moviesDataUrl)
    .then((response) => response.json())
    .then((response) => {
      if (response.data.length > 0) {
        for (i = 0; i < response.data.length; i++) {
          let moviesData = document.createElement("li");
          let movieInfo = document.createElement("div");
          let movieTitle = document.createElement("h1");
          let movieImage = document.createElement("img");
          let movieYear = document.createElement("p");
          let movieContentRating = document.createElement("p");
          let watchNowButton = document.createElement("button");
          let moreInfoButton = document.createElement("button");

          moviesData.setAttribute("class", "Movie--item");
          moviesData.setAttribute(
            "data-category",
            `${response.data[i].category}`
          );
          movieTitle.innerHTML = response.data[i].title;
          movieImage.src = response.data[i].imgSrc;
          movieYear.innerHTML = response.data[i].year;
          movieContentRating.innerHTML = response.data[i].contentRating;
          watchNowButton.innerHTML = "Watch Now";
          moreInfoButton.innerHTML = "More Info";

          movieInfo.classList.add("Movie--info");
          watchNowButton.classList.add("button--primary");
          moreInfoButton.classList.add("button--secondary");

          moviesData.appendChild(movieInfo);
          moviesData.appendChild(movieImage);
          movieInfo.appendChild(movieTitle);
          movieInfo.appendChild(movieYear);
          movieInfo.appendChild(movieContentRating);
          movieInfo.appendChild(watchNowButton);
          movieInfo.appendChild(moreInfoButton);

          const movieDataItem = document.getElementById("Movies__list--items");

          movieDataItem.appendChild(moviesData);
        }
      }
    });
};

moviesData();

//A function is implemented that will allow the user to activate a night mode on the site, saving their choice through localStorage

const darkMode = () => {
  const buttonSwitch = document.querySelector("#switch");

  buttonSwitch.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    buttonSwitch.classList.toggle("Active");

    if (document.body.classList.contains("Dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("Dark");
    buttonSwitch.classList.add("Active");
  } else {
    document.body.classList.remove("Dark");
    buttonSwitch.classList.remove("Active");
  }
};

darkMode();
