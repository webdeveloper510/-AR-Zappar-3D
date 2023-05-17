import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FirstTab from "./firsttTab";
import SecondTab from "./secondTab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaUser, FaCog, FaEnvelope } from 'react-icons/fa';
import { SiBoost } from 'react-icons/si';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


const MainTab = () => {
    return (
        <>
            <section class="open-designer-tab-section">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" class="custom-tabs-section">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column custom-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg><p>Untitle Project</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">  <svg fill="#3276c3" width="25" height="25" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                          <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                    </svg><p>Untitle Project</p><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <FirstTab />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <SecondTab />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>




                {/* 
                <Tabs
                    defaultActiveKey="UntitledProject"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="UntitledProject"  title={<><BsLink45Deg /> UntitledProject</>}>
                        <FirstTab />
                    </Tab>
                    <Tab eventKey="profile" title={<><SiBoost/> Profile </>}>
                        <SecondTab />
                    </Tab>

                </Tabs> */}
            </section>
        </>
    )

}

export default MainTab;