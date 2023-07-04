import React, { useRef, useState } from "react";
import LatestNews from "../components/LatestNews/LatestNews";
import CommonLayout from "../components/Layouts/CommonLayout";
import ContentLayout from "../components/Layouts/ContentLayout";
import SideBarLayout from "../components/Layouts/SideBarLayout";
import Block from "../components/UI/Block";
import Button from "../components/UI/Button";
import PageContent from "../components/UI/PageContent";
import TextArea from "../components/UI/TextArea";
import TextField from "../components/UI/TextField";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const contactNameRef = useRef();
  const emailAddressRef = useRef();
  const messageRef = useRef();

  const contactFormHandler = (e) => {
    e.preventDefault();

    console.log("test");
    console.log(contactNameRef.current);
  };

  return (
    <CommonLayout>
      <PageContent>
        <ContentLayout>
          <Block>
            <h1>Contact Us</h1>
            <p>
              Below is an example of how a contact form might look with this
              template:
            </p>
            <form onSubmit={contactFormHandler}>
              <div className="form_settings">
                <p>
                  {/* <TextField
                    spanLabel="Name"
                    type="text"
                    ref={contactNameRef}
                  /> */}

                  <input type="text" ref={contactNameRef} />
                </p>
                <p>
                  <TextField spanLabel="Email Address" type="email" />
                </p>
                <p>
                  <TextArea
                    rows="8"
                    cols="50"
                    name="message"
                    spanLabel="Message"
                  ></TextArea>
                </p>
                <p style={{ paddingTop: "15px" }}>
                  <span>&nbsp;</span>
                  <Button
                    className="submit"
                    type="submit"
                    name="contact_submitted"
                    value="submit"
                  />
                </p>
              </div>
            </form>
          </Block>
        </ContentLayout>
        <SideBarLayout>
          <LatestNews />
        </SideBarLayout>
      </PageContent>
    </CommonLayout>
  );
};

export default Contact;
