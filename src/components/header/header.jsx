import { useState } from 'react';
import play from '../../image/play.png';
import info from '../../image/info.png';
import Popup from '../popup/popup';

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="h-screen w-full bg-[url('src/image/background.png')] bg-cover bg-right flex justify-start items-end">
      <div className="flex-row ml-5 mb-20 w-full max-w-md md:max-w-2xl lg:max-w-1/3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Happy Birthday! Even Though I Don&apos;t Have A Gift To Give, I Hope My Warm Wishes Bring A Smile To Your Face. Have An Amazing Day Filled With Love And Joy!
          </h1>
          <p className="my-3 md:my-4 lg:my-5">
            This is how Wayangseno wishes His Ex a happy birthday. May your day be filled with joy, and may life always treat you kindly.
          </p>

          <p>
            Click &apos;Play&apos; to see the details
          </p>

          <div className='flex gap-3 md:gap-4 lg:gap-5 mt-4 md:mt-5 lg:mt-6'>
            <button className="w-20 md:w-24 h-8 md:h-9 bg-white duration-300 ease-in-out hover:bg-white/80 text-black font-medium gap-2 flex justify-center items-center rounded-sm" onClick={togglePopup}>
              <img src={play} alt="icon_play" className='w-4' />
              <p>Play</p>
            </button>
            <button className="w-20 md:w-24 h-8 md:h-9 bg-white/40 duration-300 ease-in-out hover:bg-white/30 text-white font-medium gap-2 flex justify-center items-center rounded-sm" onClick={togglePopup}>
              <img src={info} alt="icon_info" className='w-5' />
              <p>Info</p>
            </button>
          </div>

          <Popup isOpen={isPopupOpen} onClose={togglePopup} />
      </div>
    </div>
  );
}

export default Header;
