import React, { useEffect, useRef, useState } from "react";

export function useDynamicSvgImport(svgPath) {
   const importedIconRef = useRef(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      setLoading(true);
      // Dynamically import the mentioned svg icon name in props
      const importSvg = async () => {
         // Please make sure all your svg icons are placed in the same directory
         // If we want that part to be configurable then instead of iconName we will send iconPath as prop
         try {
            importedIconRef.current = (await import(`../../assets/icons/${svgPath}.svg`)).ReactComponent; // svgr provides ReactComponent for given svg path
         } catch (err) {
            setError(err);
            console.error(err);
         } finally {
            setLoading(false);
         }
      };

      importSvg();
   }, [svgPath]);

   return { error, loading, SvgIcon: importedIconRef.current };
}
