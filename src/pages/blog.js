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
        paddingBottom:`5vh`,
        color:`black`,
      }}>
      <h1>What I've Written. <hr width="5%"/></h1>
        <br/>
        <div style={{overflowX:'scroll'}}>
        {addPosts()}
        </div>
        </div>
        
        <Particles style={{position:`absolute`, maxHeight:`15vh`, maxWidth:'85%', float:`left`,}}
      params={{
        "particles": {
          "number": {
              "value": 12 
          },
          "size": {
              "value": 2
          },
      },
        "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse",
              }
          }
          }
        }
        }
        />
    </Layout>
  )
}


export default Blog
