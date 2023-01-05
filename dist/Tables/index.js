"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _antd = require("antd");
require("./style.css");
var Tables = function Tables(_ref) {
  var datas = _ref.datas,
    columns = _ref.columns;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    filteredDataSource = _useState4[0],
    setFilteredDataSource = _useState4[1];

  // Update dataSource and filteredDataSource when datas changes
  (0, _react.useEffect)(function () {
    setDataSource(datas);
    setFilteredDataSource(datas);
  }, [datas]);

  // Filter dataSource and update filteredDataSource based on search value
  var handleSearch = function handleSearch(value) {
    var dataSourceFilter = dataSource.filter(function (val) {
      return columns.map(function (column) {
        return val[column.dataIndex].toLowerCase().includes(value.toLowerCase());
      }).includes(true);
    });
    setFilteredDataSource(dataSourceFilter);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tables"
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Search, {
    placeholder: "search",
    onSearch: function onSearch(value) {
      handleSearch(value);
    },
    onChange: function onChange(e) {
      handleSearch(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Table, {
    rowKey: function rowKey(record) {
      return record.id;
    },
    columns: columns,
    dataSource: filteredDataSource,
    pagination: {
      showSizeChanger: true,
      pageSizeOptions: [10, 25, 50, 100],
      defaultCurrent: 1,
      total: filteredDataSource.length
    }
  }));
};

// Define PropTypes for Tables component
var _default = Tables;
exports.default = _default;