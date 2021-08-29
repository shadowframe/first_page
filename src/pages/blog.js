import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts :)">
        <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
            <br></br>
            {node.mtime}
          </li>
        ))
      }
      </ul>
        </Layout>
  )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
                mtime(formatString: "DD/MM/YY")
            }
        }
    }
`

export default BlogPage
