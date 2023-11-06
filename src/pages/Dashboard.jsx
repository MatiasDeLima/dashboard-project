import ColumnChart from "../components/Charts/ColumnChart";
import LineChart from "../components/Charts/LineChart";
import DobleBarChart from "../components/Charts/DobleBarChart";
import PieChart from "../components/Charts/PieChart";
import DoubleBarChartB from "../components/Charts/DoubleBarChartB";
import CityChart from "../components/Charts/CityChart";
import InvertBarChart from "../components/Charts/InvertBarChart";
import PercentChartOne from "../components/Charts/PercentChartOne";
import MapChart from "../components/Charts/MapChart";
import TriploPercentChart from "../components/Charts/TriploPercentChart";

import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="section">
      <div className="dashboard__container grid">
        <DobleBarChart />
        <ColumnChart />
        <LineChart />
        <PieChart />
        <DoubleBarChartB />
        <CityChart />
        <InvertBarChart />
        <PercentChartOne />
        <MapChart />
        <TriploPercentChart />
      </div>
    </section>
  );
};

export default Dashboard;
