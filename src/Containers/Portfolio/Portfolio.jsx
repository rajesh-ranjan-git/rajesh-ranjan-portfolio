import "./Portfolio.scss";
import HomeContent from "../HomeContent/HomeContent";
import PortfolioContent from "./Portfoliocontent/PortfolioContent";
import { projectsHeader } from "../../Components/Portfolio/Portfolio";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { advancedSlides } from "./Lightbox/Slides";
import OtherProjects from "./OtherProjects/OtherProjects";

export default function Portfolio() {
  const [photoState, setPhotoState] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const openLightBox = (index) => {
    setPhotoState({ photoIndex: index, isOpen: true });
  };

  const [items, setItems] = useState(projectsHeader.projects);
  const [mySlides, setMySlides] = useState(advancedSlides);
  const [active, setActive] = useState(null);
  const filterItem = (categItem) => {
    const updateItems = projectsHeader.projects.filter((curElem) => {
      return curElem.filter === categItem;
    });
    const myAdvancedSlides = advancedSlides.filter((slide) => {
      return slide.filter === categItem;
    });

    setItems(updateItems);
    setActive(categItem);
    setMySlides(myAdvancedSlides);
  };

  return (
    <HomeContent id="portfolio" class="portfolio">
      <h2 className="h3 section-title">Portfolio</h2>

      {photoState.isOpen && (
        <Lightbox
          open={photoState.isOpen}
          close={() => setPhotoState({ photoIndex: 0, isOpen: false })}
          slides={mySlides}
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
          index={photoState.photoIndex}
          render={(mySlides, 1, null)}
        />
      )}

      <div className="portfolio_section">
        <div className="portfolio_container">
          <div className="portfolio_item_btns col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li
                data-filter="*"
                onClick={() => {
                  setItems(projectsHeader.projects);
                  setActive(null);
                  setMySlides(advancedSlides);
                }}
                className={active === null ? "filter-active" : null}
              >
                All
              </li>
              <li
                data-filter=".filter-react"
                onClick={() => filterItem("filter-react")}
                className={active === "filter-react" ? "filter-active" : null}
              >
                React JS
              </li>
              <li
                data-filter=".filter-js"
                onClick={() => filterItem("filter-js")}
                className={active === "filter-js" ? "filter-active" : null}
              >
                Vanilla Javascript
              </li>
              <li
                data-filter=".filter-frontend"
                onClick={() => filterItem("filter-frontend")}
                className={
                  active === "filter-frontend" ? "filter-active" : null
                }
              >
                Frontend (HTML, CSS)
              </li>
            </ul>
          </div>

          <div className="portfolio_grid_row">
            {items.map((project, key) => (
              <PortfolioContent
                onClick={openLightBox}
                index={key}
                key={key}
                subtitle={project.subtitle}
                title={project.title}
                by={project.by}
                image={project.image}
                id={project.id}
              />
            ))}
          </div>

          {/* <OtherProjects /> */}
        </div>
      </div>
    </HomeContent>
  );
}
