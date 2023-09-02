import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Portfolio | {meta.title} </title>{" "}
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl"> Portfolio </h1>
        <hr className="t_border my-2 ml-0 text-left" />
      </div>

      <div className="container mx-auto my-10 lg:px-10 px-5">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4 h-96 w-full">
            <img
              alt="gallery"
              className="bloc rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
            />
          </div>
          <div className="col-span-8 h-96 w-full">
            <img
              alt="gallery"
              className="block col-span-8 h-96 w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
            />
          </div>

          <img
            alt="gallery"
            className="block col-span-8 h-96 w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />

          <img
            alt="gallery"
            className="block col-span-4 h-96 w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
          />
          <img
            alt="gallery"
            className="block col-span-4 h-96 w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
          />
          <img
            alt="gallery"
            className="block col-span-8 h-96 w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
          />
        </div>
      </div>
    </HelmetProvider>
  );
};

{
  /* <Container className="About-header">
  <Helmet>
    <meta charSet="utf-8" />
    <title> Portfolio | {meta.title} </title>{" "}
    <meta name="description" content={meta.description} />
  </Helmet>
  <Row className="mb-5 mt-3 pt-md-3">
    <Col lg="8">
      <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
      <hr className="t_border my-4 ml-0 text-left" />
    </Col>
  </Row>
  <div className="mb-5 po_items_ho">
    {dataportfolio.map((data, i) => {
      return (
        <div key={i} className="po_item">
          <img src={data.img} alt="" />
          <div className="content">
            <p>{data.description}</p>
            <a href={data.link}>view project</a>
          </div>
        </div>
      );
    })}
  </div>
</Container> */
}
