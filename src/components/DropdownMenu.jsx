import React from "react";

function DropdownMenu({ label, options, selectedOption, onSelect }) {
   const handleSelect = (e) => {
      onSelect(e.target.value);
   };

   return (
      <div>
         <label>{label}</label>
         <select value={selectedOption} onChange={handleSelect}>
            {options.map((option, index) => (
               <option key={index} value={option.value} disabled={option.disabled}>
                  {option.value}
               </option>
            ))}
         </select>
      </div>
   );
}

export default DropdownMenu;
