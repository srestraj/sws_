import doctorOne from "../../../assets/doctorOne.jpg";
import doctorTwo from "../../../assets/doctorTwo.jpg";

const doctors = [
  { id: 1, name: "Dr. Victor Avis explains Orthotropics", image: doctorOne },
  {
    id: 2,
    name: "Orthotropics by Indianapolis dentists Dr. Marla Wilson & Dr. Gordon Klockow",
    image: doctorTwo,
  },
];

const VideoSection = () => {
  return (
    <div className="bg-[#304E5E] flex flex-col items-center justify-center p-10">
      <h1 className="text-wide text-[white] text-center text-3xl p-3 font-semibold">
        Dental practitioners on Orthotropics
      </h1>
      <div className="flex justify-center">
        {doctors?.map((doctor) => (
          <div className="mx-4 " key={doctor.id}>
            <img src={doctor.image} alt="doctor_" className="rounded-3xl " />
            <h3 className="text-center font-semibold text-[white] size-[6] leading-6 max-w-sm mx-auto">
              {doctor.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
