import { notification } from 'antd';
import PropTypes from 'prop-types';

/*
  Note:
    type can be any one of these 'info', 'success', 'warning', 'error'
*/
export const ToastMessage = (type, title, message) => {
  notification[type]({
    message: title,
    description: <div dangerouslySetInnerHTML={{ __html: message }}></div>,
  });
};

ToastMessage.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string
}
ToastMessage.defaultProps = {
  type: 'info',
  title: 'Info',
  message: `You need to pass a message to see it.`
}