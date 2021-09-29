import React, { useState} from 'react'
import { Modal } from '@material-ui/core'
import './Holiday.css'

function Holiday() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <Modal
                open={modal}
            >
                <div className="modal-container" >
                <div class="modal">
                    <div class="title">
                        <h2>Add new holiday</h2>
                        <img src={require("./Images/Layer 2 (4).svg").default} onClick={e => setModal(false)} alt="" />
                    </div>
                    <div class="content">
                        <div class="holiday-declaration">
                            <div>
                                <label for="name">Name</label>
                                <input type="text" placeholder="Holiday Name" />
                            </div>
                            <div>
                                <label for="date">Date</label>
                                <input type="date" />
                            </div>
                            <div>
                                <label for="type">Type</label>
                                <select name="holiday" id="holiday">
                                    <option value="optional">Optional</option>
                                    <option value="Regular">Regular</option>
                                </select>
                            </div>
                        </div>
                        <div class="upload-img">
                            <p>Download Sample in <span>.csv format</span> file to ensure that you have the correct file ready to output</p>
                            <div class="image-box">
                                <img src={require("./Images/Layer 2 (3).svg").default} alt="" />
                                <p>Drag and drop CSV file or Click here to upload</p>
                            </div>
                            <a href="#">Save</a>
                        </div>
                    </div>
                </div>
                </div>
            </Modal>
            <div className="container">
                <div className="outr-nav">
                    <img src={require("./Images/Group 646.svg").default} className="tl" alt="" />
                    <div className="group">
                        <img src={require("./Images/Group 618.svg").default} alt=""/>
                        <img src={require("./Images/Group 620.svg").default} alt=""/>
                        <img src={require("./Images/Group 622.svg").default} alt=""/>
                        <img src={require("./Images/Path 1974.svg").default} alt=""/>
                    </div>
                </div>
                <div className="vertical-nav">
                    <div className="lt-nav">
                        <img src={require("./Images/Settings.svg").default} alt="" />
                        <h3>Settings</h3>
                    </div>
                    <div className="rt-nav">
                        <img src={require("./Images/Layer 2.svg").default} alt=""/>
                        <img src={require("./Images/Layer 2 (1).svg").default} alt="" />
                        <img src={require("./Images/Layer 2 (2).svg").default} alt="" />
                        <p>50,000</p>
                        <img src={require("./Images/Group 815.svg").default} alt="" />
                    </div>
                </div>
            </div>
            <div className="inner-container">
                <div className="horizontal-nav">
                    <ul>
                        <li>General</li>
                        <li className="selected">Holiday</li>
                        <li>Leave</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="holiday">
                        <h1>Holiday</h1>
                        <date>
                            <img src={require("./Images/Group 856.svg").default} alt="" />
                            <p className="year">Year</p>
                            <p>2021</p>
                        </date>
                    </div>
                    <p className="subHeading">Assign the holidays you want to give your employees for the year</p>
                    <div className="holiday-lists">
                        <div className="head-list">
                            <h3>List</h3>
                                <p className='span' onClick={e => setModal(true)}>+ Add New</p>
                                <p>Filter</p>
                                <p>All</p>
                        </div>
                        <div className="dummy">
                            <p>Name</p>
                            <p>Type</p>
                            <p>Date</p>
                        </div>
                        <div className="list">
                            <h4>Rath Yatra</h4>
                            <p className="year">Optional</p>
                            <p >12 july, 2021</p>
                            <div className="icons">
                                <i className="fas fa-pencil-alt"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div className="list">
                            <h4>Rath Yatra</h4>
                            <p className="year">Optional</p>
                            <p >12 july, 2021</p>
                            <div className="icons">
                                <i className="fas fa-pencil-alt"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div className="list">
                            <h4>Rath Yatra</h4>
                            <p className="year">Optional</p>
                            <p >12 july, 2021</p>
                            <div className="icons">
                                <i className="fas fa-pencil-alt"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                        <div className="list">
                            <h4>Rath Yatra</h4>
                            <p className="year">Optional</p>
                            <p >12 july, 2021</p>
                            <div className="icons">
                                <i className="fas fa-pencil-alt"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div><div className="list">
                            <h4>Rath Yatra</h4>
                            <p className="year">Optional</p>
                            <p >12 july, 2021</p>
                            <div className="icons">
                                <i className="fas fa-pencil-alt"></i>
                                <i className="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Holiday
