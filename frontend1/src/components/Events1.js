
import React, { useState, useEffect } from "react";

function Events1() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //event
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/users/${category}`
//       );
//       const jsonData = await response.json();
//       setEventData(jsonData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${category}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(data.map((e) => e.category));

  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <select value={category} onChange={handleSelectChange}>
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
        <option value="kick-boxing">Kick-boxing</option>
      </select>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.category}</p>
            <p>{item.description}</p>
            {/* Add more properties as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events1;




//   const fetchItems = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3001/users`);
//       const data = await res.json();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching:", error);
//     }
//   };

// const filtered = eventData.filter(item => item.category === category)
// setEventData(filtered)


//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/users/${category}`)
//       .then((res) => {
//         setEventData(res.data);
//     })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [category]);


 // let updated = [];
    // for (let i = 0; i < eventData.length; i++) {
    //   if (eventData[i].category === category) {
    //     updated.push(eventData[i]);
    //   }
    // }
    // setEventData(updated);
    // const filtered = eventData.filter(item => item.category === category)
    // setEventData(filtered)
    // console.log(updated);


    // const abc=eventData.find(x=>x.category===category)
    // console.log(abc);
    // if(abc && isActive){
    //     setShow(true)
    //     setSearch({ filter: "active" });
    // }
    // else{
    //     setShow(false)
    //     alert('no data bro')
    // }
    // e.preventDefault()


    
//   const isTennis = searchParams.get("filter") === "tennis";
//   const isVolleyball = searchParams.get("filter") === "volleyball";

/*
{ {show ? (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{category}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ) : (
        <h1>No data</h1>
      )} }*/
