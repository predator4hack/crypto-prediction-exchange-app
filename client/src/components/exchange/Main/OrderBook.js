import React from "react";
import "./Book.css";
import OrderCard from "./OrderCard";

const OrderBook = () => {
    return (
        <>
            <div className="book-container">
                <div className="book-title">
                    <h5 style={{ margin: "10px" }}>Order Book</h5>
                </div>
                <div className="book-table">
                    <table className="book-table">
                        <colgroup>
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                            <col
                                style={{
                                    width: "300px",
                                    minWidth: "auto",
                                    maxWidth: "auto",
                                }}
                            />
                        </colgroup>
                        <thead>
                            <th className="book-stickyTop">
                                <div className="book-heading">
                                    <div className="book-gbtfIe">
                                        <p className="book-hJMpdk">VOLUME</p>
                                    </div>
                                </div>
                            </th>
                            <th className="book-stickyTop">
                                <div className="book-pEXWP">
                                    <div className="book-gbtfIe">
                                        <p className="book-hJMpdk">BUY PRICE</p>
                                    </div>
                                </div>
                            </th>
                            <th className="book-stickyTop">
                                <div
                                    className="book-heading"
                                    style={{ justifyContent: "flex-start" }}
                                >
                                    <div className="book-gbtfIe">
                                        <p className="book-hJMpdk">
                                            SELL PRICE
                                        </p>
                                    </div>
                                </div>
                            </th>
                            <th className="book-stickyTop">
                                <div className="book-pEXWP">
                                    <div className="book-gbtfIe">
                                        <p className="book-hJMpdk">VOLUME</p>
                                    </div>
                                </div>
                            </th>
                        </thead>
                        <tbody>
                            <OrderCard />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OrderBook;
