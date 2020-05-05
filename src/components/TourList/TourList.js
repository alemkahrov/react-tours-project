import React, { Component } from 'react'
import tourData from '../../tourData'
import Tour from '../Tour'
import "./tourList.scss"

export default class TourList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   tours: tourData
  }
 };

 // Methods
 removeTour = (id) => {
  const sortedTours = this.state.tours.filter(tour => tour.id !== id);
  this.setState({
   tours: sortedTours
  })
 }

 render() {
  const { tours } = this.state
  return (
   <section className="tourList">
    <h2 className="section-title">Choose your next destination</h2>
    {tours.map(tour => (<Tour key={tour.id} info={tour} removeTour={this.removeTour} />))}
   </section>
  )
 }
}
