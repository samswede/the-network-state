import './ContentImage.css'; // Assuming your styles are defined here

function ContentImage ({imageID, imageRatio} ) {
  // Calculate padding top value
  const paddingTop = `${(1 / imageRatio) * 100}%`;

  return (
    <div
      id={imageID}
      className="contentImage"
      style={{ paddingTop: paddingTop }}
    >
    </div>
  );
};

export default ContentImage;
