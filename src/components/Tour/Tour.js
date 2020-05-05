import React, { Component } from 'react'
import './tour.scss'

export default class Tour extends Component {
 constructor(props) {
  super(props);
  this.state = {
   toggleInfo: false
  }
 };

 handleInfo = () => {
  this.setState({
   toggleInfo: !this.state.toggleInfo
  })
 }

 render() {
  const { id, city, img, name, info } = this.props.info;
  const { removeTour } = this.props
  return (
   <article className="tour">
    <div className="tour-inner">
     <div className="img-container">
      <img src={img} alt="" />
      <span onClick={() => removeTour(id)}><i className="fas fa-window-close"></i></span>
     </div>
     <div className="tour-info">
      <h3>{city}</h3>
      <h4>{name}</h4>
      <h5>
       Info: <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span>
      </h5>
      <div>
       {this.state.toggleInfo ? <p className="toggle-text">{info}</p> : null}
      </div>
     </div>
    </div>
   </article>
  )
 }
}
