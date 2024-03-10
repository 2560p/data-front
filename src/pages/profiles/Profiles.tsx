import "./Profiles.css";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Users = () => {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  async function getProfiles() {
    try {
      const response = await fetch('http://localhost:8080/profiles', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        setApiData(await response.json());
        return true;
      }

      if (response.status === 401 || response.status === 403) {
        return false;
      }

      return false;

    } catch (e) {
      console.error(e);
      navigate('/');
    }
  }

  useEffect(() => {
    const getApiData = async () => { 
      let status = await getProfiles();

      if (!status) {
        let refreshToken = localStorage.getItem('refresh_token')

        let data = {
          refresh_token: refreshToken
        };
        
        let requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };

        fetch('http://localhost:8080/auth/admin/refresh', requestOptions)
          .then(response => {
            if (response.status === 401) { 
              navigate('/');
              return;
            }
            return response.json();
          })
          .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('refresh_token', data.refresh_token);
            window.location.reload();
          })
          .catch(() => {
            navigate('/');
          });
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
            {
            apiData.length > 0 ? 
            (<div className="userList">
                {apiData.map((profile, index) => (
                <div key={index} className="user">
                    <p>Profile name: {profile.name}</p>
                </div>
              )
            )}
              
          </div>) :
            (<div className="userList"><p>no data!</p></div>)
          }
        </div>
    );
};

export default Users;
