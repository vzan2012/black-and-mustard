import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import CommonLayout from "../components/Layouts/CommonLayout";
import PageContent from "../components/UI/PageContent";
import ContentLayout from "../components/Layouts/ContentLayout";
import Block from "../components/UI/Block";
import Button from "../components/UI/Button";
import Select from "../components/UI/Select";
import TextField from "../components/UI/TextField";
import TextArea from "../components/UI/TextArea";

import SideBarLayout from "../components/Layouts/SideBarLayout";
import LatestNews from "../components/LatestNews/LatestNews";

const Examples = () => {
  const allFilesList = graphql`
    query AllFile {
      allFile {
        nodes {
          id
          name
          relativePath
        }
      }
    }
  `;

  return (
    <CommonLayout>
      <PageContent>
        <ContentLayout>
          {/* <Block>{filesData}</Block> */}
          <Block>
            <h1>Examples</h1>
            <p>
              This page contains examples of all the styled elements available
              as part of this design. Use this page for reference, whilst you
              build your website.
            </p>
            <h2>Headings</h2>
            <p>These are the different heading formats:</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <h2>Text</h2>
            <p>
              The following examples show how the text (within
              '&lt;p&gt;&lt;/p&gt;' tags) will appear:
            </p>
            <p>
              <strong>This is an example of bold text</strong>
            </p>
            <p>
              <i>This is an example of italic text</i>
            </p>
            <p>
              <a href="#">This is a hyperlink</a>
            </p>
            <h2>Lists</h2>
            <p>This is an unordered list:</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
            <p>This is an ordered list:</p>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ol>
            <h2>Images</h2>
            <p>
              images can be placed on the left, in the center or on the right:
            </p>
            <span className="left">
              <img src="/graphic.png" alt="example graphic" />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
            <span className="center">
              <img src="/graphic.png" alt="example graphic" />
            </span>
            <span className="right">
              <img src="/graphic.png" alt="example graphic" />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h2>Tables</h2>
            <p>
              Tables should be used to display data and not used for laying out
              your website:
            </p>
            <table style={{ width: "100%", borderSpacing: 0 }}>
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Item 1</td>
                  <td>Description of Item 1</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Description of Item 2</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Description of Item 3</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Description of Item 4</td>
                </tr>
              </tbody>
            </table>
            <h2>Form Elements</h2>
            <form action="#" method="post">
              <div className="form_settings">
                <p>
                  <TextField
                    name="name"
                    value=""
                    spanLabel="Form field example"
                  />
                </p>
                <p>
                  <TextArea
                    rows="8"
                    cols="50"
                    name="name"
                    spanLabel="Textarea example"
                  ></TextArea>
                </p>
                <p>
                  <span>Checkbox example</span>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="name"
                    value=""
                  />
                </p>
                <p>
                  <Select
                    id="id"
                    name="name"
                    items={["Example 1", "Example 2"]}
                    spanLabel="Dropdown list example"
                  />
                </p>
                <p style={{ paddingTop: "15px" }}>
                  <span>&nbsp;</span>
                  <Button
                    className="submit"
                    type="button"
                    name="name"
                    value="button"
                  />
                </p>
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

// StaticQuery Component
// const AllFiles = (props) => (
//   <StaticQuery
//     query={graphql`
//       query AllFile {
//         allFile {
//           nodes {
//             id
//             name
//             relativePath
//           }
//         }
//       }
//     `}
//     render={(files) => console.log("files")}
//   />
// );

export default Examples;
