import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Health = () => {
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["healthDashboard"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          "/healthservice/dashboard",

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data.healthservice[0]);
        return res.data.healthservice[0];
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  });
  return (
    <div className="flex w-full justify-center">
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 object-contain">
          <img
            src="https://img.freepik.com/premium-photo/caregiver-conversation-elderly-woman-laughing-funny-joke-senior-care-humour-health-service-comedy-retirement-home-healthcare-comic-nurse-talking-relax-patient-laugh-bond_590464-224659.jpg"
            alt="Shoes"
            className="rounded-xl h-80 object-contain"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>Name {data.name}</p>
          <p>{data.email}</p>
          <p>{data.contactNo}</p>
          <p>{data.regionalLocation}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
    // <div className="flex w-full justify-center">

    //   <div className="flex flex-col">
    //     <p>Name {data.name}</p>
    //     <p>{data.email}</p>
    //     <p>{data.contactNo}</p>
    //     <p>{data.regionalLocation}</p>
    //     <p>{data.description}</p>
    //   </div>
    // </div>
  );
};

export default Health;
