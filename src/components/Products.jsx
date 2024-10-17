import React from "react";
import Laptop from "../assets/laptop.jpg";
import datapic from "../assets/dataanalysis.jpg"
import datains from "../assets/datainsight.jpg"

const Products = () => {
  return (
    <section id="product">
      <div className="z-10 w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-6">
          <img
            className="w-[500px] mx-auto my-4"
            src={Laptop}
            draggable="false"
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">
              DATA VISUALIZATION DASHBOARD
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Data Visualization
            </h1>
            <p className="text-justify">
              Tools that visualizes and analyzes large datasets, allowing users
              to track key performance indicators trends and patterns in
              real-time. It provides a user-friendly interface to view metrics
              such as sales, customer behavior, financial performance, or
              operational efficiency. The dashboard supports data-driven
              decision-making by enabling users to customize views, drill down
              into detailed reports, and export data for further analysis.
            </p>
            {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-npm start'>Get Started</button> */}
          </div>
        </div>
        <div className="md:flex flex-row-reverse max-w-[1240px] mx-auto md:grid-cols-2">
        <img
            className="w-[400px] mx-auto my-4"
            src={datapic}
            draggable="false"
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">DATA ANALYTICS</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Managing Your Data
            </h1>
            <p className="text-justify md:mr-20">
              Collecting, processing, and analyzing complex data sets to uncover
              meaningful insights and inform decision-making. It involves
              several key stages, including data collection from various
              sources, data processing to ensure accuracy, and statistical
              analysis to identify trends and patterns.
            </p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[450px] mx-auto my-4"
            src={datains}
            draggable="false"
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">INSIGHT GENERATION</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Data Driven Insight
            </h1>
            <p className="text-justify">
              Generating actionable knowledge from the analysis of data,
              allowing organizations to make informed decisions based on
              empirical evidence rather than intuition. The insights generated
              are then translated into clear, actionable recommendations that
              highlight opportunities and areas for improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
