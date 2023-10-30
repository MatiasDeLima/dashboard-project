import ColumnChart from "../components/Charts/ColumnChart/ColumnChart";
import ColumnBasicChart from "../components/Charts/ColumnBasicChart/ColumnBasicChart";
import LineChart from "../components/Charts/LineChart/LineChart";
import DobleBarChart from "../components/Charts/DobleBarChart/DobleBarChart";

import "../styles/Home.css";

const Home = () => {
  return (
    <section className="section">
      <div className="home__container container grid">
        <DobleBarChart />
        <ColumnChart />
        <ColumnBasicChart />
        <LineChart />
      </div>
    </section>
  );
};

export default Home;
