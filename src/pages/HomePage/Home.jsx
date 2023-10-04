import Intro from "./Intro";
import SalonSlider from "./SalonSlider";
import SalonRegistration from "./SalonRegistration";
import RecentComments from "./RecentComments";
import Feedback from "./Feedback";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <section>
      {/* intro */}
      <Intro />
      {/* slider of limited salons */}
      <SalonSlider />
      {/* new salon registeration */}
      <SalonRegistration />
      {/* recent comments */}
      <RecentComments />
      {/* feedback form */}
      <Feedback />
      {/* about us */}
      <AboutUs />
    </section>
  );
}

export default Home;
