import { TestingRouter } from "../modules";
import { Routes, Route } from "react-router-dom";
export const Dashbord = () => {
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <h1>Dashbord</h1>
            </>
          }
        />
        <Route path={"/n"} element={<TestingRouter />} />
      </Routes>
    </>
  );
};
