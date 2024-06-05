
import useNavigatorOnline from "use-navigator-online";
import { useEffect } from 'react';
export function Online (){
 const { isOnline, isOffline, backOnline, backOffline } = useNavigatorOnline();

   useEffect(() => {
    // Do something when network is back online.
  }, [backOnline]);

  useEffect(() => {
    // Do something when network goes offline.
  }, [backOffline]);



    return(
    <p>
      {isOnline ? "Online" : "Not online"}{" - "}
      {isOffline ? "Offline" : "Not offline"}
    </p>
  );
}
