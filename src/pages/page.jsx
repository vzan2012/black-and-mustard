import React from "react";
import CommonLayout from "../components/Layouts/CommonLayout";
import ContentLayout from "../components/Layouts/ContentLayout";
import Block from "../components/UI/Block";
import PageContent from "../components/UI/PageContent";
import { graphql } from "gatsby";

import SideBarLayout from "../components/Layouts/SideBarLayout";
import LatestNews from "../components/LatestNews/LatestNews";

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
