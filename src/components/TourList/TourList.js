import React, { Component } from 'react'
import Tour from '../Tour'
import tourData from '../../tourData'
import './tour-list.scss'

export default class TourList extends Component {
 constructor(props) {
  super(props);
  this.state = {
   tours: tourData
  }
 }

 // Method
 removeTour = (id) => {
  const sortedTours = this.state.tours.filter(tour => tour.id !== id);
  this.setState({ tours: sortedTours })
 }

 render() {
  const { tours } = this.state
  return (
   <section className="tour-list">
    {tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))}
   </section>
  )
 }
}
