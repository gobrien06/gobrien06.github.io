import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BlogCard from '../components/blogcard/blogcard';

const Blog = () => {
    const [items, setItems] = React.useState();

    const getData = () => {
        let items;
        const RSSFeed = "https://medium.com/feed/@gobrien06";
        const RSS2JSON = "https://api.rss2json.com/v1/api.json";
        const RSSData = {
            "params":{
                "rss_url":RSSFeed,
            }
        }
        axios.get(RSS2JSON, RSSData)
        .then((response)=>{
            setItems(response.data.items);
        })
        .catch((error)=>{
            console.log(error);
        })
        return items;
    }

  const addPosts = () =>{
    if(!items)
        return <p style={{
            textAlign:`left`,
            marginLeft:`4.3rem`,
            fontSize:`1rem`,
        }}
        >
        Looks like there's no posts! Please check again later.
        </p>

    return (items.map((element) => 
      <BlogCard image={element.thumbnail} title={element.title} tags={element.categories} date={element.pubDate} url={element.link}/>
     ))
  }

  React.useEffect(getData,[]);

  return(
      <Layout>
      <SEO title="Blog" />
      <div className="blog" style={{
        paddingTop:`10vh`,
        paddingBottom:`20vh`,
      }}>
      <h1>What I've Written.</h1>
        {addPosts()}
        </div>

      <section>
        <div className="wave wave1"/>
        <div className="wave wave2"/>
        <div className="wave wave3"/>
      </section>
    </Layout>
  )
}


export default Blog
