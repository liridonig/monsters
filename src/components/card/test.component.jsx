import React, { useState, useEffect } from "react";

function TestComp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost/armera/wp-json/wp/v2/posts"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
        {data ? (
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-lg-3">
                <h3>{item.id}</h3>
                <h4>{item.date}</h4>
                <h4>{item.title.rendered}</h4>
                <h4>{item.content.rendered}</h4>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
    </div>
  );
}

export default TestComp;
