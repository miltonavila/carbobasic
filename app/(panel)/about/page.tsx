import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-2 font-medium">
          <p>
            <span className="font-semibold text-blue-900">Carbo</span>
            <span className="font-semibold text-green-600">Basic</span> is here to provide engineers
            and experts with many years of combined experience in the design, implementation and
            maintenance of industrial units and plants in different industries.
          </p>
          <p>
            Our professionals include Chartered Engineers, Designers, Planners right through to
            Consultants.
          </p>{" "}
          <p>
            For each project you have, <span className="font-semibold text-blue-900">Carbo</span>
            <span className="font-semibold text-green-600">Basic</span> is your one stop
            consultation for the whole project.
          </p>{" "}
          <p>
            Get in touch today to let us know about your needs and how{" "}
            <span className="font-semibold text-blue-900">Carbo</span>
            <span className="font-semibold text-green-600">Basic</span> can make everything just
            that little bit easier.
          </p>
        </div>

        <div className="flex flex-col gap-1 font-medium">
          <div className="flex flex-row gap-4">
            <Image
              alt="mision"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourmision.jpg"
              // style={{aspectRatio: "1"}}
              width={250}
            />
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">Our Mission</p>
              <p>
                To provide <span className="font-semibold text-blue-900">engineering</span>{" "}
                solutions of <span className="font-semibold text-green-600">excellence</span> to
                companies around the world in the business of the Oil & Gas, Petrochemicals,
                Cryogenics, Mining, Nuclear and Hydrogen.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">Our Vision</p>
              <p>
                To be <span className="font-semibold text-blue-900">leaders</span> in providing
                engineering solutions of{" "}
                <span className="font-semibold text-green-600">excellence</span> around the world
                and to be respected and recognised as a{" "}
                <span className="font-semibold text-blue-900">transparent</span>,
                <span className="font-semibold text-green-600">honest</span> and{" "}
                <span className="font-semibold text-blue-900">responsible</span> company.
              </p>
            </div>
            <Image
              alt="mision"
              // className="w-44 h-44 object-contain hidden sm:flex"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourvision.jpg"
              width={250}
            />
          </div>

          <div className="flex flex-row gap-4">
            <Image
              alt="values"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourvalues.jpg"
              width={250}
            />
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">Our Values</p>
              <p>
                <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span> is inspired by the
                <span className="font-semibold text-green-600">respect</span> to all the
                stakeholders in a project we undertake, the{" "}
                <span className="font-semibold text-blue-900">commitment</span> to every task we are
                trusted, the <span className="font-semibold text-green-600">quality</span> of the
                engineering we provide and the safety in our designs. Our{" "}
                <span className="font-semibold text-green-600">achievements</span> build up the
                reputation of <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span> and the trust of our
                clients in our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="py-1 px-8 rounded-xl bg-green-600 text-lg text-blue-900 font-bold">
          <p>Meet Me</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <Image
            alt="milton"
            className="rounded-xl"
            height={150}
            src="/aboutmilton.png"
            width={250}
          />
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-black text-green-600">Who I am?</p>
            <p className="text-lg">
              Hi my name is Milton and Im a graduated Chemical Engineer from the University of
              Buenos Aires, with a postgraduate degree in Career of Specialisation in Oil from the
              Institute of the Oil & Gas of the University of Buenos Aires.
            </p>
            <p>
              I have +20 years of experience as a Process Engineer in EPC projects in the Oil & Gas
              area of business and for petrochemicals, cryogenic terminals and gas treatment
              projects.
            </p>
            <p>
              I am a chartered Engineer in the UK and a member of IChemE with a continuous
              collaboration with the institution as an active member of IChemE North West Members
              Group Commitee since 2016.
            </p>
            <p>
              In 2019 I decided to offer my services to different industries by creating{" "}
              <span className="font-semibold text-blue-900">Carbo</span>
              <span className="font-semibold text-green-600">Basic</span> Engineering Ltd, and since
              then I could participate in diverse projects in different areas of business and in
              different countries, with a predominant participation in the UK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
