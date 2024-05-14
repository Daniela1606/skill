import { useEffect, useState } from "react"

function CircularProgressBar({children, progress}) {

    const [degree, setDegree] = useState(0) 

    useEffect(() => {
        setDegree(progress * 360 / 100)
    }, [progress])


    return (
        <div style={{
            aspectRatio: '1 / 1',
            width: '75%',
            overflow: 'hidden',
            padding: '2em',
            margin: 'auto'
        }}>
            <div style={{
                border: '1.4em solid transparent',
                borderRadius: '50%',
                background: `conic-gradient(from ${degree - 45}deg at 50% 50%, #FFFFFF ${progress > 60 ? 40 : 50}%, #041F72 ${progress > 75 ? 50 : 90}%) border-box`,
                borderLeftColor: progress > 75 ? 'transparent' : '#FFFFFF',
                borderBottomColor: progress > 50 ? 'transparent' : '#FFFFFF',
                transform: 'rotate(45deg)',
                position: 'relative',

            }}>
                <div style={{
                    backgroundColor: 'white', 
                    borderRadius: '50%',
                    transform: 'rotate(-45deg)',
                    position: 'relative',
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        margin: 'auto',
                        height: '35%',
                        width: '160%',
                        transform: `translateX(-50%) rotate(${-90+degree}deg)`,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'end',
                        overflow: 'visible'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '1 / 1',
                            backgroundColor: 'white',
                            color: 'black',
                            borderRadius: '50%',
                            transform: `rotate(${90-degree}deg)`,
                        }}>{progress}%</div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
    
}

export default CircularProgressBar