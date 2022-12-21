import './About.css';
import About_Image from "../../Assets/About_Image.png";

const About = (props) => {
    return (
      <div>
        <h1 className='h1'>About</h1>
        <img alt="" className="About_Image" src={About_Image}></img>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus
          in mollis nunc. Viverra ipsum nunc aliquet bibendum enim facilisis
          gravida neque. Accumsan sit amet nulla facilisi morbi. Sit amet luctus
          venenatis lectus. Tortor at risus viverra adipiscing at in. Tellus
          pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum.
          Sed turpis tincidunt id aliquet risus feugiat in ante metus. Odio tempor
          orci dapibus ultrices in iaculis nunc sed. Id aliquet risus feugiat in.
          Egestas integer eget aliquet nibh praesent. Orci porta non pulvinar
          neque laoreet suspendisse interdum consectetur. Maecenas ultricies mi
          eget mauris pharetra et ultrices neque ornare. Ut porttitor leo a diam
          sollicitudin tempor id eu nisl. Dui id ornare arcu odio ut sem.
        </p>
      </div>
    );
  };
  export default About;