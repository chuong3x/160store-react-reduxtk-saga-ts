import { useAppSelector } from "app/hooks";
import StoreChain from "features/location/components/StoreChain";
import { selectLocations } from "features/location/locationSlice";

const StoresPage = () => {
  const locations = useAppSelector(selectLocations);
  return <StoreChain locations={locations} />;
};

export default StoresPage;
