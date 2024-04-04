import { Button } from "antd";
import { useEffect, useState } from "react";

const AppOnboarding = ({onConfirmClick}) => {
  const [videoURL, setVideoUrl] = useState();

  const getVideo = () => {
    fetch('http://18.169.192.176/api/config/onboarding-video/', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(setVideoUrl);
  };

  useEffect(() => {
    getVideo();
  }, []);

  console.log({ videoURL });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <h2 style={{ textAlign: 'center', color:'rgb(3, 3, 62)', fontSize:'30px', textDecoration:'underline' }}>Video Tour</h2> */}
      {videoURL ? (
        <video width="1200" height="700" controls autoPlay>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
              <Button
                type="primary"
                onClick={onConfirmClick}
                style={{ marginTop: '10px', background: 'rgb(3, 3, 62)', color: 'white' }}
              >
                Start Journey
              </Button>
    </div>
  );
};

export default AppOnboarding;