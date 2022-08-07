import { Link } from "react-router-dom";
import freeImagesPic from "../Project/FreeImages/images/home-page-large.jpg";
import freeLibraryPic from "../Project/FreeLibrary/images/home-page.png";
import sunglassesOnlineStorePic from "../Project/SunglassesOnlineStore/images/home-page.jpg";
import fromExcelToRelationalDatabasePic from "../Project/FromExcelToRelationalDatabaseConverter/images/database-diagram.png";

const MyWork = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {/* portfolio item 1 */}
        <Link className="portfolio__item" to="/free-images">
          <img
            src={freeImagesPic}
            alt="Free Images Website"
            className="portfolio__img"
          ></img>
          <span className="hoverable">Free Images Website</span>
        </Link>

        {/* portfolio item 2 */}
        <Link className="portfolio__item" to="/free-library">
          <img
            src={freeLibraryPic}
            alt="Free Library Website"
            className="portfolio__img"
          ></img>
          <span className="hoverable">Free Library Website</span>
        </Link>

        {/* portfolio item 3 */}
        <Link className="portfolio__item" to="/sunglasses-online-store">
          <img
            src={sunglassesOnlineStorePic}
            alt="Sunglasses Online Store Website"
            className="portfolio__img"
          ></img>
          <span className="hoverable">Sunglasses Online Store Website</span>
        </Link>

        {/* portfolio item 4 */}
        <Link
          className="portfolio__item"
          to="/from-excel-to-relational-database-converter"
        >
          <img
            src={fromExcelToRelationalDatabasePic}
            alt="From Excel to Relational Database Converter Program"
            className="portfolio__img"
          ></img>
          <span className="hoverable">
            From Excel to Relational Database Converter Program
          </span>
        </Link>
      </div>
    </section>
  );
};
export default MyWork;
