import SalonSlider from "./parts/SalonSlider";
import SalonRegistration from "./parts/SalonRegistration";
import RecentComments from "./parts/RecentComments/RecentComments";
import Feedback from "./parts/Feedback";
import AboutUs from "./parts/About";
import Intro from "./parts/Intro";

function Home() {
  return (
    // <section>
    //   {/* intro */}
    //   <Intro />
    //   {/* slider of limited salons */}
    //   <SalonSlider />
    //   {/* new salon registeration */}
    //   <SalonRegistration />
    //   {/* recent comments */}
    //   <RecentComments />
    //   {/* feedback form */}
    //   <Feedback />
    //   {/* about us */}
    //   <AboutUs />
    // </section>
    <section className="min-h-screen">
      <Intro />
      {/* slider of limited salons */}
      <SalonSlider />
    </section>
  );
}

export default Home;
