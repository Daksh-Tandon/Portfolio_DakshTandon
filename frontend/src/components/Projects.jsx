 import React, { useEffect, useState } from "react";
 import ProjectCard from "./ProjectCard";

 const Projects = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
     const fetchRepos = async () => {
       try {
         const resp = await fetch(
           "https://api.github.com/users/Daksh-Tandon/repos"
         );
         const result = await resp.json();
         setData(result);
       } catch (error) {
         console.error("Error fetching repos:", error);
       }
     };

     fetchRepos();
   }, []);

   return (
     <div style={{display:"grid",backgroundColor:"azure"}}>
       {data.map((repo) => (
         <ProjectCard key={repo.id} repo={repo} />
       ))}
     </div>
  );
 };


 export default Projects;


