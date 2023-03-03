import React, { useState } from "react";
import "./Body.css";
import { VideosItems } from "../videos/Videos";

const Body = () => {
  return (
    <main>
      <h1>Support Page</h1>
      <section className="banner">
        <div className="container">
          <h1>Videos</h1>
          <ul>
            <li>Home</li>
            <li>/</li>
            <li>All Videos</li>
          </ul>
        </div>
      </section>
      <p className="para">HELLO WELCOME TO OUR ECM REPAIRING COURSE !</p>
      <section className="videos">
        {VideosItems.map((item, index) => {
          return (
            <>
              <div className="card">
                <video src={item.url} controls></video>
                <p>{item.caption}</p>
              </div>
            </>
          );
        })}
      </section>
      <section className="newsletter">
        <div className="container_box">
          <form>
            <h1>Subscribe to our newsletter</h1>
            <input type="text" placeholder="Full Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </section>
      <section className="contact">
        <div className="box">
          <box-icon type="solid" name="phone" />
          +91-1234567890
        </div>
        <div className="box">
          <box-icon name="envelope"></box-icon>
          support@dynaptsolutions.com
        </div>
        <div className="box">
          <a
            href="https://api.whatsapp.com/send?phone=9810673241"
            className="contact__button"
          >
            <button>
              <box-icon type="logo" name="whatsapp" size="md"></box-icon>
              WhatsApp
            </button>
          </a>
        </div>
      </section>
      <div className="chat"></div>
    </main>
  );
};

export default Body;
