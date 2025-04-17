import { Route, Routes, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

import { getAllMemes } from "./api/api";
import { useDebounce } from "./hooks/useDebounce";
import { CustomSpinner } from "./components/spinner";
import { ErrorBoundary } from "./components/ErrorBoundary";

const TablePage = lazy(() => import("./pages/table"));
const ListPage = lazy(() => import("./pages/list"));

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const debouncedValue = useDebounce({
    value: searchParams.get("search") || "",
    delay: 500,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["memes", debouncedValue],
    queryFn: async () => await getAllMemes(debouncedValue),
  });

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <p>error: `${error.message}`</p>;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<CustomSpinner />}>
        <Routes>
          <Route element={<TablePage list={data} />} path="/" />
          <Route element={<ListPage list={data} />} path="/list" />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
