const About = () => {
  return (
    <div className={`min-h-screen bg-base-200 p-6`}>
      <div className={`max-w-7xl mx-auto`}>

        <div className={`text-center`}>
          <h1 className={`text-5xl font-bold mb-6`}>About Us</h1>
          <p className={`text-lg text-gray-600`}>
            We are committed to delivering the best services to our clients and
            continuously improving ourselves.
          </p>
        </div>


        <div className={`card bg-base-100 shadow-2xl mt-12 p-6`}>
          <div className={`card-body`}>
            <h2 className={`card-title text-3xl`}>Our Mission</h2>
            <p>
              Our mission is to provide top-quality products and services that
              make a real difference in our clients&apos; lives. We aim to innovate
              and grow while keeping our values at the core of everything we do.
            </p>
          </div>
        </div>


        <div className={`mt-12`}>
          <h2 className={`text-3xl font-bold text-center mb-6`}>Meet Our Team</h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>

            <div className={`card bg-base-100 shadow-xl `}>
              <figure className={`px-10 pt-10 `}>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className={`rounded-full w-24 h-24 ring-primary ring-offset-base-100 ring mb-1`}
                />
              </figure>
              <div className={`card-body items-center text-center`}>
                <h3 className={`card-title`}>Ragnar</h3>
                <p>CEO & Founder</p>
              </div>
            </div>


            <div className={`card bg-base-100 shadow-xl`}>
              <figure className={`px-10 pt-10 `}>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className={`rounded-full w-24 h-24 ring-primary ring-offset-base-100 ring mb-1`}
                />
              </figure>
              <div className={`card-body items-center text-center`}>
                <h3 className={`card-title`}>Floki</h3>
                <p>CTO</p>
              </div>
            </div>


            <div className={`card bg-base-100 shadow-xl`}>
              <figure className={`px-10 pt-10 `}>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className={`rounded-full w-24 h-24 ring-primary ring-offset-base-100 ring mb-1`}
                />
              </figure>
              <div className={`card-body items-center text-center`}>
                <h3 className={`card-title`}>Björn Ironside</h3>
                <p>COO</p>
              </div>
            </div>
          </div>
        </div>


        <div className={`mt-12 text-center`}>
          <p className={`text-gray-500`}>
            © 2024 Project-83. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
