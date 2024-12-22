import styles from './ContactStyles.module.css';

// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <h1 className="sectionTitle">Contact</h1>
//       <form action="">
//         <div className="formGroup">
//           <label htmlFor="name" hidden>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email" hidden>
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="message" hidden>
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Message"
//             required></textarea>
//         </div>
//         <input className="hover btn" type="submit" value="Submit" />
//       </form>
//     </section>
//   );
// }

// export default Contact;


import emailjs from 'emailjs-com';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_chandu', 
        'template_chandu', 
        e.target, 
        'x1k3BTIEPYlfY-3sO'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        }
      );
    e.target.reset(); // Reset form fields
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>
      <form onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <button className={styles.hover_btn} type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;