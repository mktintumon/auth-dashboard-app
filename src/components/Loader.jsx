const Loader = () => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Loading data...</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px"
  },
  text: {
    fontSize: "16px",
    fontWeight: "500"
  }
};

export default Loader;
