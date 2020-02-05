import React from 'react';
import DownloadContain from './DownloadContain';
import resumeIcon from '../../images/Resume.jpeg';
import resume from '../../images/EdwinG_Resume.pdf';
import cover from '../../images/CoverLetter.pdf';
import clIcon from '../../images/CoverLetter.jpeg';

import './download.css';

const Download = () => {
    return (
        <div id='download'>
            <DownloadContain  src={resumeIcon} title={'Resume'} buttonText={'View Resume'} href={resume}/>
            <DownloadContain src={clIcon} title={'Cover Letter'} buttonText={'View Cover Letter'} href={cover}/>
        </div>
    );
}
export default Download;