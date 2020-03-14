import React from "react";
import servicesData from "./servicesData";
import { Link } from "react-router-dom";

function ServiceList() {
  const services = servicesData.map(service => (
    <h2 key={service._id}>
      <Link to={`/services/${service._id}`}>{service.name}</Link> - $
      {service.price}
    </h2>
  ));
  return (
    <div>
      <h1>We offer</h1>
      {services}
    </div>
  );
}
export default ServiceList;
