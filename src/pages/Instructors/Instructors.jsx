/* eslint-disable react-hooks/rules-of-hooks */
import InstructorView from "../../components/InstructorView/InstructorView.Jsx";
import useAllInstructors from "../../hooks/useAllInstructors";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Fade } from "react-awesome-reveal";
import Loader from "../../shared/Loader";
import { useNavigation } from "react-router-dom";

const Instructors = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader/>;
  }
  const [instructors] = useAllInstructors();
  return (
    <div className="my-container">
      <Helmet>
        <title>Golden Peaks | All Instructors</title>
      </Helmet>
      <SectionTitle subHeading="We Provide" heading="The Best Teacher" />
      <Fade cascade damping={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((teacher) => (
            <InstructorView key={teacher._id} teacher={teacher} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Instructors;
