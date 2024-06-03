import React, { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Row, Col } from 'react-bootstrap';
import image from '../images/mani.jpg';
import hi from '../images/hi.png';

export default function Hero() {
    const [isDragging, setIsDragging] = useState(false);
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const imageRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const imageRect = imageRef.current.getBoundingClientRect();
        setOffset({
            x: e.clientX - imageRect.left,
            y: e.clientY - imageRect.top
        });
        setInitialPosition({
            x: imageRect.left,
            y: imageRect.top
        });
        imageRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const x = e.clientX - offset.x;
            const y = e.clientY - offset.y;
            imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            imageRef.current.style.cursor = 'grab';
            imageRef.current.style.transform = 'translate(0px, 0px)';
        }
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            imageRef.current.style.cursor = 'grab';
            imageRef.current.style.transform = 'translate(0px, 0px)';
        }
    };

    return (
        <div className='hero' id='hero' style={{ margin: 0, padding: 0 }}>
            <div className='container' style={{ paddingTop: '110px' }}>
                <Row className="d-flex flex-column-reverse flex-md-row">
                    <Col sm={12} md={8}>
                        <div className='text'>
                            <h5 style={{ display:'flex',alignItems:'center',color: 'white', fontWeight: '600' }}>Hey Devs <img src={hi} style={{margin:'0px 5px'}} width='30' height='30' alt="hi" /> ,</h5>
                            <TypeAnimation
                                sequence={[
                                    'I am Mani Kumar', 1500,
                                    'I am a Developer', 1500,
                                    'I am a Freelancer', 1500,
                                    'I am a Designer', 1500,
                                    'I am a Programmer', 1500,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ color: '#89CFF0', fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            /><br /><br />
                            <p style={{ color: 'white', fontWeight: '600' }}> Passionate about crafting high-quality web applications with <span style={{ color: '#89CFF0' }}>Flask, React, MongoDB, and Express</span>. Dedicated to delivering seamless user experiences through clean and efficient code. Let's collaborate to turn your ideas into reality! <br /><br /></p>

                            <a className='resume-btn' rel='noreferrer' target='_blank' href="https://drive.google.com/file/d/1SeEwUuT3NPpC2jzuL7hUBby9UkEEWzZI/view?usp=drive_link">Resume</a>
                            <br /><br />
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex justify-content-center">
                        <img
                            ref={imageRef}
                            className='img animated-image'
                            src={image}
                            alt="Not found"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
