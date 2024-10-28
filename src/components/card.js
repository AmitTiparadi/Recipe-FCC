import React from 'react';

class Cards extends React.Component {
  render() {
    const { image, title, text } = this.props;
    return (
      <div className="card-group">
        <div className="card">
          <img src={image} className={text} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
