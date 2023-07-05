import { graphql } from "gatsby";
import React from "react";
import CommonLayout from "../components/Layouts/CommonLayout";
import ContentLayout from "../components/Layouts/ContentLayout";
import Block from "../components/UI/Block";
import PageContent from "../components/UI/PageContent";

import LatestNews from "../components/LatestNews/LatestNews";
import SideBarLayout from "../components/Layouts/SideBarLayout";
import LinkItem from "../components/LinkList/LinkItem/LinkItem";
import LinkList from "../components/LinkList/LinkList";

const Page = ({ data }) => {
  const pageData = data.markdownRemark.html;

  return (
    <CommonLayout>
      <PageContent>
        <ContentLayout>
          <Block>
            <div dangerouslySetInnerHTML={{ __html: pageData }} />
          </Block>
        </ContentLayout>
        {/* SideBar Section  */}
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

export const fileData = graphql`
  query PageMarkDown {
    markdownRemark(frontmatter: { title: { eq: "Page" } }) {
      html
    }
  }
`;

export default Page;
