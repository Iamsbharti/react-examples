import { useState, useEffect } from "react";

function FetchFunctional(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(data => setData(data));
    setLoading(false);
  }, []);
  return props.render({ data: data, loading: loading });
}
export default FetchFunctional;
