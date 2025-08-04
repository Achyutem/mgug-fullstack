import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeMeta } from "@/utils/routeMeta";
import { RingLoader } from "react-spinners";

const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <RingLoader color={"#f97316"} size={100} />
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {routeMeta.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}
