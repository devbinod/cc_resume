import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const address = {
    street: "(Your Street)",
    city: "(Your City)",
    state: "(Your State)",
    zip: "(Your Zip/Postal Code)",
  };
  const { street, city, state, zip } = address;
  // const name = props.data.name;
  // const street = props.data.address.street;
  // const city = props.data.address.city;
  // const state = props.data.address.state;
  // const zip = props.data.address.zip;
  // const phone = props.data.phone;
  // const message = props.data.contactmessage;

  const phone = "phone";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (data) => {
    axios
      .post(
        "https://uddjfsq3wapv54mq32zyp4xawe0xrkmx.lambda-url.us-east-2.on.aws/",
        data
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject *</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    name="message"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && (
                    <p style={{ color: "red" }}>This field is required</p>
                  )}
                </div>

                <div>
                  <input className="submit" type="submit" />
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>

            <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="./">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
}

export default Contact;
