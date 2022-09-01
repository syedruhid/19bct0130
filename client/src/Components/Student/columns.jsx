import React from "react";
import { Tag } from "antd";
import tagColor from "../../config/consts";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, row) => (
      <Link to={`student/${row._id}`}>{`${text} ${row.last_name}`}</Link>
    ),
  },
  {
    title: "Skills",
    dataIndex: "skills",
    render: (text) =>
      text.split(",").map((prop) => {
        const num = prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
        return (
          <Tag style={{ color: "black" }} color={tagColor[num % 11]}>
            {prop}
          </Tag>
        );
      }),
  },
  {
    title: "Year of batch",
    dataIndex: "year_of_batch",
  },
];

export default columns;
