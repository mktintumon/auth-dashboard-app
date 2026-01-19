import '../index.css'

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <p className="error-text">{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
};

export default Error;
