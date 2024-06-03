import React from 'react';
import { GitHub, LinkedIn, Twitter,Copyright ,Mail, Instagram } from '@mui/icons-material';


export default function Footer() {
    return (
        <div style={{ marginTop: '1px' }}>
            <br />
            <div className='footer' style={{ display: 'flex', gap: '30px', margin: '30px', alignItems: 'center', justifyContent: 'center' }}>
                <a href="mailto:manikumarpula@gmail.com" className='footer-link' target='_blank' rel='noreferrer' title='Email'><Mail /></a>
                <a href="https://github.com/manikumarpula" className='footer-ink' target="_blank" rel='noreferrer' title='GitHub'><GitHub /></a>
                <a href="https://www.linkedin.com/in/manikumarpula" className='footer-link' target="_blank" rel='noreferrer' title='LinkedIn'><LinkedIn /></a>
                <a href="https://x.com/Manihemsworth" className='footer-link' target="_blank" rel='noreferrer' title='Twitter'><Twitter /></a>
                <a href="https://www.instagram.com/always_hemsworth?igsh=M245OW95djFsOXhm" className='footer-link' target="_blank" rel='noreferrer' title='Instagram'><Instagram /></a>
            </div>
            <p style={{textAlign:'center',alignItems:'center'}}><Copyright sx={{marginTop:'-2px'}} /> Developed by <a href="https://github.com/manikumarpula" className='footer-link' style={{textDecoration:'none',color:'#89CFF0'}} rel='noreferrer'>Mani Kumar</a></p>
        </div>
    )

}