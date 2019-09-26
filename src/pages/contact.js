import React from "react"
import { Container, Row, Col, Form, Button, Input } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import PageHeader from "../components/pageHeader"

import "./contact.scss"

import Smartphone from "../assets/svg/smartphone.svg"
import Telephone from "../assets/svg/phone.svg"
import Mail from "../assets/svg/mail.svg"
import Pin from "../assets/svg/map-pin.svg"

import FacebookSVG from "../assets/svg/facebook.svg"
import TwitterSVG from "../assets/svg/twitter.svg"
import InstagramSVG from "../assets/svg/instagram.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactdataQuery {
      site {
        siteMetadata {
          title
          email
          social {
            facebook
            twitter
            instagram
            linkedin
          }
          contact {
            mobile
            telephone
          }
          address
          map
        }
      }
    }
  `)

  const { title, email, social, contact, address, map } = data.site.siteMetadata
  return (
    <section id="contact">
      <PageHeader title="Contact" />
      <Container>
        <main className="contact-page section-lg">
          <Row>
            <Col lg="8" className="contact-form border-right pl-5 pr-5">
              <h2 className="header-title center">Get in Touch</h2>
              <p className="contact-description center text-gray mb-4">
                We are available by fax, e-mail or by phone. You can also use
                our quick contact form to ask a question about our services and
                projects we’re working on.
              </p>
              <Form
                name="contact"
                method="POST"
                data-netlify-recaptcha="true"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col className="mb-4" md="6">
                    <Input
                      type="text"
                      name="name"
                      id="userName"
                      placeholder="Your Name*"
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Input
                      type="number"
                      name="phone"
                      id="userName"
                      placeholder="Phone"
                    />
                  </Col>
                  <Col className="mb-4" md="12">
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Your Message*"
                      rows="7"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Input type="file" name="file" id="attachedFile" />
                  </Col>
                  <Col className="mb-4" md="6">
                    <div data-netlify-recaptcha="true"></div>
                  </Col>
                  <Col className="mb-4" md="6">
                    <Input
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="E-mail*"
                      required
                    />
                  </Col>
                  <Col className="mb-4" md="6">
                    <Button
                      block
                      className="text-dark font-weight-bold text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col lg="4" className="contact-info pl-5 pr-5">
              <aside className="contact-info">
                <section className="get-social border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Get Social</p>
                  <Row className="ml-0">
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterSVG className="fill-svg" />
                    </a>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramSVG className="stroke-svg" />
                    </a>
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinSVG className="stroke-svg" />
                    </a>
                  </Row>
                </section>
                <section className="telephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Telephone/Fax
                  </p>
                  <Row className="ml-0">
                    <Telephone className="fill-svg fill-color" />{" "}
                    {contact.telephone}
                  </Row>
                </section>
                <section className="mobilephone border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">
                    Mobile Phone
                  </p>
                  <Row className="ml-0">
                    <Smartphone className="stroke-svg stroke-color" />{" "}
                    {contact.mobile}
                  </Row>
                </section>
                <section className="email border-bottom mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">E-mail</p>
                  <Row className="ml-0">
                    <Mail className="stroke-svg stroke-color" /> {email}
                  </Row>
                </section>
                <section className="address mb-4 pb-4">
                  <p className="text-uppercase font-weight-bold">Address</p>
                  <Row className="ml-0 flex-nowrap">
                    <Pin className="fill-svg fill-color" /> <p>{address}</p>
                  </Row>
                </section>
              </aside>
            </Col>
          </Row>
        </main>
      </Container>
      <iframe
        src={map}
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
        title={`${title} office map`}
      ></iframe>
    </section>
  )
}

export default ContactPage
