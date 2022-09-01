import React from "react";
import { Card, Col, Row, Tag } from "antd";
import tagColor from "../../../config/consts";

const MainDetails = ({ data }) => {
  return (
    <>
      <Row gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card>
            <Row className="customRow">
              <span className="text-dark">First name:</span>
              <span>{data?.name}</span>
            </Row>
            <Row className="customRow">
              <span className="text-dark">College id:</span>
              <span>{data?.collegeId}</span>
            </Row>
            <Row className="customRow">
              <span className="text-dark">Skills:</span>
              <span>
                {data?.skills?.split(",").map((prop) => {
                  const num =
                    prop.charCodeAt(0) + prop.charCodeAt(prop.length - 1);
                  return (
                    <Tag style={{ color: "black" }} color={tagColor[num % 11]}>
                      {prop}
                    </Tag>
                  );
                })}
              </span>
            </Row>
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card>
            <Row className="customRow">
              <span className="text-dark">Batch year:</span>
              <span>{data?.year_of_batch}</span>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default MainDetails;
