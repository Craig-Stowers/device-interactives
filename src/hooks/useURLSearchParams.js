import React, { useEffect, useState } from "react";

const getValue = (param) => {
   const query = new URLSearchParams(window.location.search);
   return query.get(param);
};

export default function useURLSearchParams(param) {
   const [value, setValue] = useState(getValue(param));

   useEffect(() => {
      // Handles URL change from browser navigation or manual change
      const handleLocationChange = () => {
         setValue(getValue(param));
      };

      window.addEventListener("popstate", handleLocationChange);
      window.addEventListener("load", handleLocationChange); // Handle initial load

      return () => {
         window.removeEventListener("popstate", handleLocationChange);
         window.removeEventListener("load", handleLocationChange);
      };
   }, [param]);
   return value;
}
