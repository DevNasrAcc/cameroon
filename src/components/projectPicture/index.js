import removePicture from "../../assets/images/cross.png";
import LoadingOverlay from "react-loading-overlay";
import addPicture from "../../assets/images/add-picture.png";
import React, { Fragment, useEffect, useState } from "react";

const ProjectPicture = ({ state, statePictures, onImageChange }) => {
  const [loadingIsActive, setLoadingIsActive] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoadingIsActive(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
      <label className="item">
        {/*{state.pictures[1] && <div className="main-image-remove">*/}
        {/*    <img src={removePicture} alt="Remove Picture"/>*/}
        {/*</div>}*/}
        {!state.pictures[1] && (
          <div className="item-overlay">
            <LoadingOverlay active={loadingIsActive} spinner text="" />
          </div>
        )}
        {!statePictures.picture1 && !state.pictures[1] && !loadingIsActive && (
          <div className="add">
            <img src={addPicture} alt="Add Image" />
          </div>
        )}
        {state.pictures[1] && (
          <img
            className="picture"
            src={state.pictures[1]?.url}
            alt="Project picture"
            loading="lazy"
          />
        )}

        {statePictures.picture1 && (
          <img
            className="picture"
            src={statePictures.picture1}
            alt="preview image"
          />
        )}

        {!state.pictures[1] && !loadingIsActive && (
          <input
            type="file"
            onChange={(e) => onImageChange(e, "picture1", "pictureSource1")}
          />
        )}
      </label>
      <label className="item">
        {/*{state.pictures[2] && <div className="main-image-remove">*/}
        {/*    <img src={removePicture} alt="Remove Picture"/>*/}
        {/*</div>}*/}
        {!state.pictures[2] && (
          <div className="item-overlay">
            <LoadingOverlay active={loadingIsActive} spinner text="" />
          </div>
        )}
        {!statePictures.picture2 && !state.pictures[2] && !loadingIsActive && (
          <div className="add">
            <img src={addPicture} alt="Add Image" />
          </div>
        )}
        {state.pictures[2] && (
          <img
            className="picture"
            src={state.pictures[2]?.url}
            alt="Project picture"
            loading="lazy"
          />
        )}

        {statePictures.picture2 && (
          <img
            className="picture"
            src={statePictures.picture2}
            alt="preview image"
          />
        )}

        {!state.pictures[2] && !loadingIsActive && (
          <input
            type="file"
            onChange={(e) => onImageChange(e, "picture2", "pictureSource2")}
          />
        )}
      </label>
      <label className="item">
        {/*{state.pictures[3] && <div className="main-image-remove">*/}
        {/*    <img src={removePicture} alt="Remove Picture"/>*/}
        {/*</div>}*/}
        {!state.pictures[3] && (
          <div className="item-overlay">
            <LoadingOverlay active={loadingIsActive} spinner text="" />
          </div>
        )}
        {!statePictures.picture3 && !state.pictures[3] && !loadingIsActive && (
          <div className="add">
            <img src={addPicture} alt="Add Image" />
          </div>
        )}
        {state.pictures[3] && (
          <img
            className="picture"
            src={state.pictures[3]?.url}
            alt="Project picture"
            loading="lazy"
          />
        )}

        {statePictures.picture3 && (
          <img
            className="picture"
            src={statePictures.picture3}
            alt="preview image"
          />
        )}

        {!state.pictures[3] && !loadingIsActive && (
          <input
            type="file"
            onChange={(e) => onImageChange(e, "picture3", "pictureSource3")}
          />
        )}
      </label>
      <label className="item">
        {/*{state.pictures[4] && <div className="main-image-remove">*/}
        {/*    <img src={removePicture} alt="Remove Picture"/>*/}
        {/*</div>}*/}
        {!state.pictures[4] && (
          <div className="item-overlay">
            <LoadingOverlay active={loadingIsActive} spinner text="" />
          </div>
        )}
        {!statePictures.picture4 && !state.pictures[4] && !loadingIsActive && (
          <div className="add">
            <img src={addPicture} alt="Add Image" />
          </div>
        )}
        {state.pictures[4] && (
          <img
            className="picture"
            src={state.pictures[4]?.url}
            alt="Project picture"
            loading="lazy"
          />
        )}

        {statePictures.picture4 && (
          <img
            className="picture"
            src={statePictures.picture4}
            alt="preview image"
          />
        )}

        {!state.pictures[4] && !loadingIsActive && (
          <input
            type="file"
            onChange={(e) => onImageChange(e, "picture4", "pictureSource4")}
          />
        )}
      </label>
    </Fragment>
  );
};

export default ProjectPicture;
