import axios from "axios";
import React, { useEffect, useState } from "react";
import kickboxing from './Assets/kickboxing.jpg'
import athletics from './Assets/athletics2.jpg'
import badminton from './Assets/badminton1.jpg'
import marathon from './Assets/marathon.jpg'
import hockey from './Assets/hockey.jpg'
import football from './Assets/football.jpg'
import basketball from './Assets/basketball1.jpg'
import volleyball from './Assets/volleyball1.jpg'
import tennis from './Assets/tennis.jpg'
import cricket from './Assets/cricket.jpg'

export default function Events() {
  const [eventData, setEventData] = useState([]);
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([])
  const [categoryImage, setCategoryImage] = useState('')
  const [isImage, setIsImage] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/events/get')
      .then(res => setEventData(res.data))
      .catch(err => { console.log(err) })
  }, [])

  const changeCategory = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    const filtered = eventData.filter(x => x.category === selectedCategory)
    setFilteredData(filtered)
    setIsImage(true)
    switch (selectedCategory) {
      case 'cricket': setCategoryImage(cricket);
        break;
      case 'tennis': setCategoryImage(tennis);
        break;
      case 'volleyball': setCategoryImage(volleyball)
        break;
      case 'basketball': setCategoryImage(basketball)
        break;
      case 'football': setCategoryImage(football)
        break;
      case 'hockey': setCategoryImage(hockey)
        break;
      case 'marathon': setCategoryImage(marathon)
        break;
      case 'badminton': setCategoryImage(badminton)
        break;
      case 'athletics': setCategoryImage(athletics);
        break;
      case 'kickboxing': setCategoryImage(kickboxing);
        break;
      default: setCategoryImage('');
        break;
    }
  }
  console.log(categoryImage);
  console.log(eventData);
  return (

    <div className="event-div">
      <img className='event-img' src="https://th.bing.com/th/id/R.75b795b178d1cf243ee92d87c94fd31b?rik=ZCO7LXwlnigojQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fqveKAgO.jpg&ehk=diKyUtzC8mlDuSGocnBV4DzA2R0CJGKGA57TKoXMvhk%3d&risl=&pid=ImgRaw&r=0" />
      <div className="event-select">
        <label>Select Events: </label>
        <select value={category} onChange={changeCategory}>
          <option value="">Select an option</option>
          <option value="tennis">Tennis</option>
          <option value="volleyball">Volleyball</option>
          <option value="basketball">Basketball</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="hockey">Hockey</option>
          <option value="marathon">Marathon</option>
          <option value="badminton">Badminton</option>
          <option value="athletics">Athletics</option>
          <option value="kickboxing">Kick-boxing</option>
        </select>
      </div>

      <div className='cards d-flex m-5 event-data'>
        {filteredData.map((e) => (
          <div className="card event-cards" style={{ width: "20rem", height: "auto", marginBottom: "20px" }}>
            <img height='' src={categoryImage} className="card-img-top event-data-img" alt="..." />

            <div className="card-body" key={e.id}>
              <h5 className="card-title">{e.eventName}</h5>
              <p className="card-text">{e.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}