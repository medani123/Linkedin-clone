import React from "react";
import "./Widgets.css";

import InfoIcon from "@material-ui/icons/Info";
import FiberManuelRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManuelRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p> {subtitle} </p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2> Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("We Are Back", "Top news -1000 readers")}
      {newsArticle("Covid-19 Updates", "0 cases for the day")}
      {newsArticle("Crypto", "Bitcoin hits a new price!")}
    </div>
  );
}

export default Widgets;
