
const About = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            We are committed to delivering the best services to our clients and continuously improving ourselves.
          </p>
        </div>

        {/* Mission Section */}
        <div className="card bg-base-100 shadow-2xl mt-12 p-6">
          <div className="card-body">
            <h2 className="card-title text-3xl">Our Mission</h2>
            <p>
              Our mission is to provide top-quality products and services that make a real difference in our clients&apos lives. We aim to innovate and grow while keeping our values at the core of everything we do.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 py-1">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Jane Doe</h3>
                <p>CEO & Founder</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 py-1">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">John Smith</h3>
                <p>CTO</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10 py-1">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Team Member"
                  className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Sarah Johnson</h3>
                <p>COO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">MERN 83 All rights reserved. © 2024</p>
        </div>
      </div>
    </div>
  );
};

export default About;
