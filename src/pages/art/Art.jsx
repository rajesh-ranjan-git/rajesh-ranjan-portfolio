import "./Art.scss";
import { useEffect } from "react";
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
import { drawings } from "../../Components/Portfolio/portfolio";
import Menu from "../../components/menu/Menu";
import Splash from "../splash/Splash";

export default function Art() {
  const [photoState, setPhotoState] = useState({
    photoIndex: 0,
    isOpen: false,
  });
  const [splash, setSplash] = useState(true);

  const openLightBox = (index) => {
    setPhotoState({ photoIndex: index, isOpen: true });
  };

  useEffect(() => {
    setTimeout(() => setSplash(false), 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <>
      <Menu detail={true} />
      <div className="home art_main">
        <div className="artwork_container">
          {photoState.isOpen && (
            <Lightbox
              open={photoState.isOpen}
              close={() => setPhotoState({ photoIndex: 0, isOpen: false })}
              slides={drawings}
              plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
              index={photoState.photoIndex}
              render={(drawings, 1, null)}
            />
          )}

          <div className="my_drawings">
            <ul class="gallery">
              {drawings.map((art, key) => (
                <ArtPiece
                  key={key}
                  src={art.src}
                  onClick={openLightBox}
                  index={key}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const ArtPiece = (props) => {
  return (
    <li>
      <img src={props.src} alt="" onClick={() => props.onClick(props.index)} />
    </li>
  );
};
