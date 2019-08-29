import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h2> room not found...</h2>
          <Link to="/rooms" className="btn-primary">
            Back To Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={name}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}</h6>
              <h6>Max capacity : {capacity} people</h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item,index) => (
              <li key={index}>-{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
