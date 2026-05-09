const ProjectCard = ({ repo }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px" }}>
      
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" >
        View Repo
      </a> 
    </div>
  );
};

export default ProjectCard;
