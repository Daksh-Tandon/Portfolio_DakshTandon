import React, { useEffect, useState } from 'react'
import "./Story.css"
import StoryCard from './StoryCard';

const Story = () => {
  const [count, setcount] = useState(3);
  const [content, setcontent] = useState(false);
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://portfolio-dakshtandon.onrender.com/content");
        const d = await response.json();
        setdata(d);
        console.log(d[0].id);
      } catch (err) {
        console.log(err);
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    if (count === 0) {
      setcontent(true);
      return;
    }

    const timer = setTimeout(() => {
      setcount(count-1);
    }, 1000);

  }, [count]);
  return (
    <div className="story">
      {!content ? (
        <h1>{count}</h1>
      ) : (
      <>
       <StoryCard data={data}/>

      </>
   
          

          
          
      
      )}
    </div>
  );
};

export default Story;