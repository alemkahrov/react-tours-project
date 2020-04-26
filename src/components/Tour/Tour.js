import React, { Component } from 'react'
import './tour.scss'


export default class Tour extends Component {
 constructor(props) {
  super(props);
  this.state = {
   toggleInfo: false
  }
 }

 // Method
 handleInfo = () => {
  this.setState({
   toggleInfo: !this.state.toggleInfo
  })
 }

 render() {
  const { id, city, img, name, info } = this.props.tour
  const { removeTour } = this.props
  return (
   <article className="tour">
    <div className="img-box">
     <img src={img} alt="destination" />
     <button type="button" className="close-btn" onClick={() => removeTour(id)}>
      <i className="fas fa-times"></i>
     </button>
    </div>
    <div className="tour-info">
     <h3>{city}</h3>
     <h4>{name}</h4>
     <h5>Info:
       <button type="button" className="show-btn" onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></button>
      {this.state.toggleInfo ? <p>{info}</p> : null}
     </h5>
    </div>
   </article>
  )
 }
}
