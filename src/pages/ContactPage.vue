<template>
  <div>
    <main>
      <div class="contact-container">
        <div class="contact-image"></div>
        <div class="contact-form">
          <h1>CONTACT US</h1>
          <p>For any questions or inquiries, please fill out the form below:</p>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style>
main {
  margin: 20px;
}

.contact-container {
  display: flex;
  flex-direction: row;
}

.contact-image {
  width: 50%;
  background-image: url("@/assets/FLPARIS23.png");
  background-size: cover;
  background-position: center;
  height: 60vh; /* Adjust the height as needed */
}

.contact-form {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }

  .contact-image {
    width: 100%;
    height: 100px; /* Adjust the height as needed */
  }

  .contact-form {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
