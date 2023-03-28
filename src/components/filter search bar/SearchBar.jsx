import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearchAlt } from "react-icons/bi";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="!w-full search-bar">
      <InputGroup className="!w-full  !rounded-0">
        <DropdownButton
          variant="outline-secondary"
          title="All Filters"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item
            className="hover:!text-primary dark:hover:!bg-primaryHover hover:!bg-primaryHover dark:bg-blackBg dark:!text-white"
            href="#"
          >
            Action
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!text-primary dark:hover:!bg-primaryHover hover:!bg-primaryHover dark:bg-blackBg dark:!text-white"
            href="#"
          >
            Another action
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!text-primary dark:hover:!bg-primaryHover hover:!bg-primaryHover dark:bg-blackBg dark:!text-white"
            href="#"
          >
            Something else here
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!text-primary dark:hover:!bg-primaryHover hover:!bg-primaryHover dark:bg-blackBg dark:!text-white"
            href="#"
          >
            Separated link
          </Dropdown.Item>
        </DropdownButton>
        <Form.Control
          placeholder="Search by Address / Txn Hash / Block / Token
"
          aria-label="Text input with dropdown button"
          className="!shadow-none  common-search-bar !border-primary dark:!bg-blackBg dark:!text-white"
        />
        <Button className="!bg-primary !border-primary hover:!border-primaryHover hover:!bg-primaryHover">
          <BiSearchAlt />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
