import React from "react";
import { Row, Col } from "react-bootstrap";

import SekolahD from "../../Asset/Images/Sekolah-Dasar.png"
import SekolahMP from "../../Asset/Images/logo_SMP.png"
import SekolahMA from '../../Asset/Images/LOGO-OSIS-SMA.png'
import University from '../../Asset/Images/logo_itb.png'
import './education.css';

const Education = () => {
  return (
    <div className="data-sekolah">
      <Row className="row-sekolah">
        <Col className="col-sekolah" md={{ span: 4, offset: 7 }}>
            <img className="image-edu" src={University}/>
          <p>University</p>
          <p>2014-2018</p>
        </Col>
      </Row>
      <Row className="row-sekolah">
        <Col className="col-sekolah" md={{ span: 4, offset: 5 }}>
        <img className="image-edu-a" src={SekolahMA}/>
          <p>SMA</p>
          <p>2011-2014</p>
        </Col>
      </Row>
      <Row className="row-sekolah">
        <Col className="col-sekolah" md={{ span: 4, offset: 3 }}>
        <img className="image-edu-a" src={SekolahMP}/>
          <p>SMP</p>
          <p>2008-2011</p>
        </Col>
      </Row>
      <Row className="row-sekolah">
        <Col className="col-sekolah" md={{ span: 4, offset: 1}}>
        <img className="image-edu" src={SekolahD}/>
          <p>SD</p>
          <p>2002-2008</p>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
