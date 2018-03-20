import React, { Component } from "react";
import { Link } from "react-router-dom";
class AccountSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { accountSummaryInfo } = this.props;

        console.log(accountSummaryInfo);
        return (
            <fieldset>
                <legend><h3 id="" data-name="">
                    Account summary
</h3>
                </legend>

                <div>
                    <ul className="table summary-table">
                        <li className="input input-label first">


                            <div className="table-label referer-label">
                                <label for="referer" title="Referer">
                                    Referer          </label>
                            </div>
                            <div className="star">&nbsp;</div>

                            <div className="table-value referer-value">
                                <span title="unknown" id="referer" name="referer" className=" label-field input">{accountSummaryInfo.referer}</span>


                            </div>

                            <div className="clear"></div>


                        </li>
                        <li className="input input-label">


                            <div className="table-label added-label">
                                <label for="added" title="Added">
                                    Added          </label>
                            </div>
                            <div className="star">&nbsp;</div>

                            <div className="table-value added-value">
                                <span title="unknown" id="added" name="added" className="label-field input">{accountSummaryInfo.added}</span>

                            </div>

                            <div className="clear"></div>


                        </li>
                        <li className="input input-label">


                            <div className="table-label last-login-label">
                                <label for="last-login" title="Last login">
                                    Last login          </label>
                            </div>
                            <div className="star">&nbsp;</div>

                            <div className="table-value last-login-value">
                                <span title="unknown" id="lastLogin" name="lastLogin" className="label-field input">{accountSummaryInfo.lastLogin}</span>

                            </div>

                            <div className="clear"></div>


                        </li>
                        <li className="input input-label">


                            <div className="table-label language-label">
                                <label for="language" title="Language">
                                    Language          </label>
                            </div>
                            <div className="star">&nbsp;</div>

                            <div className="table-value language-value">
                                <span title="unknown" id="language" name="language" className="label-field input">{accountSummaryInfo.language}</span>
                            </div>

                            <div className="clear"></div>


                        </li>
                        <li className="input input-label last">


                            <div className="table-label orders-count-label">
                                <label for="orders-count" title="Orders count">
                                    Orders count          </label>
                            </div>
                            <div className="star">&nbsp;</div>

                            <div className="table-value orders-count-value">
                                <span title="unknown" id="ordersCount" name="ordersCount" className="label-field input">{accountSummaryInfo.orderCount}</span>
                            </div>

                            <div className="clear"></div>


                        </li>
                    </ul>
                </div>

            </fieldset>
        );
    }
}

export default AccountSummary;
