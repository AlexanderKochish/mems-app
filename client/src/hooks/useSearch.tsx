import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useDebounce } from "./useDebounce";

const useSearch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [memId, setMemId] = useState(searchParams.get("id") || "");
  const debounceValue = useDebounce({ value: search, delay: 1000 });

  useEffect(() => {
    const newParams = new URLSearchParams();

    if (debounceValue) {
      newParams.set("search", debounceValue);
    }

    if (memId) {
      newParams.set("id", memId);
    }

    navigate(`?${newParams.toString()}`);
  }, [debounceValue, navigate, memId]);

  return {
    debounceValue,
    search,
    setSearch,
    setMemId,
    memId,
  };
};

export default useSearch;
