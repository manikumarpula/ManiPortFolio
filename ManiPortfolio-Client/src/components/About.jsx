import React from 'react';
import { Row, Col } from 'react-bootstrap';
import rkv1 from '../images/rkv1.png';
import ninja from '../images/ninja.png';
import leetcode from '../images/leetcode.png';
import geeksforgeeks from '../images/gfg.png';

export default function About() {
    return (
        <div className='about container' id='about' style={{ marginTop: '1px' }}>
            <h2 style={{ color: '#89CFF0' }}>About</h2><br />
            <Row>
                <Col md={4}>
                    <a href="https://shorturl.at/mpK02" target='_blank' rel='noreferrer'><img src={rkv1} className='rkv' width='300' height='300' alt="rkv" title="IIIT RK Valley" /></a>
                </Col>
                <Col md={8}>
                    <p style={{ margin: '20px', fontSize: '17px' }}>
                        I am <span style={{ color: '#89CFF0' }}>Mani Kumar</span>, and I am currently pursuing a 6-year Integrated B.Tech program in Computer Science Engineering at IIIT RGUKT RK Valley. Here, I have been excelling academically with a CGPA of <span style={{ color: '#89CFF0' }}>8.6</span> in the first 6 semesters and <span style={{ color: '#89CFF0' }}>9.77</span> in PUC. I am a passionate developer, and currently, I am honing my skills in <span style={{ color: '#89CFF0' }}>Flask,React,MongoDB,Express</span> by building projects. I have experience with MySQL, MongoDB, and Firebase databases. Additionally, I have the habit of solving DSA problems on various platforms like <span style={{ color: '#89CFF0' }}>Geeks for Geeks, Coding Ninjas, LeetCode </span> which enhances my problem-solving skills. I'm very eager to leverage my skills in the world of technology and contribute to its advancement.
                    </p>
                    <div className='dsa-links'>
                        <a href="https://www.geeksforgeeks.org/user/manikumgk2t/" title='Geeks for Geeks'><img src={geeksforgeeks} className='dsa' width='90' alt="Geeks for Geeks" /></a>
                        <a href="https://www.naukri.com/code360/profile/af9e3993-438d-4485-9e7b-a0ea0e9fcc0a" title='Ninja'><img src={ninja} className='dsa' width='68' alt="Hacker Rank" /></a>
                        <a href="https://leetcode.com/u/manikumarpula/" title='LeetCode'><img src={leetcode} className='dsa' width='58' alt="LeetCode" /></a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}