import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section" id="tvc">
      <div className="overlay">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Take a Quick Look</h2>
            </div>
            {/* .col */}
          </div>
          {/* .row */}
          <div className="row">
            <div className="col-md-3" />
            {/* .col */}
            <div className="col-md-6">
              <div className="video-border">
                <a
                  href="https://www.youtube.com/watch?v=FfjquCruyQs"
                  data-effect="mfp-3d-unfold"
                  className="play-button embaded-popup"
                >
                  <span className="pb-border-1">
                    <span className="pb-border-2">
                      <i className="icofont icofont-ui-play" />
                    </span>
                  </span>
                </a>
                {/* .play-button */}
                <h6>Play Now</h6>
              </div>
            </div>
            {/* .col */}
            <div className="col-md-3" />
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .overlay */}
    </div>
  );
};

export default VideoSection;
