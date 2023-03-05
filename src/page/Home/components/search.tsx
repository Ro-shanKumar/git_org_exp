import React from "react";
import {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
const SearchBox = () => {
  const [organisation, setorganisation] = useState("");
  const [nTopRepo, setnTopRepo] = useState("");
  const [oldestfork, setoldestFork] = useState("");
  const [data, setData] = useState([]);
  const trim = (s: string) => {
		if (s.length < 100) return s;
		return s.slice(0, 100) + '...';
	};
  let handleClick = async (e:any) => {
    e.preventDefault();
    if (!organisation) return;
    if(!nTopRepo){setnTopRepo("10");}

    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/search/repositories?q='+organisation+'&sort=forks&per_page='+nTopRepo+'&page=1'
      );
      const data = await response.json();
      console.log(data);
      
      setData(data.items);
    }
    fetchData();
  };
  let handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!organisation) return;
    if(!nTopRepo){setnTopRepo("10");}

    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/search/repositories?q='+organisation+'&sort=forks&per_page='+nTopRepo+'&page=1'
      );
      const data = await response.json();
      console.log(data);
      
      setData(data.items);
    }
    fetchData();
  };

  return(
  <div>
<form className="form form-main" onSubmit={handleSubmit}>
            <h1 className="form-head text-center my-5">GitHub Organizations Explorer</h1>
            <Row>

            <Col md={4} className = "conatiner text-center">
                <div><label className="form-label" >Organisation</label></div>
                <div><input type="text" value = {organisation} className ="form-input" onChange={(e) => setorganisation(e.target.value)} /></div>
            </Col>
            <Col md={4} className = "conatiner text-center">
                <div><label className="form-label" >N (Top Repos)</label></div>
                <div><input type="text" value = {nTopRepo} className = "form-content" onChange={(e) => setnTopRepo(e.target.value) } /></div>
            </Col>
            <Col md={4} className = "conatiner text-center">
                <div><label className="form-label" >M (Oldest Forks)</label></div>
                <div><input type="text" value = {oldestfork} className = "form-input" onChange={(e) => setoldestFork(e.target.value)}/></div>
            </Col>
            <Col md={4} className = "conatiner text-center">
            </Col>
            <Col md={4}  className = "conatiner text-center">
            <div className ="center" style={{ display: 'flex', marginTop:"5%", marginBottom:"5%", marginLeft: '40%', width:"20%" }}>
				    <button type="submit" className='form-button btn btn-primary' >
					  Fetch
				    </button >
			      </div>
            </Col>
            <Col md={4} className = "conatiner text-center">
            </Col>
            </Row>

</form>
<Row className = 'my-5' style={{ marginLeft:"5%"}}>
      {data &&
        data.map((fork :any,index) => (
          <Col md={4} sm={12} className = "my-3" style={{alignContent:"center"}}>

          <div key = {fork.id} className="card" style={{width: "18rem",}}>
            <img src={fork.owner.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{index+1}. {fork.name}</h5>
            <p className="card-text">{trim(fork.description)}</p>
            <a href={fork.html_url}> {fork.full_name}</a>
            <h5>Forks: {fork.forks_count}</h5>
            <br />
            <a className="btn btn-primary my-1" href={'/'+organisation+'/'+fork.name+'/'+oldestfork} target="_blank">View</a>
            </div>
          </div>
          </Col>
        ))}
</Row>
    </div>
);};
export default SearchBox;
