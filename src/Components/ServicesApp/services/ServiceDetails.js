import React from "react";
import { useParams } from "react-router-dom";
import serviceData from "./servicesData";

function ServiceDetails(props) {
  const { serviceId } = useParams();
  const thisService = serviceData.find(service => service._id === serviceId);
  return (
    <div>
      <h1>Service Details</h1>
      {thisService.name} - ${thisService.price}
    </div>
  );
}
export default ServiceDetails;
