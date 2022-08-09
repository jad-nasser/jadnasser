import "../Project.css";
import React, { useEffect, useRef } from "react";
import images from "./images/images";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const FromExcelToRelationalDatabaseConverter = () => {
  const topPage = useRef(null);
  useEffect(() => {
    topPage.current.scrollIntoView();
  }, []);

  //start part that contains the project title and the starting paragraphs and image
  const start = (
    <section className="start">
      <h1 className="section__title section__title--start">
        From Excel to Relational Database Converter
      </h1>
      <p className="start__paragraph">
        This is my university graduation project, but I've updated its
        dependencies and modified its files structure and code structure for
        better code readability.
      </p>
      <p className="start__paragraph">
        This project is Written in Java language that provides converting a
        Microsoft Excel table to a 2NF (Second Normal Form) relational database
        by reading the table and discovering the relationships between the data,
        then returning a file that contains SQL Server queries ready to be
        executed in a Microsoft SQL Server database to generates the 2NF
        relational database of the input Excel file with less data repetition.
        You can check out the{" "}
        <a href="https://github.com/jad-nasser/from-excel-to-relational-database-converter.git">
          repository
        </a>{" "}
        of that project for more details.
      </p>
      <img
        className="start__img"
        width={images.databaseDiagram.width}
        height={images.databaseDiagram.height}
        src={images.databaseDiagram.src}
        alt="Database diagram"
      ></img>
    </section>
  );

  //technologies used section
  const technologiesUsed = (
    <section className="technologies-used blue-gradient-background">
      <h2 className="section__title section__title--technologies-used">
        Technologies used
      </h2>
      <ul style={{ textAlign: "start" }}>
        <li>
          <strong>Java</strong>
        </li>
        <li>
          <strong>Apache POI 5.2.2</strong> : Used for reading Microsoft Excel
          files
        </li>
      </ul>
    </section>
  );

  //features section
  const features = (
    <section className="features">
      <h2 className="section__title section__title--features">Features</h2>
      <div className="features-container">
        <div className="feature">
          <h3 className="feature__text">Simple GUI</h3>
          <img
            className="feature__img"
            width={images.gui.width}
            height={images.gui.height}
            src={images.gui.src}
            alt="App GUI"
          ></img>
        </div>
        <div className="feature">
          <h3 className="feature__text">
            Smart system that discovers the relations between the data of an
            Excel file and returns the 2NF relational database as executable SQL
            Server queries file ready to be executed in an SQL Server database
          </h3>
          <img
            className="feature__img"
            width={images.resultFile.width}
            height={images.resultFile.height}
            src={images.resultFile.src}
            alt="SQL queries file"
          ></img>
        </div>
      </div>
    </section>
  );

  //the component
  return (
    <>
      <div ref={topPage}></div>
      <Navbar />
      {start}
      {technologiesUsed}
      {features}
      <Footer />
    </>
  );
};

export default FromExcelToRelationalDatabaseConverter;
