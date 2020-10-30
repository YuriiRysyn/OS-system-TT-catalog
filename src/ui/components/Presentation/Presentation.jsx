import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import './Presentation.scss';

export const Presentation = () => {
  const presentationImages = [
    'https://techlife.news/wp-content/uploads/2020/05/best-ipad-video-player-apps.jpg',
    'https://i0.wp.com/itc.ua/wp-content/uploads/2018/11/Apple-iPad-Pro-11-1-of-23.jpg',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-watch-6s-202009_GEO_RU?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936765000',
    'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg',
    'https://9to5mac.com/wp-content/uploads/sites/6/2018/01/ipad-pros.jpg?quality=82&strip=all',
  ];
  const [imgNumber, setImgNuber] = useState(0);
  let timer;

  const setNextSlide = () => {
    if (imgNumber === presentationImages.length - 1) {
      setImgNuber(0);
      return;
    }
    setImgNuber(imgNumber + 1);
  };

  const setPrevSlide = () => {
    if (imgNumber === 0) {
      setImgNuber(presentationImages.length - 1);
      return;
    }
    setImgNuber(imgNumber - 1);
  };

  useEffect(() => {
    timer = setTimeout((setNextSlide), 2000);

    return () => clearTimeout(timer);
  }, [imgNumber])

  return (
    <section className="presentation">
      <button className="presentation__btn presentation__btn--prev-slide" onClick={setPrevSlide}/>
      <div className="presentation__container-for-images">
        <img 
          className="presentation__img"
          src={presentationImages[imgNumber]} 
          alt="apple production"
        />
      </div>
      <button className="presentation__btn presentation__btn--next-slide" onClick={setNextSlide}/>

      <div className="presentation__dots">
        {presentationImages.map((_, i) => (
        <span
          key={i}
          className={classNames(
            "presentation__dot",
            {'presentation__dot--active': imgNumber === +i}
          )}
          onClick={()=> setImgNuber(+i)}
        />
        ))}
      </div>
    </section>
  )
};