const Page = () => {
  return (
    <div style={{ marginTop: '2em' }}>
      <div className="jumbotron text-center">
        <h1 >Sign Language Translation App </h1>
        <h4>
        THIS Real-Time Sign Language Translation App uses machine learning to transform webcam input into readable
          sign language using a variety of different techniques.
        </h4>
      </div>
      <div className="bg-secondary jumbotron">
        <div className="row justify-content-center">
          <img
            src="opencv.png"
            alt="OpenCV Pipeline Demo"
            className="img-responsive col-xs-12 col-md-6"
            style={{ height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
