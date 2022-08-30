import proj1 from "../images/projects/ScienceHangman.jpg";

export const Projects = () => {
  return (
    <div id="projects">
      {/*  Creations Container  */}
      <div className="container mx-auto mt-10 mb-0 max-w-6xl px-6 pb-10 md:px-0">
        {/*  Creations header  */}
        <div className="mb-20 flex justify-center md:justify-between">
          <h2 className="text-center text-4xl uppercase  md:text-left md:text-5xl">
            projects
          </h2>
        </div>

        {/*  Items Container  */}
        <div className="item-container">
          {/*  item 1  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src={proj1}
              alt=""
            />
            {/*  Mobile Image  */}
            <img className="w-full md:hidden" src={proj1} alt="" />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <div className="absolute bottom-4 w-52 px-6 duration-200 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
              <h5 className="uppercase">science hangman</h5>
              <p className="hidden text-sm opacity-0 transition-all duration-100 group-hover:block group-hover:opacity-100">
                Javascript
              </p>
            </div>
          </div>

          {/*  item 2  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-night-arcade.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-night-arcade.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>night arcade</h5>
          </div>

          {/*  item 3  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-soccer-team.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-soccer-team.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>soccer team vr</h5>
          </div>

          {/*  item 4  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-grid.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-grid.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>the grid</h5>
          </div>
        </div>

        {/*  Items Container !2!  */}
        <div className="item-container mt-10">
          {/*  item 5  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-from-above.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-from-above.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>from Above VR</h5>
          </div>

          {/*  item 6  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-pocket-borealis.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-pocket-borealis.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>pocket borealis</h5>
          </div>

          {/*  item 7  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-curiosity.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-curiosity.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>curiosity</h5>
          </div>

          {/*  item 8  */}
          <div className="item group">
            {/*  Desktop Image  */}
            <img
              className="hidden w-full duration-200 group-hover:scale-110 md:block"
              src="./images/desktop/image-fisheye.jpg"
              alt=""
            />
            {/*  Mobile Image  */}
            <img
              className="w-full md:hidden"
              src="./images/mobile/image-fisheye.jpg"
              alt=""
            />
            {/*  Image gradient  */}
            <div className="item-gradient"></div>
            {/*  Image text  */}
            <h5>make it fisheye</h5>
          </div>
        </div>

        {/*  Bottom Button Container --FOR MOBILE ONLY  */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="btn w-full md:hidden">See all</button>
        </div>
      </div>
    </div>
  );
};
