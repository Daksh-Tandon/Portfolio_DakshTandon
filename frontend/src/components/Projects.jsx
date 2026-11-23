// import React, { useEffect, useState } from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const resp = await fetch(
//           "https://api.github.com/users/Daksh-Tandon/repos"
//         );
//         const result = await resp.json();
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching repos:", error);
//       }
//     };

//     fetchRepos();
//   }, []);

//   return (
//     <div style={{display:"grid",backgroundColor:"azure"}}>
//       {data.map((repo) => (
//         <ProjectCard key={repo.id} repo={repo} />
//       ))}
//     </div>
  );
// };


// export default Projects;

import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const resp = await fetch(
          "https://api.github.com/users/Daksh-Tandon/repos?sort=updated&per_page=100"
        );
        const result = await resp.json();
        
        const allowed = ["JobTracker", "Smart-Education-Mentor1", "Placement-Preparation_App", "Recipe-Finder"];
        const filtered = result.filter((repo) => 
          allowed.includes(repo.name) || !repo.fork
        );

        setData(filtered.slice(0, 6));
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading projects...</p>;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      {data.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Projects;
