import React from "react";
import { useParams, useHistory } from "react-router-dom";
import serviceData from "./servicesData";

function ServiceDetails(props) {
  const { serviceId } = useParams();
  const history = useHistory();
  const thisService = serviceData.find(service => service._id === serviceId);

  function handleClick() {
    setTimeout(() => {
      history.push("/services");
    }, 2000);
    history.replace("");
  }

  return (
    <div>
      <h1>Service Details</h1>
      {thisService.name} - ${thisService.price}
      <button onClick={handleClick}>Go back to services</button>
    </div>
  );
}
export default ServiceDetails;
