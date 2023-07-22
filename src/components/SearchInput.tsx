import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles";

export default function SearchInput({ handleChange }: any) {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search by name…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
        />
      </Search>
    </>
  );
}
