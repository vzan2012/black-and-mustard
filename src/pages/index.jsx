import * as React from "react";
import CommonLayout from "../components/Layouts/CommonLayout";
import ContentLayout from "../components/Layouts/ContentLayout";
import SideBarLayout from "../components/Layouts/SideBarLayout";
import PageContent from "../components/UI/PageContent";

import { Link, graphql } from "gatsby";
import LatestNews from "../components/LatestNews/LatestNews";
import LinkItem from "../components/LinkList/LinkItem/LinkItem";
import LinkList from "../components/LinkList/LinkList";
import Block from "../components/UI/Block";

const Home = (props) => {
  const { title, description } = props.data.site.siteMetadata;

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
        <SideBarLayout>
          <LatestNews />
          <LinkList title="Useful Links">
            <LinkItem id="1" title="Link 1" url="#" />
            <LinkItem id="2" title="Link 2" url="#" />
            <LinkItem id="3" title="Link 3" url="#" />
            <LinkItem id="4" title="Link 4" url="#" />
          </LinkList>
        </SideBarLayout>
      </PageContent>
    </CommonLayout>
  );
};

export const query = graphql`
  query GetSiteMetaData {
    site {
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`;

export default Home;
