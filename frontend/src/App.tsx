import { Routes, Route } from "react-router-dom";
import { routeMeta } from "@/utils/routeMeta";

export default function App() {
  return (
    <Routes>
      {routeMeta.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
