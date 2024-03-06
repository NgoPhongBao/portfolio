import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webProjects = [
    {
      title: "Liberty Carz",
      description:
        "Liberty Carz is a digital automotive marketplace in Cambodia. With Liberty Carz, customers can source high-quality cars, and merchants can connect with a focused customer base.",
      imgUrl: projImg1,
      link: "https://libertycarz.com/",
    },
    {
      title: "Liberty currency exchange",
      description:
        "Liberty Currency Exchange offers a variety of money transfer services, currency exchange, as well as payment solutions, catering to both individual customers and businesses.",
      imgUrl: projImg2,
      link: "https://libertycurrency.co/vi/",
    },
    {
      title: "Introducing Ruby Media",
      description:
        "Introducing Ruby Media is a dynamic multimedia company that aspires to change the way people engage with content",
      imgUrl: projImg3,
      link: "https://rubymediavn.com/",
    },
    {
      title: "TConnect",
      description:
        "Tconnect is a creative media company that specializes in providing effective communication solutions for businesses.",
      imgUrl: projImg1,
      link: "https://tconnect-multimedia.com/",
    },
    {
      title: "Magic music media",
      description: "Dynamic, innovative music and talent agency",
      imgUrl: projImg2,
      link: "https://magicmusicmedia.com/",
    },
    {
      title: "Influence",
      description:
        "INFLUENCE is a media agency specializing in an exclusive range of premium marketing service",
      imgUrl: projImg3,
      link: "https://booking.theinfluence.ai/",
    },
  ];

  const mobileProjects = [
    {
      title: "Liberty Carz",
      description:
        "Liberty Carz is a digital automotive marketplace in Cambodia. With Liberty Carz, customers can source high-quality cars, and merchants can connect with a focused customer base.",
      imgUrl: projImg1,
      link: "https://libertycarz.com/",
    },
    {
      title: "Liberty currency exchange",
      description:
        "Liberty Currency Exchange offers a variety of money transfer services, currency exchange, as well as payment solutions, catering to both individual customers and businesses.",
      imgUrl: projImg2,
      link: "https://libertycurrency.co/vi/",
    },
    {
      title: "FABI",
      description:
        "FABI is a cutting-edge mobile application designed to facilitate the buying and selling of used cars in the Japanese market",
      imgUrl: projImg3,
      link: "https://fabi-car.com/",
    },
    {
      title: "Storii",
      description:
        "Storii is a media platform that encompasses music streaming, talk shows, and the sale of products by singer Hà Anh Tuấn",
      imgUrl: projImg1,
      link: "https://storii.vn/",
    },
    {
      title: "CafeFinz",
      description:
        "The leading financial forum network in Vietnam. A place to stay updated with the latest and fastest news, and freely share personal viewpoints.",
      imgUrl: projImg2,
      link: "https://cafefinz.com/",
    },
    {
      title: "Gotec Land",
      description: "A leading real estate trading company in Vietnam",
      imgUrl: projImg3,
      link: "https://gotecland.vn/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="mb-4">Projects</h2>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{whiteSpace: "nowrap"}}>Web development</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="second">Mobile</Nav.Link>
                    </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {mobileProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
