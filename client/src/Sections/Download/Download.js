import React from 'react';
import DownloadContain from '../../Containers/DownloadContain';

import './download.css';

const Download = () => {
    return (
        <div id='download'>
            <DownloadContain src={'https://d1bx69z06fa2ip.cloudfront.net/plan.svg'} title={'Resume'} buttonText={'View Resume'} href={'https://d1bx69z06fa2ip.cloudfront.net/EdwinG_Resume.pdf'}/>
            <DownloadContain src={'https://d1bx69z06fa2ip.cloudfront.net/letter.svg'} title={'Cover Letter'} buttonText={'View Cover Letter'} href={'https://d1bx69z06fa2ip.cloudfront.net/CoverLetter.pdf'}/>
        </div>
    );
}
export default Download;