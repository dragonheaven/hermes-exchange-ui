import React from 'react';

export const renderSvg = (className, icon) => {
  const useTag = `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="${
    process.env.PUBLIC_URL
  }/sprite-inline.svg#${icon}"/>`;
  return <svg className={className} role="img" aria-hidden="true" dangerouslySetInnerHTML={{ __html: useTag }} />;
};

export const getLanguageFromURL = () => {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const recaptchaSiteKey = '6LdKTbwUAAAAAOH8sBWMtP0ZRYUoiLfk_HHMuSm2';
export const recaptchaSecretKey = '6LdKTbwUAAAAANlO1HE8synHw3BsWgGpgA2VDeTp';
