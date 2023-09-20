

const Success = () => {
  const successContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    marginLeft: '20px',
  };

  const successMessageStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    marginLeft: '500px',
  };


  return (
    <div style={successContainerStyle}>
      <div style={successMessageStyle}>
        <p>Your payment has been made!</p>
      </div>
    </div>
  );
};

export default Success;
