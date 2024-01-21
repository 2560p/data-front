import "./Profiles.css";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getApiData = async () => { 
      try {
        const response = await fetch('http://localhost:8080/profiles', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          setApiData(await response.json());
        } else {
          localStorage.removeItem('token');
          navigate('/');
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
        localStorage.removeItem('token');
    }
  }
  getApiData()
  }, []);


    return (
        <div className="gridBody">
            
            <NavBar />
            <div className="header">
                <header>
                    <h1>Profiles</h1>
                </header>
            </div>
            <div className="userList">
                {apiData.map((user, index) => (
                <div key={index} className="user">
                    <p>Profile name: {user.profile_name}</p>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
