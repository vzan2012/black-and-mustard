import * as React from "react";
import CommonLayout from "../components/Layouts/CommonLayout";
import PageContent from "../components/UI/PageContent";
import ContentLayout from "../components/Layouts/ContentLayout";
import Block from "../components/UI/Block";
import { Link, graphql } from "gatsby";

const Home = (props) => {
  const { title, description } = props.data.site.siteMetaData;
  return (
    <CommonLayout>
      <PageContent>
        <ContentLayout>
          <Block>
            <h1>Welcome to the black and mustard template</h1>
            <p>
              This is a Gatsby template is written entirely in{" "}
              <strong>HTML5</strong> and <strong>CSS</strong>
            </p>
            <p>
              This template is a fully functional page website, with an{" "}
              <a href="examples.html">examples</a>{" "}
              <Link to="/examples">examples</Link> page that gives examples of
              all the styles available with this design.
            </p>
            <h2>Browser Compatibility</h2>
            <p>This template has been tested in the following browsers:</p>
            <ul>
              <li>Internet Explorer</li>
              <li>FireFox</li>
              <li>Google Chrome</li>
            </ul>
          </Block>
        </ContentLayout>
      </PageContent>
    </CommonLayout>
  );
};

export const query = graphql`
  query GetSiteMetaData {
    site {
      siteMetaData {
        title
        description
        copyright
      }
    }
  }
`;

export default Home;
