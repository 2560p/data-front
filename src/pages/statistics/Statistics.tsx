import './Statistics.css';
import NavBar from "../../components/NavBar";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StatisticsPage = () => {
  const [mostViewData, setMostViewData] = useState([]);
  const [leastViewedData, setLeastViewedData] = useState([]);
  const [mostLikedData, setMostLikedData] = useState([]);
  const [leastLikedData, setLeastLikedData] = useState([]);

  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  async function getStats() {
    try {
      const response = await fetch('http://localhost:8080/stats/mostViewed', {
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
      let status = await getStats();

      if (status) {
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
            //window.location.reload();
          })
          .catch(error => {
            console.log('Error:', error); // Log the error
            navigate('/');
          });

        fetch('http://localhost:8080/stats/mostViewed', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setMostViewData(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        fetch('http://localhost:8080/stats/leastViewed', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setLeastViewedData(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        fetch('http://localhost:8080/stats/mostLiked', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setMostLikedData(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
          
        fetch('http://localhost:8080/stats/leastLiked', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(response => response.json())
          .then(data => {
            setLeastLikedData(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    }

    getApiData();
  }, []);

  return (
    <div className="media-statistics-container">
      <div className="grid-container">
        <NavBar />
        <h1>Statistics</h1>
        
        <div className="left-section">
        <h2>Most Viewed Movies</h2>
          <ul>
          {mostViewData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Most Liked Movies</h2>
          <ul>
            {mostLikedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div className="right-section">
          <h2>Least Liked Movies</h2>
          <ul>
            {leastLikedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>Least Viewed Movies</h2>
          <ul>
            {leastViewedData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
