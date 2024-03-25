import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/styles/Chat.css";
import { CHAT_WITH_LLM } from "../../redux/dispatchActions/Chat";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function Chat(props) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(props.reply);
    attachMsgToAllMessages(props.reply);
  }, [props.reply]);

  const attachMsgToAllMessages = (msg) => {
    const list = [...messages];
    list.push(msg);
    setMessages(list);
  };

  const changeDraft = (e) => {
    setDraft(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    attachMsgToAllMessages(draft);
    const body = {
      message: draft,
    };
    props.CHAT_WITH_LLM(body);
    // empty draft
    setDraft("");
  };

  return (
    <div>
      <div className="text-center">
        <h1>Chat</h1>
        <h3>
          This is an LLM chatbot, which is using Langchain and Pinecone(Vector
          DB) behind the scenes
        </h3>
      </div>
      <Row>
        <Col>
          <div className="chatbot-container">
            <div className="chatbot-messages">
              {/* Chat messages will be displayed here */}
              {messages.map((message) => (
                <p>{message}</p>
              ))}
            </div>
            <Form className="chatbot-form" onSubmit={handleSubmit}>
              <Row>
                <Col md="8">
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="draft"
                      placeholder="Type your message..."
                      onChange={changeDraft}
                      value={draft}
                    />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Button
                    className="mt-1"
                    variant="primary"
                    type="submit"
                    id="submit"
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  reply: state.chat.reply,
});

const mapDispatchToProps = (dispatch) => {
  return {
    CHAT_WITH_LLM: (body) => dispatch(CHAT_WITH_LLM(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Chat));
