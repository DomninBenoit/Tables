import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import PropTypes from "prop-types";
import "./style.scss";

const Tables = ({ datas, columns }) => {
  const [dataSource, setDataSource] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  // Update dataSource and filteredDataSource when datas changes
  useEffect(() => {
    setDataSource(datas);
    setFilteredDataSource(datas);
  }, [datas]);

  // Filter dataSource and update filteredDataSource based on search value
  const handleSearch = (value) => {
    const dataSourceFilter = dataSource.filter((val) =>
      columns
        .map((column) =>
          val[column.dataIndex].toLowerCase().includes(value.toLowerCase())
        )
        .includes(true)
    );
    setFilteredDataSource(dataSourceFilter);
  };

  return (
    <div className="tables">
      {/* Search input that triggers handleSearch on change or search button click */}
      <Input.Search
        placeholder="search"
        onSearch={(value) => {
          handleSearch(value);
        }}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      {/* Table component with pagination options and dataSource as filteredDataSource */}
      <Table
        columns={columns}
        dataSource={filteredDataSource}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: [10, 25, 50, 100],
          defaultCurrent: 1,
          total: filteredDataSource.length,
        }}
      ></Table>
    </div>
  );
};

// Define PropTypes for Tables component
Tables.propTypes = {
  // Array of data to be displayed in the table
  datas: PropTypes.array.isRequired,
  // Array of objects defining the table columns and their corresponding data
  columns: PropTypes.array.isRequired,
};

export default Tables;
