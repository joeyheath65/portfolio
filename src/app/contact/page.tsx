export default function Contact() {
  return (
    <main>
      <h1>Contact Joe Heath</h1>
      <p>
        Interested in working with Joe on your next web development project? 
        Get in touch using the contact form below.
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );  
} 