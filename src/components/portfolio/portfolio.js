import React from "react";

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      name: "MoJo Mood Journal",
      desciption:
        "This modern mood ring journal allows you to record and reflect on your feelings.",
      github: "https://github.com/keeleybb/Project-Two",
      deployed: "https://aqueous-sea-47525.herokuapp.com/",
      img: "assets/images/mojo_journal.jpg",
    },
    {
      id: 2,
      name: "Weather Dashboard",
      desciption:
        "Use this weather dashboard to get local weather or weather from across the world.",
      github: "https://github.com/keeleybb/12_01_Homework_Weather_Dashboard",
      deployed: "https://keeleybb.github.io/12_01_Homework_Weather_Dashboard/",
      img: "assets/images/weather-dash-640.jpg",
    },
    {
      id: 3,
      name: "Eat the Burger",
      desciption:
        "This fun application uses MySQL, Node, Express, and an ORM. Users can add burgers and devour burgers.",
      github: "https://github.com/keeleybb/2020_02_09_eat_the_burger",
      deployed: "https://arcane-spire-48480.herokuapp.com/",
      img: "assets/images/burger-app.jpg",
    },
    {
      id: 4,
      name: "Beer Here",
      desciption:
        "Find beer nearby. Just put in your city and state and get breweries sorted by rating.",
      github: "https://github.com/keeleybb/12_11_Beer_Here",
      deployed: "https://keeleybb.github.io/12_11_Beer_Here/",
      img: "assets/images/beer-here-640.jpg",
    },
    {
      id: 5,
      name: "Code Quiz",
      desciption:
        "Test your coding knowledge with this coding quiz challenge, then save your best scores.",
      github: "https://github.com/keeleybb/11-17-Homework-Quiz-Game",
      deployed: "https://keeleybb.github.io/11-17-Homework-Quiz-Game/",
      img: "assets/images/quiz-game-sc-640.jpg",
    },
    {
      id: 6,
      name: "Password Generator",
      desciption:
        "Try out this simple password generator.",
      github: "https://github.com/keeleybb/11-10-Homework-Password-Generator",
      deployed: "https://keeleybb.github.io/11-10-Homework-Password-Generator/",
      img: "assets/images/password.jpg",
    }
  ];

  return (

    <div className="container">
      <a name="portfolio">&nbsp;</a>
      <div className="section">
        <div className="row">
          {
            portfolio.map((item) => (
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img src={item.img} />
                  </div>
                  <div className="card-content height-adj">
                    <h5>{item.name}</h5>
                    <p>{item.desciption}</p>
                  </div>
                  <div className="card-action">
                    <div className="row card-pd"
                      style={{ padding: "auto auto !important", margin: "auto auto !important" }}>
                      <div className="col s6 m12 l6">
                        <a href={item.github} class="card-link"
                          target="_blank">Github ></a>
                      </div>
                      <div className="col s6 m12 l6">
                        <a href={item.deployed} class="card-link"
                          target="_blank">Website ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
