import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDebounce } from "./useDebounce";

const useSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const debounceValue = useDebounce({ value: search, delay: 1000 });

  useEffect(() => {
    const newParams = new URLSearchParams();

    if (debounceValue) {
      newParams.set("search", debounceValue);
    }

    navigate(`?${newParams.toString()}`);
  }, [debounceValue, navigate]);

  return {
    debounceValue,
    search,
    setSearch,
  };
};

export default useSearch;
