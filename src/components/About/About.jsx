import React from 'react'
import { getImageUrl } from '../../utils';

export const About = () => {
  return <section>
    <h2>About</h2>
    <div><img src={getImageUrl("about/aboutImage.jpg")} alt="About image" /></div>
  </section>;
}
