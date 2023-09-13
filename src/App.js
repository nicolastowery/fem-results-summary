import "./style.css";
const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];
function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="overview">
          <h1 className="overview__heading heading">Your Result</h1>
          <div className="overview-score">
            <div className="overview-score__earned">76</div>
            <div className="overview-score__possible">of 100</div>
          </div>
          <h2 className="overview__rating">Great</h2>
          <div className="overview__text">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>

        <div className="summary">
          <h1 className="summary__heading heading">Summary</h1>
          <ul className="summary-list">
            {data.map((d) => {
              const name = d.category.toLowerCase();
              return (
                <li className={`summary-list__item ${name}`}>
                  <div className="category">
                    <img
                      src={`icon-${name}.svg`}
                      alt={name}
                      className="category__icon"
                    />
                    <span className="category__name">{d.category}</span>
                  </div>
                  <span className="category-score">
                    <span className="category-score__earned">
                      {d.score}&nbsp;
                    </span>
                    <span className="category-score__possible">/ 100</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <button className="summary__button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
