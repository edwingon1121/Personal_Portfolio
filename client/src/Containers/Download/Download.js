import React from 'react';
import DownloadContain from './DownloadContain';

import './download.css';

const Download = () => {
    return (
        <div id='download'>
            <DownloadContain  src={'https://d1bx69z06fa2ip.cloudfront.net/EdwinG_Resume.jpeg/Resume.jpeg'} title={'Resume'} buttonText={'View Resume'} href={'https://d1bx69z06fa2ip.cloudfront.net/EdwinG_Resume.jpeg'}/>
            <DownloadContain src={'https://d1bx69z06fa2ip.cloudfront.net/EdwinG_Resume.jpeg/CoverLetter.jpeg'} title={'Cover Letter'} buttonText={'View Cover Letter'} href={'https://d1bx69z06fa2ip.cloudfront.net/CoverLetter.jpeg'}/>
        </div>
    );
}
export default Download;