import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeMeta } from "@/utils/routeMeta";
import { RingLoader } from "react-spinners";

const LoadingFallback = () => (
  <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
    <RingLoader color={"#f97316"} size={100} />
    <p className="text-xl font-semibold text-orange-500">MGUG is loading...</p>
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
