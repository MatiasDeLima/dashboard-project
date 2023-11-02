import ColumnChart from "../components/Charts/ColumnChart/ColumnChart";
import LineChart from "../components/Charts/LineChart/LineChart";
import DobleBarChart from "../components/Charts/DobleBarChart/DobleBarChart";
import PieChart from "../components/Charts/PieChart/PieChart";
import DoubleBarChartB from "../components/Charts/DoubleBarChartB/DoubleBarChartB";

import "../styles/Home.css";

const Home = () => {
  return (
    <section className="section">
      <div className="home__container container grid">
        <DobleBarChart />
        <ColumnChart />
        <LineChart />
        <PieChart />
        <DoubleBarChartB />
      </div>
    </section>
  );
};

export default Home;
