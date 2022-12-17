import { Routes, Route } from "react-router-dom";
import { Dashbord } from "./Dashbord";
export const Master = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Dashbord />} />
      </Routes>
    </>
  );
};
