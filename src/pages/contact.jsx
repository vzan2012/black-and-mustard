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
  const initialFormDetails = {
    contactName: null,
    emailAddress: null,
    message: null,
  };

  const initialErrorData = {
    status: false,
    message: null,
  };

  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [errorData, setErrorData] = useState(initialErrorData);
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const contactNameRef = useRef();
  const emailAddressRef = useRef();
  const messageRef = useRef();

  // Form Field Validator
  const fieldValidator = (field, text) => {
    if (text.length <= 5 && field !== "Email") {
      setErrorData({
        status: true,
        message: `${field} - Field should have characters greater than 6`,
      });
      return false;
    }

    if (field === "Email") {
      const status = text.length !== 0 ? true : false;
      if (!status) {
        setErrorData({
          status: true,
          message: `${field} - Field cannot be empty`,
        });
      }
      return status;
    }

    return true;
  };

  // Form Handler
  const contactFormHandler = (e) => {
    e.preventDefault();

    const contactName = contactNameRef.current.value;
    const emailAddress = emailAddressRef.current.value;
    const message = messageRef.current.value;

    if (
      fieldValidator("Name", contactName) &&
      fieldValidator("Email", emailAddress) &&
      fieldValidator("Message", message)
    ) {
      setErrorData({
        status: false,
        message: null,
      });

      setFormDetails((prevState) => ({
        ...prevState,
        contactName,
        emailAddress,
        message,
      }));

      setFormSubmitStatus(true);
    }
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
                  <TextField
                    spanLabel="Name"
                    type="text"
                    ref={contactNameRef}
                  />
                </p>
                <p>
                  <TextField
                    spanLabel="Email Address"
                    type="email"
                    ref={emailAddressRef}
                  />
                </p>
                <p>
                  <TextArea
                    rows="8"
                    cols="50"
                    name="message"
                    spanLabel="Message"
                    ref={messageRef}
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

                {errorData.status ? (
                  <p className="errorText">{errorData.message}</p>
                ) : undefined}
                {formSubmitStatus && (
                  <p className="success">Thank you we will contact you soon</p>
                )}
              </div>
            </form>
          </Block>
        </ContentLayout>
        {/* SideBar Section  */}
        <SideBarLayout>
          <LatestNews />
        </SideBarLayout>
      </PageContent>
    </CommonLayout>
  );
};

export default Contact;
