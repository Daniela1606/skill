import { useEffect, useState } from "react"

const AppOnboarding = () => {

    const [videoURL, setVideoUrl] = useState();

    const getVideo = () => {
        fetch('http://18.169.192.176/api/config/onboarding-video/', {
        method: 'GET',
        })
        .then(response => response.json())
        .then(setVideoUrl)
    }

    useEffect(()=> {
        getVideo();
    }, [])

    console.log({videoURL})

    return (
        <div>
            {videoURL ? 
            <video width="320" height="240" controls>
                <source src={videoURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            : null }
        </div>
    )
}

export default AppOnboarding