/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const JSONData = require('./src/content/projdata.json');
const template = require.resolve('./src/templates/projinfopage');

exports.createPages=({actions:{createPage}})=>{
    JSONData.forEach(project => {
        createPage({
            path:`/projects/${project.slug}/`,
            component: template,
            context:{
                name:project.name,
                year:project.year,
                tech:project.tech,
                link:project.link,
                demo:project.demo,
                image:project.image,
                description:project.description,
                duties:project.duties,
                devtime: project.devtime,
                role:project.role,
                hackathon:project.hackathon,
                git:project.git,
            }
    });
    })
}   
