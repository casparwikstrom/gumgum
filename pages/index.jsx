import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
      <div>
        <div>
        <video src={require('../public/testett.mp4')} autoPlay loop muted className='video_container'/>
        
        
        </div>
        <div className='video_overlay'>
            <div className='video_overlay_content'>
                <h1>Next.js Video Background</h1>
                <p>Background video with Next.js and CSS</p>
            </div>
        </div>
        <style jsx>{`
            .video_container {
                width: 100%;
                height: 100vh;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
            .video_overlay {
                width: 100%;
                height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(0,0,0,0.5);
            }
            .video_overlay_content {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                text-align: center;
            }
        `}</style>
      <Navbar>

      </Navbar>

      </div>

    
    
    )
}

