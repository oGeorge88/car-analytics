import Carousel from "react-bootstrap/Carousel";

const basePath = "/car-analytics1"; // Define the base path

function Carousels() {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{ marginTop: "70px", backgroundColor: "white" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${basePath}/first.jpg`} // Updated path
          alt="First slide"
          style={{ maxHeight: "550px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Car Analytics</h5>
          <p style={{ color: "white" }}>
            Welcome to Car Analytics, where we provide comprehensive insights
            into the automotive world. Our platform offers a detailed analysis
            of various car brands and models, including key metrics on pricing,
            popularity, and market trends.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${basePath}/second.jpg`} // Updated path
          alt="Second slide"
          style={{ maxHeight: "550px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Second slide label</h5>
          <p style={{ color: "white" }}>
            Car Analytics offers a comprehensive platform for understanding
            vehicle performance and trends. With intuitive charts and detailed
            insights, it empowers users to make informed decisions and enhance
            their driving experience. Discover key metrics, analyze data, and
            drive smarter with Car Analytics!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${basePath}/third.jpg`} // Updated path
          alt="Third slide"
          style={{ maxHeight: "550px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Third slide label</h5>
          <p style={{ color: "white" }}>
            Our Services at Car Analytics provide cutting-edge solutions for
            vehicle data analysis. From detailed performance tracking to
            predictive maintenance insights, our services are designed to keep
            you ahead. Enjoy tailored reports, real-time analytics, and expert
            support to optimize your driving and vehicle management experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${basePath}/fourth.jpg`} // Updated path
          alt="Fourth slide"
          style={{ maxHeight: "550px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h5 style={{ color: "white" }}>Fourth slide label</h5>
          <p style={{ color: "white" }}>
            Get in Touch with us at Car Analytics! Whether you have questions,
            need support, or want to learn more about our services, we’re here
            to help. Reach out via our contact form, email, or phone, and our
            team will be happy to assist you with any inquiries or concerns.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
