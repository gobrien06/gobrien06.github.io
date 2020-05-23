import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Blog = () => {

    const getData = () => {
        let items = [];
        const RSSFeed = "https://medium.com/feed/@gobrien06";
        const RSS2JSON = "https://api.rss2json.com/v1/api.json";
        const RSSData = {
            params:{
                "rss_url":RSSFeed,
            }
        }
        axios.get(RSS2JSON, RSSData)
        .then((response)=>{
            items.concat(response.items);
        })
        .catch((error)=>{
            console.log(error);
        })
        return items;
    }

  const addPosts = () =>{
    let items = getData();
    if(!items[0])
        return <p style={{
            textAlign:`left`,
            marginLeft:`4.3rem`,
            fontSize:`1rem`,
        }}
        >
        Looks like there's no posts! Please check again later.
        </p>
    items.map((element) => 
      <div/>
     )

      return items;
    }

  return(
      <Layout>
      <SEO title="Projects" />
      <div style={{
        paddingTop:`15vh`,
        paddingBottom:`5vh`,
        background:`white`,
        color:`black`,
      }}>
      <h1 style={{
            fontWeight:`500`,
            textAlign:`left`,
            marginLeft:`4.3rem`,
            fontSize:`3rem`,
        }}>What I've Written. <hr width="5%"/></h1>
        <br/><br/>
        {addPosts()}
        </div>
        
        <Particles style={{position:`fixed`, maxWidth:'85%', float:`left`,}}
      params={{
        "particles": {
          "number": {
              "value": 15
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
