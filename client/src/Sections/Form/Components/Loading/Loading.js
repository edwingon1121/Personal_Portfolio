import React from 'react';
import Lottie from 'react-lottie';
import FadeIn from 'react-fade-in';
import loading from './loading.json';
import success from './success.json';
import failed from './failed.json';

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
}

const failedOptions = {
  loop: false,
  autoplay: true,
  animationData: failed,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
}
const successOptions = {
    loop: false,
    autoplay: true,
    animationData: success,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

  const Loading = (props) => {
      const {load, fail, title} = props;
      console.log(props);
      return(
        <div className="contains-animation">
        {!fail || fail === undefined ? (
          <FadeIn>
            <div className="main-message">
              <h2>{title}</h2>
              {load ? (
                <Lottie options={loadingOptions} height={120} width={120} />
              ) : (
                <>
                <Lottie options={successOptions} height={70} width={120} />
                <p style={{'textAlign': 'center', 'flexBasis': '100%'}}>{'Check email within 24 hours.'}</p>
                </>
              )}
            </div>
          </FadeIn>
        ) : (
          <>
          <Lottie options={failedOptions} height={120} width={120} />
          <h2 style={{'textAlign': 'center', 'flexBasis': '100%'}}>{title}</h2>
          </>
        )}
      </div>
      )
    }


  export default Loading;