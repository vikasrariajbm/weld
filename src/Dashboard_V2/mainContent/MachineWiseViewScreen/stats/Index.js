import React from 'react';

export default function Stats_Card({ cardIcon, cardTitle, cardValue, unit }) {
  return (
    <div className="stats_card_container">
      <div className="stats_card_title_container">
        <div className="stats_card_icon">{cardIcon}</div>
        <div className="stats_card_title">{cardTitle}</div>
      </div>
      <div className="stats_card_value_container">
        <div className="stats_card_value">
          {cardValue}
          <span className="stats_card_unit">{unit}</span>
        </div>
      </div>
    </div>
  );
}
