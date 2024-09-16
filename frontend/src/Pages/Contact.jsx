const Contact = () => {
  return (
    <div className={`bg-base-200 p-6`}>
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8`}>

        <div className={`card shadow-2xl bg-base-100`}>
          <div className={`card-body`}>
            <h2 className={`card-title text-center`}>Get in Touch</h2>
            <form>
              <div className={`form-control`}>
                <label className={`label`}>
                  <span className={`label-text`}>Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`input input-bordered`}
                />
              </div>

              <div className={`form-control`}>
                <label className={`label`}>
                  <span className={`label-text`}>Email</span>
                </label>
                <input
                  type="email"
                  placeholder="test@example.com"
                  className={`input input-bordered`}
                />
              </div>

              <div className={`form-control`}>
                <label className={`label`}>
                  <span className={`label-text`}>Message</span>
                </label>
                <textarea
                  placeholder="Type your message here"
                  className={`textarea textarea-bordered h-24`}
                ></textarea>
              </div>

              <div className={`form-control mt-6`}>
                <button className={`btn btn-primary`}>Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div className={`card shadow-2xl bg-base-100`}>
          <div className={`card-body`}>
            <h2 className={`card-title text-center`}>Contact Information</h2>
            <p className={`text-lg`}>
              We&apos;d love to hear from you! Reach out to us through the form or
              using the information below:
            </p>

            <div className={`mt-4`}>
              <h3 className={`font-bold`}>Our Office</h3>
              <p>1234 Main Street</p>
              <p>City, State, 56789</p>
            </div>

            <div className={`mt-4`}>
              <h3 className={`font-bold`}>Phone</h3>
              <p>(123) 456-7890</p>
            </div>

            <div className={`mt-4`}>
              <h3 className={`font-bold`}>Email</h3>
              <p>contact@company.com</p>
            </div>

            <div className={`mt-6 `}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95373631531896!3d-37.81627997975165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ba8b7b81e916!2s1234+Main+St%2C+City%2C+State!5e0!3m2!1sen!2s!4v1633914118913!5m2!1sen!2s"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                title="Map Location"
                className={`rounded-lg border border-gray-300`}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
