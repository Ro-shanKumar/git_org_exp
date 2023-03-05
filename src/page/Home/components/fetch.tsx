import React from "react";
import {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
const Fetch = () => {
  const [data, setData] = useState([]);
  const {org,repo, old} = useParams();
    async function fetchData() {
        const response = await fetch(
        'https://api.github.com/repos/'+org+'/'+repo+'/forks?sort=oldest'
      );
      const data = await response.json();
      console.log(data);
      
      setData(data);
    }
    fetchData();

  return(
  <div className = "px-5 ">
    <h1 className = " text-center" style={{color:"#2B3467"}}>{org?.toUpperCase()}</h1>
    <ol>
      {data &&
        data.slice(0, Number(old)).map((fork:any) => (
          <li>
          <div key={fork.id}>
            <a href={fork.owner.url}>{fork.owner.login}</a>
          </div>
          </li>
        ))}
    </ol>
    </div>
);};
export default Fetch;