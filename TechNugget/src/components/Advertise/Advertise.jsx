export default function Advertise() {
  return (
    <div className="carousel w-full h-[80vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://d2oto3d7z6t29c.cloudfront.net/entries/transformed/22/62/702639_413b9fb091ec45c7bb5da43bbaaa666e.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://d2oto3d7z6t29c.cloudfront.net/entries/transformed/22/62/702639_413b9fb091ec45c7bb5da43bbaaa666e.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://d2oto3d7z6t29c.cloudfront.net/entries/transformed/22/62/702639_413b9fb091ec45c7bb5da43bbaaa666e.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
