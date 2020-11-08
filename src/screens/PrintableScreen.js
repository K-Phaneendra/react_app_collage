import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";

function PrintableScreen(props) {
  const { printableContent } = props;
  useEffect(() => {
    window.print();
  }, []);
  return (
    <div>
      <div className="row justify-content-between">
        <div>
          <Button onClick={() => props.history.goBack()} title="back">
            <IoMdArrowRoundBack />
            &nbsp;Back
          </Button>
        </div>
        <div>
          <Button onClick={() => window.print()} variant="light" title="print notes">
            <AiFillPrinter />
          </Button>
        </div>
      </div>
      <div className="mt-3">{printableContent}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    printableContent: state.simpleReducer.printableContent,
  };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PrintableScreen));
