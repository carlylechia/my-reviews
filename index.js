// local reviews data
const reviews = [
    {
      id: 1,
      name: "Ngani Faith",
      title: "Manager",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk5wg3aOsUwlWrsN8sUjdhPJ8TLT3o40jdQ&usqp=CAU",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aeneanscelerisque commodo justo, at pretium velit malesuada tempus. Sed atmauris molestie, commodo dui vitae, lobortis ipsum. Duis egetposuere urna. Donec at feugiat tortor, vel scelerisque justo. Nuncluctus dignissim eleifend. Vivamus a tellus enim. Nulla facilisi.Quisque sodales interdum est eget convallis. Curabitur mattis."
    },
    {
      id: 2,
      name: "Chia Clive",
      title: "Intern",
      img: "https://pbs.twimg.com/profile_images/1144555970560954368/9BlQXBrc.jpg",
      text: "Nunc cursus feugiat placerat. Pellentesque vel finibus elit, ut lacinia erat. Vivamus mollis erat bibendum nulla ultrices luctus.",
    },
    {
      id: 3,
      name: "Gaston Che",
      title: "Mentor",
      img: "https://avatars.githubusercontent.com/u/11961056?v=4",
      text: "Nunc cursus feugiat placerat. Pellentesque vel finibus elit, ut lacinia erat. Vivamus mollis erat bibendum nulla ultrices luctus."
    },
    {
      id: 4,
      name: "Chia Carlyle",
      title: "CEO",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  // get buttons
  const pre = document.querySelector(".pre");
  const next = document.querySelector(".next");
  const surpriseBtn = document.querySelector(".surprise-btn");
  
  // get elements to update
  const img = document.querySelector(".author-image");
  const authorName = document.querySelector(".author-name");
  const authorTitle = document.querySelector(".author-title");
  const reviewText = document.querySelector(".review-text");
  
  let current = 0;
  
  function updateReviews(current) {
    // get current reviews
    let currentImg = reviews[current].img;
    let currentName = reviews[current].name;
    let currenttitle = reviews[current].title.toUpperCase();
    let currentText = reviews[current].text;
  
    // update reviews
    img.src = currentImg;
    authorName.innerHTML = currentName;
    authorTitle.innerHTML = currenttitle;
    reviewText.innerHTML = currentText;
  }
  
  // pre click response
  pre.addEventListener("click", decreaseCurrent);
  
  function decreaseCurrent() {
    if (current <= 0) {
      current = reviews.length - 1;
    } else {
      current--;
    }
    updateReviews(current);
  }
  
  // next
  next.addEventListener("click", increaseCurrent);
  
  function increaseCurrent() {
    if (current >= 3) {
      current = 0;
    } else {
      current++;
    }
    updateReviews(current);
  }
  
  // surprise
  surpriseBtn.addEventListener("click", surpriseCurrent);
  
  function surpriseCurrent() {
    let current = Math.floor(Math.random() * reviews.length);
  
    updateReviews(current);
  }
  